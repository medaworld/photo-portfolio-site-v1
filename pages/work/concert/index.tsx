import CategoryCover from '../../../components/Desktop/Work/CategoryCover';
import useFirestore from '../../../helpers/hooks/useFirestore';
import {
  Container,
  Gallery,
} from '../../../styles/components/Desktop/Work/Work';

function ConcertPage() {
  const { docs } = useFirestore('images', 'Concert');

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
              category={doc.category}
              url={''}
            />
          );
        })}
      </Gallery>
    </Container>
  );
}

export default ConcertPage;
