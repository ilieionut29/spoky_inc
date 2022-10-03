import React from 'react';
import { TbArrowAutofitContent } from 'react-icons/tb';
import style from './swipe-left.module.scss';

const SwipeLeft = () => {
  return (
    <div className={style.swipe}>
      <TbArrowAutofitContent className={style.swipe_icon} />
      <span className={style.swipe_text}>swipe for next ghost</span>
    </div>
  );
};

export default SwipeLeft;
