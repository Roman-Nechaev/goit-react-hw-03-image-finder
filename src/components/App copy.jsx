import React, { Component } from 'react';

import { fetchImage } from './Api/api';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { LoadMoreBtn } from './Button/Button';

import { Container } from './App.styled';

export class App extends Component {
  state = {
    images: null,
    error: null,
    pageNum: 1,
  };

  acceptSearch = async search => {
    try {
      const images = await fetchImage(search);

      this.setState({ images: images.hits });
    } catch (error) {
      console.log(error);
    }
  };

  pageGo = async (search, pageNum) => {
    console.log(search);
  };

  clickResponse = () => {
    console.log('click');
    this.setState(prevState => {
      return { pageNum: prevState.pageNum + 1 };
    });
  };

  render() {
    const { images } = this.state;

    return (
      <>
        <Container>
          <Searchbar onSubmit={this.acceptSearch} />

          {images && (
            <>
              <ImageGallery images={images} />
              <LoadMoreBtn onClick={this.clickResponse} />
            </>
          )}
        </Container>
      </>
    );
  }
}
