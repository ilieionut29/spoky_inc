import React from 'react';
import BookNowButton from '../booknow-button';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import { BiGhost } from 'react-icons/bi';
import images from '../../assets/images';

import style from './captain_sem.module.scss';

const CaptainSem = () => {
  return (
    <section className={`${style.captain_sem} ${style.slide_item}`}>
      <div className={style.image_wrapper}>
        <img
          className={style.image_element}
          src={images.CaptainSem}
          alt='captain_sem'
          width={480}
          height={432}
        />
        <div className={style.image_info}>
          <span className={style.name}>hello, i'm Captain Sem <BiGhost /> </span>
          <span className={style.name_info}>Veteran Spookt Ghost</span>
          <div className={style.line} />
        </div>
      </div>

      <div className={style.info}>
        <span className={style.info_title}>#1 TOP SARISET GOST 220</span>
        <span className={style.info_subtitle}>RESPAWN THE SPOOKY SKULL</span>
        <span className={style.info_text}>
          In search for cute little puppy, Captain Sem has come back from his
          tragic death. With his hogwarts certified power he promise to be a
          hero for all of ghostkind.
        </span>
        <span className={style.info_crypto}>
          <span className={style.info_crypto_text}>Aailable from 30 oct on OpenSea & after on all NFT's platforms.</span>
          <div className={style.info_crypto_types}>
          <img src={images.Ethereum} alt="ethereum" />
            <img src={images.Bitcoin} alt="bitcoin" />
            <img src={images.XRP} alt="xrp" />
            <img src={images.eGold} alt="egold" />
            <img src={images.Solana} alt="solana" />
            <img src={images.Tether} alt="tether" />
          </div>
        </span>
        <div className={style.info_btns}>
          <BookNowButton text={'Book now'} />
          <div className={style.info_btns_track}>
            his track record
            <HiOutlineArrowNarrowRight className={style.icon} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaptainSem;
