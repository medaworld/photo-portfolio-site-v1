import {
  collection,
  deleteDoc,
  doc,
  FieldPath,
  getDocs,
  onSnapshot,
  orderBy,
  OrderByDirection,
  query,
  setDoc,
  where,
} from 'firebase/firestore';
import { useContext, useEffect, useState } from 'react';
import { v4 } from 'uuid';
import { projectFirestore } from '../firebase/config';
import NotificationContext from '../../context/notificationContext';

const useFirestore = (
  coll?: string,
  filtField?: string | FieldPath | null,
  filtFieldValue?: string | null,
  orderField?: string,
  orderDir?: OrderByDirection | undefined
) => {
  const [docs, setDocs] = useState<any[]>();

  const notificationCtx = useContext(NotificationContext);
  if (coll) {
    useEffect(() => {
      let q;
      if (filtField && filtFieldValue && orderField && orderDir) {
        q = query(
          collection(projectFirestore, coll),
          where(filtField, '==', filtFieldValue),
          orderBy(orderField, orderDir)
        );
      } else if (orderField && orderDir) {
        q = query(
          collection(projectFirestore, coll),
          orderBy(orderField, orderDir)
        );
      } else if (filtField && filtFieldValue) {
        q = query(
          collection(projectFirestore, coll),
          where(filtField, '==', filtFieldValue)
        );
      } else {
        q = query(collection(projectFirestore, coll));
      }
      try {
        onSnapshot(q, (snapshot) => {
          let documents: any[] = [];
          snapshot.docs.forEach((doc) => {
            documents.push({ ...doc.data() });
          });
          setDocs(documents);
        });
      } catch (err) {
        notificationCtx.showNotification({
          title: 'Error',
          message: 'Error fetching data',
          status: 'error',
        });
      }
    }, [coll, filtFieldValue]);
  }

  const fetchFirestore = async (
    coll: string,
    filtField?: string | null,
    filtFieldValue?: string | null,
    orderField?: string,
    orderDir?: OrderByDirection | undefined
  ) => {
    let fetchedDocs: any[] = [];
    try {
      let q;
      if (filtField && filtFieldValue && orderField && orderDir) {
        q = query(
          collection(projectFirestore, coll),
          where(filtField, '==', filtFieldValue),
          orderBy(orderField, orderDir)
        );
      } else if (orderField && orderDir) {
        q = query(
          collection(projectFirestore, coll),
          orderBy(orderField, orderDir)
        );
      } else if (filtField && filtFieldValue) {
        q = query(
          collection(projectFirestore, coll),
          where(filtField, '==', filtFieldValue)
        );
      } else {
        q = query(collection(projectFirestore, coll));
      }
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        fetchedDocs.push(data);
      });
    } catch (err) {
      notificationCtx.showNotification({
        title: 'Error',
        message: 'Error fetching data',
        status: 'error',
      });
    }
    return fetchedDocs;
  };

  const addCategory = (category: string, img?: string | null) => {
    const id = v4();
    try {
      if (!category || category.trim().length < 1) {
        return notificationCtx.showNotification({
          title: 'Error',
          message: 'Please enter valid input',
          status: 'error',
        });
      }
      setDoc(doc(projectFirestore, 'categories', id), {
        id: id,
        category: category,
        category_lower: category?.replace(/[^a-z0-9]/gi, '').toLowerCase(),
        coverImg: img ? img : null,
        timeCreated: new Date(),
      });
    } catch (err) {
      console.log(err);
    }
  };

  const updateCategory = (
    id: string,
    category: string,
    img?: string | null
  ) => {
    try {
      setDoc(doc(projectFirestore, 'categories', id), {
        id: id,
        category: category,
        category_lower: category?.replace(/[^a-z0-9]/gi, '').toLowerCase(),
        coverImg: img ? img : null,
        timeCreated: new Date(),
      });
      notificationCtx.showNotification({
        title: 'Success',
        message: 'Successfully updated',
        status: 'success',
      });
    } catch (err) {
      notificationCtx.showNotification({
        title: 'Error',
        message: 'Error updating',
        status: 'error',
      });
    }
  };

  const deleteCategory = (id: string) => {
    const docRef = doc(projectFirestore, 'categories', id);
    deleteDoc(docRef)
      .then(() => {
        notificationCtx.showNotification({
          title: 'Success',
          message: 'Successfully deleted',
          status: 'success',
        });
      })
      .catch((err) =>
        notificationCtx.showNotification({
          title: 'Error',
          message: 'Error deleting',
          status: 'error',
        })
      );
  };

  const addSubCategory = (
    category: string,
    subcategory: string,
    img?: string | null
  ) => {
    const id = v4();
    try {
      if (
        !category ||
        !subcategory ||
        category.trim().length < 1 ||
        subcategory.trim().length < 1
      ) {
        return notificationCtx.showNotification({
          title: 'Error',
          message: 'Please enter valid input',
          status: 'error',
        });
      }
      setDoc(doc(projectFirestore, 'subcategories', id), {
        id: id,
        category: category,
        subcategory: subcategory,
        category_lower: category?.replace(/[^a-z0-9]/gi, '').toLowerCase(),
        subcategory_lower: subcategory
          ?.replace(/[^a-z0-9]/gi, '')
          .toLowerCase(),
        coverImg: img ? img : null,
      });
      notificationCtx.showNotification({
        title: 'Success',
        message: 'Successfully added',
        status: 'success',
      });
    } catch (err) {
      notificationCtx.showNotification({
        title: 'Error',
        message: 'Error adding',
        status: 'error',
      });
    }
  };

  const updateSubCategory = (
    id: string,
    category: string,
    subcategory: string,
    img?: string | null
  ) => {
    try {
      if (
        !category ||
        !subcategory ||
        !img ||
        category.trim().length < 1 ||
        subcategory.trim().length < 1
      ) {
        return notificationCtx.showNotification({
          title: 'Error',
          message: 'Please enter valid input',
          status: 'error',
        });
      }
      setDoc(doc(projectFirestore, 'subcategories', id), {
        id: id,
        category: category,
        subcategory: subcategory,
        category_lower: category?.replace(/[^a-z0-9]/gi, '').toLowerCase(),
        subcategory_lower: subcategory
          ?.replace(/[^a-z0-9]/gi, '')
          .toLowerCase(),
        coverImg: img ? img : null,
        timeCreated: new Date(),
      });
      notificationCtx.showNotification({
        title: 'Success',
        message: 'Successfully updated subcategory',
        status: 'success',
      });
    } catch (err) {
      notificationCtx.showNotification({
        title: 'Error',
        message: 'Error updating subcategory',
        status: 'error',
      });
    }
  };

  const deleteSubCategory = (id: string) => {
    const docRef = doc(projectFirestore, 'subcategories', id);
    deleteDoc(docRef)
      .then(() => {
        notificationCtx.showNotification({
          title: 'Success',
          message: 'Successfully deleted',
          status: 'success',
        });
      })
      .catch((err) =>
        notificationCtx.showNotification({
          title: 'Error',
          message: 'Error deleting subcategory',
          status: 'error',
        })
      );
  };

  function updateImage(
    id: string,
    description: string | undefined,
    category: string | undefined,
    subcategory: string | undefined,
    dateTaken: Date,
    url: string,
    timeCreated: string
  ) {
    try {
      if (
        !category ||
        !subcategory ||
        !dateTaken ||
        category.trim().length < 1 ||
        subcategory.trim().length < 1
      ) {
        return notificationCtx.showNotification({
          title: 'Error',
          message: 'Please enter valid input',
          status: 'error',
        });
      }
      setDoc(doc(projectFirestore, 'images', id), {
        id: id,
        url: url,
        dateTaken: dateTaken,
        description: description,
        category: category,
        subcategory: subcategory,
        category_lower: category?.replace(/[^a-z0-9]/gi, '').toLowerCase(),
        subcategory_lower: subcategory
          ?.replace(/[^a-z0-9]/gi, '')
          .toLowerCase(),
        timeCreated: timeCreated,
      });
      notificationCtx.showNotification({
        title: 'Success',
        message: 'Successfully updated image',
        status: 'success',
      });
    } catch (err) {
      notificationCtx.showNotification({
        title: 'Error',
        message: 'Error updating image',
        status: 'error',
      });
    }
  }

  return {
    fetchFirestore,
    addCategory,
    updateCategory,
    deleteCategory,
    addSubCategory,
    updateSubCategory,
    deleteSubCategory,
    updateImage,
    docs,
  };
};

export default useFirestore;
