import { Container, Gallery } from '../../styles/components/Desktop/Work/Work';

import CategoryCover from '../../components/Desktop/Work/CategoryCover';
import useFirestore from '../../helpers/hooks/useFirestore';

export default function WorkPage() {
  const { docs } = useFirestore('categories');
  console.log(docs);
  return (
    <Container>
      <Gallery>
        {docs?.map((doc, key) => {
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
