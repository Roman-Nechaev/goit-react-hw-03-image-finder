import React, { Component } from 'react';

import { fetchImage } from './Api/api';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { LoadMoreBtn } from './Button/Button';

import { Container } from './App.styled';
import Loader from './Loader/Loader';

import { Modal } from './Modal/Modal';

export class App extends Component {
  state = {
    images: null,
    error: null,
    pageNum: 2,
    search: '',
    isLoading: false,
    showModal: false,
    modalImg: null,
  };

  acceptSearch = async search => {
    try {
      this.setState({ images: null });
      this.setState({ isLoading: true });
      this.setState({ search: search });
      this.setState({ pageNum: 2 });
      const images = await fetchImage(search);
      this.setState({ images: images.hits });
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ isLoading: false });
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

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  givePicture = img => {
    this.setState({ modalImg: img });
  };

  render() {
    const { images, isLoading, showModal, modalImg } = this.state;

    return (
      <>
        <Container>
          <Searchbar onSubmit={this.acceptSearch} />
          {isLoading && <Loader />}

          {showModal && <Modal onClose={this.toggleModal} giveImg={modalImg} />}

          {images && (
            <>
              <ImageGallery
                images={images}
                onClick={this.toggleModal}
                giveImg={this.givePicture}
              />
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
