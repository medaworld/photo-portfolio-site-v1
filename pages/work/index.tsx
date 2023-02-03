import { Gallery } from '../../styles/components/Desktop/Work/Work';

import CategoryCover from '../../components/Desktop/Work/CategoryCover';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { projectFirestore } from '../../helpers/firebase/config';
import Loader from '../../components/Desktop/UI/Loader';
import { ReactFragment, useState } from 'react';
import { motion } from 'framer-motion';

export default function WorkPage({
  categories,
}: {
  categories: { category: string; id: string; coverImg: string }[];
}) {
  const [loaded, setLoaded] = useState(false);
  let categoryImages: ReactFragment | JSX.Element[];
  Promise.all(
    (categoryImages = categories?.map((doc, key) => {
      return (
        <CategoryCover
          key={key}
          src={doc.coverImg}
          alt={doc.category}
          category={doc.category}
          url={`/work/${doc.category.toLowerCase()}`}
        />
      );
    }))
  ).then(() => setLoaded(true));

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.1 } }}
      exit={{ opacity: 0, transition: { duration: 0.1 } }}
    >
      {!loaded && <Loader />}
      {loaded && <Gallery>{categoryImages}</Gallery>}
    </motion.div>
  );
}

export async function getStaticProps() {
  let categories: any = [];

  try {
    const q = query(
      collection(projectFirestore, 'categories'),
      orderBy('category', 'asc')
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      categories.push({
        category: data.category,
        id: data.id,
        coverImg: data.coverImg,
      });
    });
  } catch (err) {
    console.log(err);
  }

  return {
    props: {
      categories,
    },
  };
}
