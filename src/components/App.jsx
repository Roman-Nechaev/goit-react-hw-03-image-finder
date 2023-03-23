import React, { Component } from 'react';

import { fetchImage } from './Api/api';

export class App extends Component {
  state = {
    images: [],
    error: null,
  };

  async componentDidMount() {
    try {
      const images = await fetchImage();

      this.setState({ images });
      console.log(images);
    } catch (error) {
      console.log(error);
    }
  }

  giveImage = () => {
    // const boo = images.map(image => image.id);
    // console.log(boo);
  };

  render() {
    const { images } = this.state;
    return (
      <>
        <div>
          <p>Hellow </p>
          {images && <div>333</div>}
        </div>
      </>
    );
  }
}
