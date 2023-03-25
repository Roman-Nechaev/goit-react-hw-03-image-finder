import { GalleryItem, GalleryItemImage } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ images, onClicks, giveImg }) => {
  return (
    <>
      {images.map(image => (
        <GalleryItem key={image.id}>
          <GalleryItemImage
            src={image.webformatURL}
            alt={image.tags}
            onClick={() => {
              onClicks();
              giveImg(image.largeImageURL);
            }}
          />
        </GalleryItem>
      ))}
    </>
  );
};
