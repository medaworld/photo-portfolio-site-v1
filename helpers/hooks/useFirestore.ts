import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  setDoc,
  where,
} from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { v4 } from 'uuid';
import { projectFirestore } from '../firebase/config';

const useFirestore = (
  coll: string,
  category?: string | string[] | undefined,
  callType?: string
) => {
  const [docs, setDocs] = useState<any[]>();
  useEffect(() => {
    const colRef = collection(projectFirestore, coll);
    let descRef;
    if (category && callType) {
      descRef = query(colRef, where(callType, '==', category));
    } else {
      descRef = query(colRef, orderBy('category', 'asc'));
    }
    onSnapshot(descRef, (snapshot) => {
      let documents: any[] = [];
      snapshot.docs.forEach((doc) => {
        documents.push({ ...doc.data() });
      });
      setDocs(documents);
    });
  }, [coll, category]);

  const addCategory = (category: string, img?: string | null) => {
    const id = v4();
    try {
      setDoc(doc(projectFirestore, 'categories', id), {
        id: id,
        category: category,
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
        coverImg: img ? img : null,
        timeCreated: new Date(),
      });
    } catch (err) {
      console.log(err);
    }
  };

  const deleteCategory = (id: string) => {
    const docRef = doc(projectFirestore, 'categories', id);
    deleteDoc(docRef)
      .then(() => {
        console.log('Category deleted');
      })
      .catch((err) => console.log(err));
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
        subcategory: subcategory,
        category: category,
        coverImg: img ? img : null,
      });
    } catch (err) {
      console.log(err);
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
        coverImg: img ? img : null,
        timeCreated: new Date(),
      });
    } catch (err) {
      console.log(err);
    }
  };

  const deleteSubCategory = (id: string) => {
    const docRef = doc(projectFirestore, 'subcategories', id);
    deleteDoc(docRef)
      .then(() => {
        console.log('Subcategory deleted');
      })
      .catch((err) => console.log(err));
  };

  return {
    docs,
    addCategory,
    updateCategory,
    deleteCategory,
    addSubCategory,
    updateSubCategory,
    deleteSubCategory,
  };
};

export default useFirestore;
