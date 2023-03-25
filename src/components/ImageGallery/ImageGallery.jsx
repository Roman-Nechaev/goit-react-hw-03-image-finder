import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

import { Gallery } from './ImageGallery.styled';

export const ImageGallery = ({ images, onClick, giveImg }) => {
  return (
    <Gallery>
      <ImageGalleryItem images={images} onClicks={onClick} giveImg={giveImg} />
    </Gallery>
  );
};
