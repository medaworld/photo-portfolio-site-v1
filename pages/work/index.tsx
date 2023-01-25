import { Container, Gallery } from '../../styles/components/Desktop/Work/Work';

import CategoryCover from '../../components/Desktop/Work/CategoryCover';
import useFirestore from '../../helpers/hooks/useFirestore';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { projectFirestore } from '../../helpers/firebase/config';
import Loader from '../../components/Desktop/UI/Loader';

export default function WorkPage({
  categories,
}: {
  categories: { category: string; id: string; coverImg: string }[];
}) {
  return (
    <Container>
      {!categories && <Loader />}
      <Gallery>
        {categories?.map((doc, key) => {
          return (
            <CategoryCover
              key={key}
              src={doc.coverImg}
              alt={doc.category}
              category={doc.category}
              url={`/work/${doc.category.toLowerCase()}`}
            />
          );
        })}
      </Gallery>
    </Container>
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
