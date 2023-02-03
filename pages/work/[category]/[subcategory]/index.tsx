import { collection, getDocs, orderBy, query, where } from 'firebase/firestore';
import { motion } from 'framer-motion';
import BackArrow from '../../../../components/Desktop/UI/BackArrow';
import Slideshow from '../../../../components/Desktop/Work/Slideshow';
import { projectFirestore } from '../../../../helpers/firebase/config';
import { Images } from '../../../../helpers/organizers/types';

export default function SubCategoryPage({ images }: { images: Images }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.1 } }}
      exit={{ opacity: 0, transition: { duration: 0.1 } }}
    >
      <BackArrow />
      <Slideshow images={images} />
    </motion.div>
  );
}

export async function getStaticPaths() {
  let paths: any = [];
  try {
    const q = query(
      collection(projectFirestore, 'subcategories'),
      orderBy('subcategory', 'asc')
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      const category = data.category_lower.toString();
      const subcategory = data.subcategory_lower.toString();
      paths.push({
        params: {
          category: category,
          subcategory: subcategory,
        },
      });
    });
  } catch (err) {
    console.log(err);
  }

  return {
    paths: paths,
    fallback: false,
  };
}

export async function getStaticProps(context: { params: any }) {
  const { params } = context;
  const subcategory = params.subcategory;
  let images: any = [];

  try {
    const q = query(
      collection(projectFirestore, 'images'),
      where('subcategory_lower', '==', subcategory)
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      images.push({
        category: data.category,
        subcategory: data.subcategory,
        id: data.id,
        url: data.url,
        dateTaken: JSON.stringify(data.dateTaken),
        description: data.description,
      });
    });
  } catch (err) {
    console.log(err);
  }

  return {
    props: {
      images,
    },
  };
}
