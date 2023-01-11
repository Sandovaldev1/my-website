import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import {Fragment} from 'react';
import "./Carousel.css"

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
<Fragment>
    <div className='div-carousel'>
    <h2 className='title'>My works</h2>
    </div>
    <Carousel className='Carousel1' activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block" 
          src="https://imgs.search.brave.com/iHKkUC2uhz-27vquF8gNSi93ii61gNlpxgu1qpyUmcY/rs:fit:360:360:1/g:ce/aHR0cHM6Ly9wbmcu/cG5ndHJlZS5jb20v/cG5nLXZlY3Rvci8y/MDIxMDcwMi9vdXJt/aWQvcG5ndHJlZS1w/YWdlLW5vdC1mb3Vu/ZC1vci1lcnJvci00/MDQtd2Vic2l0ZS1w/bmctaW1hZ2VfMzU0/NTQ1MC5qcGc"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src="https://imgs.search.brave.com/iHKkUC2uhz-27vquF8gNSi93ii61gNlpxgu1qpyUmcY/rs:fit:360:360:1/g:ce/aHR0cHM6Ly9wbmcu/cG5ndHJlZS5jb20v/cG5nLXZlY3Rvci8y/MDIxMDcwMi9vdXJt/aWQvcG5ndHJlZS1w/YWdlLW5vdC1mb3Vu/ZC1vci1lcnJvci00/MDQtd2Vic2l0ZS1w/bmctaW1hZ2VfMzU0/NTQ1MC5qcGc"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src="https://imgs.search.brave.com/iHKkUC2uhz-27vquF8gNSi93ii61gNlpxgu1qpyUmcY/rs:fit:360:360:1/g:ce/aHR0cHM6Ly9wbmcu/cG5ndHJlZS5jb20v/cG5nLXZlY3Rvci8y/MDIxMDcwMi9vdXJt/aWQvcG5ndHJlZS1w/YWdlLW5vdC1mb3Vu/ZC1vci1lcnJvci00/MDQtd2Vic2l0ZS1w/bmctaW1hZ2VfMzU0/NTQ1MC5qcGc"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </Fragment>
  );
}

export {ControlledCarousel};