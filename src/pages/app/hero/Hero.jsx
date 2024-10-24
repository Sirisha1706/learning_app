import React from 'react';
import style from './Hero.module.css';

function Hero() {
  return (
    <header>
      <section className={style.logo_wrapper}>
        <img
          className={style.logo}
          src='https://img.freepik.com/premium-vector/young-woman-writing-code-desktop-computer-software-developer-work-programming_625536-3104.jpg'
          alt='logo'
        />
      </section>
      <section className={style.content}>
        <h4>Are you ready to ?</h4>
        <h1>Be a Coding Champion</h1>
        <p>
          See how experienced developers solve problems in real-time. Watching scripted
          tutorials is great, but understanding how developers think is invaluable.
        </p>
      </section>
    </header>
  );
}

export default Hero;
