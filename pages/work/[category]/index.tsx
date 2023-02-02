import { collection, getDocs, orderBy, query, where } from 'firebase/firestore';
import { Key } from 'react';
import BackArrow from '../../../components/Desktop/UI/BackArrow';
import Loader from '../../../components/Desktop/UI/Loader';
import CategoryCover from '../../../components/Desktop/Work/CategoryCover';
import { projectFirestore } from '../../../helpers/firebase/config';
import {
  Container,
  Gallery,
} from '../../../styles/components/Desktop/Work/Work';

export default function CategoryPage({
  subcategories,
}: {
  subcategories: {
    category: string;
    coverImg: string;
    id: string;
    subcategory: string;
    category_lower: string;
    subcategory_lower: string;
  }[];
}) {
  const subcategoriesImages = subcategories.map(
    (
      subcategory: {
        category: string;
        coverImg: string;
        subcategory: string;
        category_lower: string;
        subcategory_lower: string;
      },
      key: Key | null | undefined
    ) => {
      return (
        <CategoryCover
          key={key}
          src={subcategory.coverImg}
          alt={subcategory.subcategory}
          category={subcategory.subcategory}
          url={`/work/${subcategory.category_lower}/${subcategory.subcategory_lower}`}
        />
      );
    }
  );

  return (
    <Container>
      <BackArrow />
      {!subcategoriesImages && <Loader />}
      <Gallery>{subcategoriesImages}</Gallery>
    </Container>
  );
}

export async function getStaticPaths() {
  let paths: any = [];

  try {
    const q = query(
      collection(projectFirestore, 'categories'),
      orderBy('category', 'asc')
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      const category = data.category_lower.toString();
      paths.push({
        params: { category: category },
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
  const category = params.category;
  let subcategories: any = [];

  try {
    const q = query(
      collection(projectFirestore, 'subcategories'),
      where('category_lower', '==', category),
      orderBy('subcategory', 'asc')
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      subcategories.push({
        category: data.category,
        subcategory: data.subcategory,
        id: data.id,
        coverImg: data.coverImg,
        category_lower: data.category_lower,
        subcategory_lower: data.subcategory_lower,
        key: data.id,
      });
    });
  } catch (err) {
    console.log(err);
  }

  return {
    props: {
      subcategories,
    },
  };
}
