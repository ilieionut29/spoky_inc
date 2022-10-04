import React from 'react';

import images from '../../assets/images';
import style from './header.module.scss';

const Header = () => {
  return (
    <div className={style.header}>
      <div className={style.logo}>
        <img src={images.logo} className={style.logo_img} alt='logo' />
        <span className={style.logo_text}>SPOKY INC</span>
      </div>
      <ul className={style.nav}>
        <li className={style.nav_item}>Explore</li>
        <li className={style.nav_item}>Services</li>
        <li className={style.nav_item}>Know more</li>
        <li className={style.nav_item}>Support</li>
      </ul>
    </div>
  );
};

export default Header;
