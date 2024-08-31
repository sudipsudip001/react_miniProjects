import React from 'react';
import styles from './About.module.css';

function About() {
  return (
    <div className={styles.above}>
      <div className={styles.image}>
        <img src='./images/tea_shop.jpg' alt='image of shop'/>
      </div>
      <div className={styles.texts}>
        <h1 className={styles.intro}>Welcome to our Herbal Tea Shop!</h1> <br />
        <p className={styles.description}>At our shop, we believe in the power of
          herbs to heal and nourish the body. That's why we've carefully curated 
          a selection of the finest herbal teas from around the world. From 
          refreshing mint to soothing chamomile, we have a tea for every mood
          and occasion.
        </p> <br />
        <a href='#' className={styles.shopNow}>Shop now</a>
      </div>
    </div>
  )
}

export default About