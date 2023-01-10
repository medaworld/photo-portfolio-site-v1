import fs from 'fs';
import Image from 'next/image';
import probe from 'probe-image-size';
import path from 'path';
import AutoImage from '../../components/Desktop/UI/AutoImage';
import { Container, Gallery } from '../../styles/components/Desktop/Work/Work';
import { useEffect, useState } from 'react';
import { ProbedImages } from '../../helpers/organizers/types';

export default function WorkPage({ probedImgs }: { probedImgs: ProbedImages }) {
  const [columnnWidth, setColumnWidth] = useState<number>(0);

  useEffect(() => {
    function handleResize() {
      const { innerWidth } = window;
      setColumnWidth(innerWidth / 2.01);
    }
    window.addEventListener('load', handleResize);
    window.addEventListener('resize', handleResize);
  }, []);

  const images = probedImgs.map((img) => {
    return (
      <Image
        src={img.path}
        alt={''}
        width={columnnWidth}
        height={(columnnWidth! / img.width) * img.height}
      ></Image>
    );
  });

  return (
    <Container>
      <Gallery>{images}</Gallery>
    </Container>
  );
}

export async function getStaticProps() {
  const imgPaths = [
    '/public/images/004.jpg',
    '/public/images/001.jpg',
    '/public/images/002.jpg',
    '/public/images/003.jpg',
  ];

  let data: any = [];
  const imgs = imgPaths.map((imgPath) => {
    return {
      img: fs.createReadStream(path.join(process.cwd(), imgPath)),
      imgPath,
    };
  });

  let promises = imgs.map((img) =>
    probe(img.img).then((results) => {
      return {
        width: results.width,
        height: results.height,
        path: img.imgPath.replace('/public', ''),
      };
    })
  );

  const probedImgs = await Promise.all(promises).then((results) => {
    return results;
  });

  return {
    props: { probedImgs },
  };
}

//Categories: concert, travel, film, people, food, landscapes, urban
