import { GalleryItem, GalleryItemImage } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ images, onClick, giveImg }) => {
  return (
    <>
      {images.map(image => (
        <GalleryItem key={image.id}>
          <GalleryItemImage
            src={image.webformatURL}
            alt={image.tags}
            onClick={() => {
              onClick();
              giveImg(image);
            }}
          />
        </GalleryItem>
      ))}
    </>
  );
};
