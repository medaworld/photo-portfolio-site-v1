import { collection, getDocs, orderBy, query, where } from 'firebase/firestore';
import { Key } from 'react';
import CategoryCover from '../../../components/Desktop/Work/CategoryCover';
import { projectFirestore } from '../../../helpers/firebase/config';
import { capitalizeFirstLetter } from '../../../helpers/functions/strings';
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
  }[];
}) {
  return (
    <Container>
      <Gallery>
        {subcategories.map(
          (
            subcategory: {
              category: string;
              coverImg: string;
              subcategory: string;
            },
            key: Key | null | undefined
          ) => {
            return (
              <CategoryCover
                key={key}
                src={subcategory.coverImg}
                alt={subcategory.subcategory}
                category={subcategory.subcategory}
                url={`/work/${subcategory.category.toLowerCase()}/${subcategory.subcategory.toLowerCase()}`}
              />
            );
          }
        )}
      </Gallery>
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
      const category = data.category.toString();
      paths.push({
        params: { category: category.toLowerCase() },
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
  const category = capitalizeFirstLetter(params.category);
  let subcategories: any = [];

  try {
    const q = query(
      collection(projectFirestore, 'subcategories'),
      where('category', '==', category)
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      subcategories.push({
        category: data.category,
        subcategory: data.subcategory,
        id: data.id,
        coverImg: data.coverImg,
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
