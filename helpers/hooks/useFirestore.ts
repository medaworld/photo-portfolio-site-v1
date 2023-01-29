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
import { useEffect, useState } from 'react';
import { v4 } from 'uuid';
import { projectFirestore } from '../firebase/config';
import { Error } from '../../helpers/organizers/types';

const useFirestore = (
  coll?: string,
  filtField?: string | FieldPath | null,
  filtFieldValue?: string | null,
  orderField?: string,
  orderDir?: OrderByDirection | undefined
) => {
  const [docs, setDocs] = useState<any[]>();
  const [msg, setMsg] = useState<Error>(null);
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
        setMsg('Error collecting data');
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
      setMsg('Error collecting data');
    }
    return fetchedDocs;
  };

  const addCategory = (category: string, img?: string | null) => {
    const id = v4();
    try {
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
      setMsg('Successfully updated');
    } catch (err) {
      setMsg('Error updating category');
    }
  };

  const deleteCategory = (id: string) => {
    const docRef = doc(projectFirestore, 'categories', id);
    deleteDoc(docRef)
      .then(() => {
        console.log('Category deleted');
        setMsg('Successfully deleted');
      })
      .catch((err) => setMsg('Error deleting category'));
  };

  const addSubCategory = (
    category: string,
    subcategory: string,
    img?: string | null
  ) => {
    const id = v4();
    try {
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
      setMsg('Successfully added');
    } catch (err) {
      setMsg('Error adding subcategory');
    }
  };

  const updateSubCategory = (
    id: string,
    category: string,
    subcategory: string,
    img?: string | null
  ) => {
    try {
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
      setMsg('Successfully updated');
    } catch (err) {
      setMsg('Error updating subcategory');
    }
  };

  const deleteSubCategory = (id: string) => {
    const docRef = doc(projectFirestore, 'subcategories', id);
    deleteDoc(docRef)
      .then(() => {
        console.log('Subcategory deleted');
        setMsg('Successfully deleted');
      })
      .catch((err) => setMsg('Error deleting subcategory'));
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
    if (!category) {
      return setMsg('Enter valid category');
    }
    if (!subcategory) {
      return setMsg('Enter valid subcategory');
    }
    if (!dateTaken) {
      return setMsg('Enter valid date');
    }
    try {
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
      setMsg('Successfully updated');
    } catch (err) {
      setMsg('Error updating subcategory');
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
    msg,
  };
};

export default useFirestore;
