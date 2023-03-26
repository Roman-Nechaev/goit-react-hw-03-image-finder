import React, { Component } from 'react';

import { fetchImage } from './Api/api';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { LoadMoreBtn } from './Button/Button';

import { Container } from './App.styled';
import { Loader } from './Loader/Loader';

import { Modal } from './Modal/Modal';

export class App extends Component {
  state = {
    images: null,
    pageNum: 2,
    search: '',
    isLoading: false,
    showModal: false,
    modalImg: null,
    btnVision: true,
    error: null,
    isLoadingSpinner: false,
  };

  acceptSearch = async search => {
    if (this.state.search === search) {
      return;
    }

    try {
      this.setState({ images: null });
      this.setState({ isLoading: true });
      this.setState({ search: search });
      this.setState({ pageNum: 2 });

      const response = await fetchImage(search);
      this.setState({ images: response.hits });

      if (response.total === 0) {
        console.log('Ничего не нашли!!');
      }
    } catch (error) {
      // console.log(error);
      this.setState({ error: 'чтото пошло не так ' });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  onClickPageUp = async () => {
    try {
      this.setState({ isLoadingSpinner: true });
      const { pageNum, search } = this.state;
      this.setState(prevState => {
        return { pageNum: prevState.pageNum + 1 };
      });
      const response = await fetchImage(search, pageNum);

      const nextPictures = response.hits;
      if (nextPictures.length < 2) {
        console.log('Прячь кнопку и Вы достигли конца списка');
        this.setState({ btnVision: false });
        return;
      }
      this.setState(prevState => ({
        images: [...prevState.images, ...nextPictures],
      }));
    } catch (error) {
      // console.log(error);
      this.setState({ error: 'чтото пошло не так ' });
    } finally {
      this.setState({ isLoading: false });
      this.setState({ isLoadingSpinner: false });
    }
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  isModalPicture = img => {
    this.setState({ modalImg: img });
  };

  render() {
    const {
      images,
      isLoading,
      showModal,
      modalImg,
      error,
      btnVision,
      isLoadingSpinner,
    } = this.state;

    return (
      <>
        <Container>
          <Searchbar onSubmit={this.acceptSearch} />
          {isLoading && <Loader />}

          {error && <p>{error}</p>}

          {images && (
            <>
              <ImageGallery
                images={images}
                onClick={this.toggleModal}
                giveImg={this.isModalPicture}
              />
            </>
          )}
          {images && images.length > 0 && btnVision && (
            <>
              <LoadMoreBtn
                onClick={this.onClickPageUp}
                isLoadingSpin={isLoadingSpinner}
              />
            </>
          )}

          {showModal && <Modal onClose={this.toggleModal} giveImg={modalImg} />}
        </Container>
      </>
    );
  }
}
