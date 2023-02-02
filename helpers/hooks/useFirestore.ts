import {
  collection,
  DocumentData,
  DocumentReference,
  FieldPath,
  onSnapshot,
  orderBy,
  OrderByDirection,
  Query,
  query,
  where,
} from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { projectFirestore } from '../firebase/config';
import notificationOperations from '../functions/notification';

const useFirestore = (
  coll?: string,
  filtField?: string | FieldPath | null,
  filtFieldValue?: string | null,
  orderField?: string,
  orderDir?: OrderByDirection | undefined
) => {
  const [docs, setDocs] = useState<any[]>();
  const [loading, setLoading] = useState<boolean>();
  const { errorFetching } = notificationOperations();

  if (coll) {
    useEffect(() => {
      let q: Query<DocumentData> | DocumentReference<unknown>;
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
        setLoading(true);
        onSnapshot(q, (snapshot) => {
          let documents: any[] = [];
          snapshot.docs.forEach((doc) => {
            documents.push({ ...doc.data() });
          });
          setDocs(documents);
        });
      } catch (err) {
        setLoading(false);
        errorFetching();
      }
      setLoading(false);
    }, [coll, filtFieldValue]);
  }

  return {
    docs,
    loading,
  };
};

export default useFirestore;
