import React from 'react';
import BookNowButton from '../booknow-button';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import { RiGhost2Line } from 'react-icons/ri';
import images from '../../assets/images';

import style from './adino-grahami.module.scss';

const AdinoAndGrahami = () => {
  return (
    <section className={`${style.adino_grahami} ${style.slide_item}`}>
      <div className={style.info}>
        <span className={style.info_title}>#2 TOP BEST DUO</span>
        <span className={style.info_subtitle}>BRING BACK MY COTTON CANDY</span>
        <span className={style.info_text}>
          Adino steals his brother cotton candy and eats them all in one bite,
          such a hungry beast. Grahami can't hold any longer his anger to Adino.
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
          <BookNowButton text={'Check now'} />
          <div className={style.info_btns_track}>
            track record
            <HiOutlineArrowNarrowRight className={style.icon} />
          </div>
        </div>
      </div>
      <div className={style.image_wrapper}>
        <img
          className={style.image_element}
          src={images.AdinoAndGrahami}
          alt='captain_sem'
          width={480}
          height={432}
        />
        <div className={style.image_info}>
          <span className={style.name}>
            meet Adino & Grahami <RiGhost2Line />{' '}
          </span>
          <span className={style.name_info}>No words can describe them</span>
          <div className={style.line} />
        </div>
      </div>
    </section>
  );
};

export default AdinoAndGrahami;
