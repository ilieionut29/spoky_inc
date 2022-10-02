import React from 'react';

import images from '../../assets/images';
import CustomButton from '../custom-button';
import GhostsButton from '../ghosts-button';

import style from './adino-grahami.module.scss';

const AdinoAndGrahami = () => {
  return (
    <section className={`${style.adino_grahami} ${style.slide_item}`}>
      <div>
        <span>#2 top Best duo </span>
        <span>BRING BACK MY COTTON CANDY</span>
        <span>
          Adino steals his brother cotton candy and eats them all in one bite,
          such a hungry beast. Grahami can't hold any longer his anger to Adino.
        </span>
        <div>
          <CustomButton text={'Book now'} />
          <div>Book now</div>
          <div>track record</div>
        </div>
      </div>

      <div>
        <img src={images.AdinoAndGrahami} alt='' width={100} height={100} />
        <div>
          <div>Adino & Grahami - No words can describe them</div>
          <div>line</div>
        </div>
      </div>

      <GhostsButton />
    </section>
  );
};

export default AdinoAndGrahami;
