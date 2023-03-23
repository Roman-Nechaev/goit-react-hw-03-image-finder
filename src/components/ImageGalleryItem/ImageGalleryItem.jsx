import { GalleryItem, GalleryItemImage } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ images }) => {
  return (
    <>
      {images.map(image => (
        <GalleryItem key={image.id}>
          <GalleryItemImage src={image.webformatURL} alt={image.tags} />
        </GalleryItem>
      ))}
    </>
  );
};
