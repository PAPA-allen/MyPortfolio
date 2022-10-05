import './Portfolio.css';
import {Swiper, SwiperSlide} from 'swiper/react';
import Alpha from '../../img/alpha.png';
import Blood from '../../img/blood.png';
import Driver from '../../img/driver.png';
import HR from '../../img/hr.png';
import 'swiper/css';

export const Portfolio = () => {
  return (
    <div className="portfolio" id='Portfolio'>
      {/* Heading */}

      <span>Recent Projects</span>
      <span>My Portfolio</span>

      {/*Swiper */}
      <Swiper 
      spaceBetween={30}
      slideperview={3}
      grabCursor={true}
      className='portfolio-slider'
      >
        <SwiperSlide>
            <img src={Alpha}  alt=""/>
        </SwiperSlide>
        <SwiperSlide >
            <img src={Blood}  alt=""/>
        </SwiperSlide>
        <SwiperSlide >
            <img src={Driver}  alt=""/>
        </SwiperSlide>
        <SwiperSlide >
            <img src={HR}  alt=""/>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

