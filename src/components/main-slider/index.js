import React, { useEffect } from 'react';
import CaptainSem from '../captain-sem';
import AdinoAndGrahami from '../adino-grahami';
import Reiza from '../reiza';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { EffectCoverflow, Pagination } from 'swiper';
import 'swiper/css/effect-coverflow';
// import style from './main-slider.module.scss';

const MainSlider = () => {
  useEffect(() => {
    document.body.setAttribute('data-index', '0');
  }, []);

  const test = (dataIndex) => {
    document.body.setAttribute('data-index', dataIndex.realIndex);
  };
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      onSlideChange={test}
      effect={'coverflow'}
      grabCursor={true}
      centeredSlides={true}
      coverflowEffect={{
        rotate: 100,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
      }}
      pagination={true}
      modules={[EffectCoverflow, Pagination]}
    >
      <SwiperSlide>
        <CaptainSem />
      </SwiperSlide>
      <SwiperSlide>
        <AdinoAndGrahami />
      </SwiperSlide>
      <SwiperSlide>
        <Reiza />
      </SwiperSlide>
    </Swiper>
  );
};

export default MainSlider;
