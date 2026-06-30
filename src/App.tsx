import React from 'react';
import './App.scss';
import Carousel from './components/Carousel';

interface State {
  images: string[];
  step: number;
  frameSize: number;
  itemWidth: number;
  animationDuration: number;
}

class App extends React.Component<{}, State> {
  state = {
    images: [
      './img/1.png',
      './img/2.png',
      './img/3.png',
      './img/4.png',
      './img/5.png',
      './img/6.png',
      './img/7.png',
      './img/8.png',
      './img/9.png',
      './img/10.png',
    ],
    step: 3,
    frameSize: 3,
    itemWidth: 130,
    animationDuration: 1000,
  };

  handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    this.setState({ [name]: Number(value) } as unknown as Pick<State, keyof State>);
  };

  render() {
    const {
      images,
      step,
      frameSize,
      itemWidth,
      animationDuration,
    } = this.state;

    return (
      <div className="App">
        <h1 data-cy="title">Carousel</h1>

        <div className="controls" style={{ marginBottom: '20px', display: 'flex', gap: '15px' }}>
          <label htmlFor="step">Step:</label>
          <input type="number" name="step" id="step" value={step} onChange={this.handleInputChange} />

          <label htmlFor="frameSize">Frame Size:</label>
          <input type="number" name="frameSize" id="frameSize" value={frameSize} onChange={this.handleInputChange} />

          <label htmlFor="itemWidth">Item Width (px):</label>
          <input type="number" name="itemWidth" id="itemWidth" value={itemWidth} onChange={this.handleInputChange} />

          <label htmlFor="animationDuration">Animation (ms):</label>
          <input type="number" name="animationDuration" id="animationDuration" value={animationDuration} onChange={this.handleInputChange} />
        </div>

        <Carousel
          images={images}
          step={step}
          frameSize={frameSize}
          itemWidth={itemWidth}
          animationDuration={animationDuration}
        />
      </div>
    );
  }
}

export default App;
