import React, { useEffect } from 'react';
import CaptainSem from '../captain-sem';
import AdinoAndGrahami from '../adino-grahami';
import Reiza from '../reiza';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { EffectCoverflow, Pagination } from 'swiper';
import 'swiper/css/effect-coverflow';
import './main-slider.scss';

const MainSlider = () => {
  useEffect(() => {
    document.body.setAttribute('data-index', '0');
  }, []);

  const onSlideChangeHandler = (dataIndex) => {
    document.body.setAttribute('data-index', dataIndex.realIndex);
  };

  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      onSlideChange={onSlideChangeHandler}
      effect={'coverflow'}
      centeredSlides={true}
      coverflowEffect={{
        rotate: 100,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
      }}
      keyboard={{
        enabled: true,
      }}
      pagination={{
        clickable: true,
      }}
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
