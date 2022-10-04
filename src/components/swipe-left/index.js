import React from 'react';
import { useMediaQuery } from 'react-responsive'
import { TbArrowAutofitContent } from 'react-icons/tb';

import style from './swipe-left.module.scss';

const SwipeLeft = () => {
  const isDesktop = useMediaQuery({
    query: '(min-width: 768px)'
  })
  
  return (
    <>
      {isDesktop &&     
        <div className={style.swipe}>
          <TbArrowAutofitContent className={style.swipe_icon} />
          <span className={style.swipe_text}>swipe for next ghost</span>
        </div>
      }
    </>
  );
};

export default SwipeLeft;
