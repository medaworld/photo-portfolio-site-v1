import { Container, Gallery } from '../../styles/components/Desktop/Work/Work';

import CategoryCover from '../../components/Desktop/Work/CategoryCover';
import { categories } from '../../helpers/organizers/categories';

export default function WorkPage() {
  return (
    <Container>
      <Gallery>
        {categories.map((category, key) => {
          return (
            <CategoryCover
              key={key}
              src={category.imgSrc}
              alt={category.name}
              category={category.name}
              url={`/work/${category.name.toLowerCase()}`}
            />
          );
        })}
      </Gallery>
    </Container>
  );
}
