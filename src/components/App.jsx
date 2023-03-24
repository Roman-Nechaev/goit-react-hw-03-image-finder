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

  componentDidUpdate(prevProps, prevState) {
    if (prevState.pageNum !== this.state.pageNum) {
      console.log('Увеличилось число ');

      this.acceptSearch();
    }
  }

  acceptSearch = async search => {
    try {
      const { pageNum } = this.state;

      const images = await fetchImage(search, pageNum);

      this.setState({ images: images.hits });
    } catch (error) {
      console.log(error);
    }
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
