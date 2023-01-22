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
import { projectFirestore } from '../firebase/config';

const useFirestore = (
  coll: string,
  category?: string | string[] | undefined
) => {
  const [docs, setDocs] = useState<any[]>();
  useEffect(() => {
    const colRef = collection(projectFirestore, coll);
    let descRef;
    if (category) {
      descRef = query(colRef, where('category', '==', category));
    } else {
      descRef = query(colRef, orderBy('timeCreated', 'desc'));
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
    try {
      setDoc(doc(projectFirestore, 'categories', category), {
        category: category,
        coverImg: img ? img : null,
        timeCreated: new Date(),
      });
    } catch (err) {
      console.log(err);
    }
  };

  const deleteCategory = (category: string) => {
    const docRef = doc(projectFirestore, 'categories', category);
    deleteDoc(docRef)
      .then(() => {
        console.log('Category deleted');
      })
      .catch((err) => console.log(err));
  };

  const addSubCategory = (subcategory: string, img?: string) => {
    try {
      setDoc(doc(projectFirestore, 'subcategories', subcategory), {
        categoryOf: category,
        title: subcategory,
        coverImg: img,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const deleteSubCategory = (subcategory: string, img: string) => {
    const docRef = doc(projectFirestore, 'subcategories', subcategory);
    deleteDoc(docRef)
      .then(() => {
        console.log('Category deleted');
      })
      .catch((err) => console.log(err));
  };

  return { docs, addCategory, addSubCategory };
};

export default useFirestore;
