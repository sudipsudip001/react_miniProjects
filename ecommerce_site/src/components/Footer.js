import React from 'react'
import { FacebookIcon, InstagramIcon } from 'developer-icons'
import styles from './Footer.module.css';

function Footer() {
  return (
    <div className={styles.outer}>
      <div className={styles.leftSide}>
        <p>Let's stay in touch! Sign up to our newsletter
          and get the best deals!
        </p>
        <img src='./images/logo3.png' alt='logo' className={styles.image}/>
        <div className={styles.linker}>
          <a href='#' className={styles.facebook}>
            <FacebookIcon />
          </a>
          <a href='#' className={styles.instagram}>
            <InstagramIcon />
          </a>
        </div>
      </div>
      <div className={styles.rightSide}>
        <div className={styles.formFill}>
          <input type='text' placeholder='Insert email address here' />
          <button type='submit' className={styles.subscribe}>Subscribe now</button>
        </div>
        <div className={styles.twoLinks}>
          <div className={styles.helpLinks}>
            <b>Help</b><br/>
            <a href='#'>FAQ</a>
            <a href='#'>Customer Service</a>
            <a href='#'>How to guides</a>
            <a href='#'>Contact us</a>
          </div>
          <div className={styles.others}>
            <b>Other</b><br/>
            <a href='#'>Privacy Policy</a>
            <a href='#'>Sitemap</a>
            <a href='#'>Subscriptions</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer