import { Component } from 'react';

import { createPortal } from 'react-dom';

import { Overlay, ModalSt } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.hendleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.hendleKeyDown);
  }

  handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  hendleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  render() {
    const { giveImg } = this.props;

    return createPortal(
      <Overlay onClick={this.handleBackdropClick}>
        <ModalSt>
          <img src={giveImg.largeImageURL} alt={giveImg.tags} />
        </ModalSt>
      </Overlay>,
      modalRoot
    );
  }
}
