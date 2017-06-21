import React, { Component } from 'react';
import * as T from "prop-types";
import styles from './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('O_SimpleSlider')
import O_Carousel from 'O_Carousel';

const slides = [
  {
    title: 'From Here To Where? Bitcoin And The Future Of Cryptocurrency.',
    text: "Smart and powerful payments. We believe in transparency, and that is why Humaniq has designed the payment system using Blockchain technologies and bringing them into your pocket.",
    img: '/img/placeholder.svg'
  },
  {
    title: 'Title 2',
    text: "Biometrics: our Passport to Inclusive Banking. We believe that your identity is the strongest password. Avoiding long passwords which can be lost or hacked. ",
    img: '/img/placeholder.svg'
  },
  {
    title: 'Title 3',
    text: "Digital Identity. Humaniq creates virtual profiles which evolve with people as they age. Therefore, the only thing you need to safely manage your financial assets is You, literally.",
    img: '/img/placeholder.svg'
  }
]

class O_SimpleSlider extends Component {

  getSlides(){
    return(
      slides.map( (slide, i) => {
        return(
          <div key={'key_' + i}>
            <div className={cn('slide')} >
              <img className={cn('image')} src={slide.img} width="220" height="220"/>
              <div className={cn('text')}>
                <h4 className="a-h4">
                  <a className="a-h4__link" href="#">{slide.title}</a>
                </h4>
                <p className={cn('description')}>{slide.text}</p>
              </div>
            </div>
          </div>
        )
      })
    )
  }

  next = () => {
    this.refs.reactSwipe.next();
  }

  prev = () => {
    this.refs.reactSwipe.prev();
  }

  render() {
    const swipeOptions = {
      startSlide: 0,
      auto: 0,
      speed: 2000,
      continuous: true
    }

    return (
      <section className={cn()}>
        <div className="l-container">
          <div className={cn('inner')}>
            <div className={cn('prev')} onClick={this.prev}>{'  '}</div>
            <O_Carousel ref="reactSwipe" {...{swipeOptions}}>
              {this.getSlides()}
            </O_Carousel>
            <div className={cn('next')} onClick={this.next}>{'  '}</div>
          </div>
        </div>
      </section>
    )
  }
}

O_SimpleSlider.propTypes = {
};

O_SimpleSlider.defaultProps = {
}

export default O_SimpleSlider
