import { Container, Gallery } from '../../styles/components/Desktop/Work/Work';

import CategoryCover from '../../components/Desktop/Work/CategoryCover';
import { categories } from '../../helpers/organizers/categories';

export default function WorkPage() {
  return (
    <Container>
      <Gallery>
        {categories.map((category) => {
          return (
            <CategoryCover
              src={category.imgSrc}
              alt={category.name}
              category={category.name}
              url={''}
            />
          );
        })}
      </Gallery>
    </Container>
  );
}

//Categories: concert, travel, film, people, food, landscapes, urban
