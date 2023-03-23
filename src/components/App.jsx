import React, { Component } from 'react';

import { fetchImage } from './Api/api';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    images: null,
    error: null,
  };

  acceptSearch = async search => {
    try {
      const images = await fetchImage(search);
      console.log(images.hits);
      this.setState({ images: images.hits });
    } catch (error) {
      console.log(error);
    }
  };

  giveImage = () => {};

  render() {
    const { images } = this.state;

    return (
      <>
        <div>
          <Searchbar onSubmit={this.acceptSearch} />

          {images && (
            <div>
              <ImageGallery images={images} />
            </div>
          )}
        </div>
      </>
    );
  }
}
