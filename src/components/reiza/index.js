import React from 'react';

import images from '../../assets/images';
import CustomButton from '../custom-button';
import GhostsButton from '../ghosts-button';

import style from './reiza.module.scss';

const Reiza = () => {
  return (
    <section className={`${style.reiza} ${style.slide_item}`}>
      <div>
        <img src={images.Reiza} alt='' width={300} height={300} />

        <div>
          <div>Adino & Grahami -The Living Pumpkin</div>
          <div>line</div>
        </div>
      </div>
      <div>
        <span>#3 Top Scariest Ghost 2020 </span>
        <span>UOOOOTRICK OR TREAT!!</span>
        <span>
          Hi I’m Reiza, people call me “The Labu” currently I’m trying to learn
          something new, building my own bike with parts only made from
          Malaysia.
        </span>
        <div>
          <CustomButton text={'Book now'} />
          <div>Book now</div>
          <div>track record</div>
        </div>
      </div>

      <GhostsButton />
    </section>
  );
};

export default Reiza;
