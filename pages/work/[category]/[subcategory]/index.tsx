import { collection, getDocs, orderBy, query, where } from 'firebase/firestore';
import { useRouter } from 'next/router';
import Loader from '../../../../components/Desktop/UI/Loader';
import CategoryCover from '../../../../components/Desktop/Work/CategoryCover';
import { projectFirestore } from '../../../../helpers/firebase/config';
import { capitalizeFirstLetter } from '../../../../helpers/functions/strings';
import useFirestore from '../../../../helpers/hooks/useFirestore';
import {
  Container,
  Gallery,
} from '../../../../styles/components/Desktop/Work/Work';

export default function SubCategoryPage({
  images,
}: {
  images: {
    category: string;
    subcategory: string;
    id: string;
    url: string;
    dateTaken: string;
    description: string;
  }[];
}) {
  return (
    <Container>
      {!images && <Loader />}
      <Gallery>
        {images?.map((image, key) => {
          return (
            <CategoryCover
              key={key}
              src={image.url}
              alt={image.description}
              category={image.category}
              url={''}
            />
          );
        })}
      </Gallery>
    </Container>
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
      const category = data.category.toString();
      const subcategory = data.subcategory.toString();
      paths.push({
        params: {
          category: category.toLowerCase(),
          subcategory: subcategory.toLowerCase(),
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
  const subcategory = capitalizeFirstLetter(params.subcategory);
  let images: any = [];

  try {
    const q = query(
      collection(projectFirestore, 'images'),
      where('subcategory', '==', subcategory)
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
