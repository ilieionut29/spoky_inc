import React from 'react';
import { useMediaQuery } from 'react-responsive'

import style from './ghosts-button.module.scss';

const GhostsButton = () => {
  const isDesktop = useMediaQuery({
    query: '(min-width: 768px)'
  })

  return (
    <>
      { isDesktop &&
        <div className={style.button}>
          <svg
            width='180'
            height='89'
            viewBox='0 0 180 89'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M6.30886 22.122C7.2955 13.4216 14.4704 6.73518 23.2187 6.36344L147.532 1.08103C155.42 0.745815 162.585 5.65376 165.122 13.1308L178.101 51.3867C181.788 62.2524 174.369 73.7128 162.946 74.7969L20.3795 88.3275C9.13768 89.3944 -0.237206 79.8464 1.03521 68.626L6.30886 22.122Z' />
          </svg>
    
          <span className={style.button_text}>See all ghosts</span>
        </div>
      }
    </>
  );
};

export default GhostsButton;
