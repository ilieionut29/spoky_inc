import React from 'react';

import images from '../../assets/images';
import BookNowButton from '../booknow-button';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
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
        <div className={style.info_btns}>
          <BookNowButton text={'Try now'} />
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
          <span className={style.name}>Adino & Grahami</span>
          <span className={style.name_info}>No words can describe them</span>
          <div className={style.line} />
        </div>
      </div>
    </section>
  );
};

export default AdinoAndGrahami;
