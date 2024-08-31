import React from 'react';
import styles from './Best.module.css';

function Best() {
  const best = [
    {id: 0, name: 'Earl Gray', description: 'Bold and Fruity Taste', price: '$9', photo: './images/earl_gray.jpeg'},
    {id: 1, name: 'Jasmine Tea', description: 'Light and Refreshing Taste', price: '$9', photo: './images/jasmine.jpeg'},
  ]
  return (
    <div className={styles.all}>
      <div className={styles.texts}>
        <h1>Try our bestsellers</h1><br/>
        <p>Experience the finest teas from around the world with our curated
          selection. We have a tea for every mood and occasion. Our teas are all 
          natural, with no added sugars or artificial ingredients, and are made 
          from high-quality, ethically-sourced herbs. So why wait?
        </p>
      </div>
      <div className={styles.listing}>
        {best.map(bes=>
            <div className={styles.bestOne} key={bes.id}>
              <img src={bes.photo} alt='tea images' className={styles.image}/><br/><br/>
              {bes.price}<br/><br/>
              {bes.name}<br/> <br/>
              {bes.description}
            </div>
        )}
      </div>
      <div>
          <a href='#' className={styles.gt}>
            &gt;
          </a>
      </div>
    </div>
  )
}

export default Best