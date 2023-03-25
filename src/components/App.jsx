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
    pageNum: 2,
    search: '',
  };

  acceptSearch = async search => {
    try {
      this.setState({ search: search });
      this.setState({ pageNum: 2 });
      const images = await fetchImage(search);
      this.setState({ images: images.hits });
    } catch (error) {
      console.log(error);
    }
  };

  clickResponse = async () => {
    try {
      const { pageNum, search } = this.state;
      this.setState(prevState => {
        return { pageNum: prevState.pageNum + 1 };
      });
      const img = await fetchImage(search, pageNum);
      const obg = img.hits;
      this.setState(prevState => ({
        images: [...prevState.images, ...obg],
      }));
    } catch (error) {
      console.log(error);
    }
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
            </>
          )}
          {images && images.length > 0 && (
            <>
              <LoadMoreBtn onClick={this.clickResponse} />
            </>
          )}
        </Container>
      </>
    );
  }
}
