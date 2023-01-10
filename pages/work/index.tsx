import { Container, Gallery } from '../../styles/components/Desktop/Work/Work';
import Img1 from '/public/images/001.jpg';
import Food from '/public/images/002.jpg';
import Concert from '/public/images/003.jpg';
import Img4 from '/public/images/004.jpg';
import Travel from '/public/images/TravelCover.jpg';
import People from '/public/images/PeopleCover.jpg';
import Urban from '/public/images/UrbanCover.jpg';
import Landscape from '/public/images/LandscapeCover.jpg';
import Film from '/public/images/FilmCover.jpg';
import Album from '/public/images/AlbumCover.jpg';
import Architecture from '/public/images/ArchitectureCover.jpg';
import { Image } from '../../styles/components/Desktop/UI';
import CategoryCover from '../../components/Desktop/Work/CategoryCover';

export default function WorkPage() {
  const categories = [
    { name: 'Concert', coverImg: '', url: '', imgSrc: Concert.src },
    { name: 'Travel', coverImg: '', url: '', imgSrc: Travel.src },
    { name: 'Landscapes', coverImg: '', url: '', imgSrc: Img4.src },
    { name: 'Film', coverImg: '', url: '', imgSrc: Film.src },
    { name: 'Landscapes', coverImg: '', url: '', imgSrc: Landscape.src },
    { name: 'Travel', coverImg: '', url: '', imgSrc: Album.src },
    { name: 'People', coverImg: '', url: '', imgSrc: People.src },
    { name: 'Food', coverImg: '', url: '', imgSrc: Food.src },
    { name: 'Landscapes', coverImg: '', url: '', imgSrc: Img1.src },
    { name: 'Urban', coverImg: '', url: '', imgSrc: Urban.src },
    { name: 'Urban', coverImg: '', url: '', imgSrc: Architecture.src },
  ];

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
