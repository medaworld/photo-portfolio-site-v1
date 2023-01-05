import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { projectFirestore } from '../../firebase/config';

const useFirestore = (coll: string) => {
  const [docs, setDocs] = useState<any[]>();
  useEffect(() => {
    const colRef = collection(projectFirestore, coll);
    const descRef = query(colRef, orderBy('timeCreated', 'desc'));
    onSnapshot(descRef, (snapshot) => {
      let documents: any[] = [];
      snapshot.docs.forEach((doc) => {
        documents.push({ ...doc.data() });
      });
      setDocs(documents);
    });
  }, [coll]);

  return { docs };
};

export default useFirestore;
