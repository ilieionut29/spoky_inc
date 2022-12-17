import React from 'react';
import BookNowButton from '../booknow-button';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import { GiPumpkinLantern } from 'react-icons/gi';
import images from '../../assets/images';

import style from './reiza.module.scss';

const Reiza = () => {
  return (
    <section className={`${style.reiza} ${style.slide_item}`}>
      <div className={style.image_wrapper}>
        <img
          className={style.image_element}
          src={images.Reiza}
          alt='reiza'
          width={480}
          height={432}
        />
        <div className={style.image_info}>
          <span className={style.name}>
            The Labu “Reiza” <GiPumpkinLantern />
          </span>
          <span className={style.name_info}>The Living Pumpkin</span>
          <div className={style.line} />
        </div>
      </div>

      <div className={style.info}>
        <span className={style.info_title}>#3 Top Scariest Ghost 2020</span>
        <span className={style.info_subtitle}>UOOOO TRICK OR TREAT!!</span>
        <span className={style.info_text}>
          Hi I’m Reiza, people call me “The Labu” currently I’m trying to learn
          something new, building my own bike with parts only made from
          Malaysia.
        </span>
        <span className={style.info_crypto}>
          <span className={style.info_crypto_text}>
            Aailable from 30 oct on OpenSea & after on all NFT's platforms.
          </span>
          <div className={style.info_crypto_types}>
            <img src={images.Ethereum} alt='ethereum' />
            <img src={images.Bitcoin} alt='bitcoin' />
            <img src={images.XRP} alt='xrp' />
            <img src={images.eGold} alt='egold' />
            <img src={images.Solana} alt='solana' />
            <img src={images.Tether} alt='tether' />
          </div>
        </span>
        <div className={style.info_btns}>
          <BookNowButton text={'Book now'} />
          <div className={style.info_btns_track}>
            track record
            <HiOutlineArrowNarrowRight className={style.icon} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reiza;
