import { useRouter } from 'next/router';
import CategoryCover from '../../../components/Desktop/Work/CategoryCover';
import useFirestore from '../../../helpers/hooks/useFirestore';
import {
  Container,
  Gallery,
} from '../../../styles/components/Desktop/Work/Work';

function ConcertPage() {
  const router = useRouter();
  const category = router.query.category;

  const { docs } = useFirestore('images', category);
  console.log(docs);

  return (
    <Container>
      <Gallery>
        {docs?.map((doc, key) => {
          return (
            <CategoryCover
              key={key}
              src={doc.url}
              alt={doc.description}
              category={doc.subcategory}
              url={''}
            />
          );
        })}
      </Gallery>
    </Container>
  );
}

export default ConcertPage;
