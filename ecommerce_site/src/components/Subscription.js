import React from 'react';
import styles from './Subscription.module.css';

function Subscription() {
  const features = [
    {id: 0, name: 'Pick your favourite tea', icon:'./images/picker.png'},
    {id: 1, name: 'Choose periodicity', icon:'./images/time.png'},
    {id: 2, name: 'Cancel anytime', icon:'./images/cross.png'},
  ]
  return (
    <>
      <div className={styles.outerText}>
        <h1>Love our tea?</h1><br/>
        <h4>Join our yearly subscription and save 40%! Also, get one extra tea as <br />
          a bonus. No strings attached, simple one click cancellation.
        </h4>
      </div>

      <div className={styles.box}>
        {features.map(feature=>
          <div className={styles.feature} key={feature.id}>
            <img src={feature.icon} alt='feature images' className={styles.photo}/>
            {feature.name}
          </div>
        )}
      </div>

      <div className={styles.lastOnes}>
        <a href='#' className={styles.subscription_button}>Subscribe now</a><br/><br/><br/>
        <p>Existing subscriber? Change your preferences here.</p>
      </div>
    </>
  )
}

export default Subscription