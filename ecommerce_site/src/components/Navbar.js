import React from 'react';
import styles from './Navbar.module.css';

function Navbar() {
  return (
    <div className={styles.all}>
      <img src='./images/logo3.png' alt='logo of shop' className={styles.img}/>
      <div className={styles.navLinks}>
        <span><a href='#'>Shop</a></span>
        <span><a href='#'>Subscribe</a></span>
        <span><a href='#'>About</a></span>
      </div>
      <div className={styles.former}>
        <input type='text' className={styles.inputer} placeholder='Search product' />
        <a href='#'>
          <img src='./images/search.png' alt='magnifying glass' className={styles.glass} />
        </a>
      </div>
    </div>
  )
}

export default Navbar