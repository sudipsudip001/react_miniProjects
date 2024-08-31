import React from 'react';
import styles from './Items.module.css';

function Items() {
  const items = [
    {id: 0, name: 'Tea', source:'./images/tea.jpeg'},
    {id: 0, name: 'Bundles', source:'./images/bundles.png'},
    {id: 0, name: 'Subscription', source:'./images/subscription.png'},
  ]
  return (
    <div className={styles.listItems}>
      {items.map(item=>
        <div key={item.id} className={styles.each}>
          <a href="#" className={styles.productLink}>
            <img src={item.source} alt='product image' className={styles.productImage}/>
          </a>
          {item.name}
        </div>
      )}
    </div>
  )
}

export default Items