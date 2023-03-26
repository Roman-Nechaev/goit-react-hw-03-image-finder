import PropTypes from 'prop-types';

import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

import { Gallery } from './ImageGallery.styled';

export const ImageGallery = ({ images, onClick, giveImg }) => {
  return (
    <Gallery>
      <ImageGalleryItem images={images} onClick={onClick} giveImg={giveImg} />
    </Gallery>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
  giveImg: PropTypes.func.isRequired,
};
