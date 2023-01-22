import {
  collection,
  onSnapshot,
  orderBy,
  query,
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

  return { docs };
};

export default useFirestore;
