import React from 'react';

import style from './mouse.module.scss';

const MouseScroll = () => {
  return (
    <div className={style.mouse}>
      <div className={style.mouse_element} />
      <span className={style.mouse_text}>Scroll for next ghost</span>
    </div>
  );
};

export default MouseScroll;
