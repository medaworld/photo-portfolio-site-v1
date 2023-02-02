import {
  collection,
  DocumentData,
  limit,
  onSnapshot,
  orderBy,
  Query,
  query,
  startAfter,
  where,
} from 'firebase/firestore';
import { useEffect, useState } from 'react';

import { projectFirestore } from '../firebase/config';

export default function infiniteFetch(selectedCategory: any) {
  const [docs, setDocs] = useState([]);
  const [lastKey, setLastKey] = useState<string>();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    let q: Query<DocumentData>;
    if (selectedCategory) {
      q = query(
        collection(projectFirestore, 'images'),
        where('category', '==', selectedCategory),
        orderBy('timeCreated', 'desc'),
        limit(20)
      );
    } else {
      q = query(
        collection(projectFirestore, 'images'),
        orderBy('timeCreated', 'desc'),
        limit(20)
      );
    }
    try {
      setLoading(true);
      onSnapshot(q, (snapshot) => {
        let documents: any[] = [];
        let key: string;
        snapshot.docs.map((doc) => {
          documents.push({ ...doc.data() });
          key = doc.data().timeCreated;
        });
        setDocs(documents);
        setLastKey(key);
        setLoading(false);
      });
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  }, [selectedCategory]);

  async function postNextBatch(key: string) {
    let q: Query<DocumentData>;
    if (selectedCategory) {
      q = query(
        collection(projectFirestore, 'images'),
        where('category', '==', selectedCategory),
        orderBy('timeCreated', 'desc'),
        startAfter(key),
        limit(20)
      );
    } else {
      q = query(
        collection(projectFirestore, 'images'),
        orderBy('timeCreated', 'desc'),
        startAfter(key),
        limit(20)
      );
    }
    try {
      setLoading(true);
      onSnapshot(q, (snapshot) => {
        let documents: any[] = [];
        let key: string;
        snapshot.docs.map((doc) => {
          documents.push({ ...doc.data() });
          key = doc.data().timeCreated;
        });
        setDocs(docs.concat(documents));
        setLastKey(key);
        setLoading(false);
      });
      return { docs, lastKey };
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  }

  return { docs, lastKey, loading, postNextBatch };
}
