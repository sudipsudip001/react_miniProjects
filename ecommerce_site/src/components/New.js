import React from 'react';
import styles from './New.module.css';

function New() {
  let products = [
    {id: 0, name: 'Peppermint Tea', source:'./images/peppermint.jpeg',  description: "This refreshing blend of peppermint leaves is invigorating and invigorating. It's perfect for settling an upset stomach and can help with headaches.", new:1},
    {id: 1, name: 'Rooibos Tea', source:'./images/rooibos.jpeg', description: "This South African herb is rich in antioxidants and has a naturally sweet, earthy flavor. It's great for aiding in digestion and can help with insomnia.", new:0},
    {id: 2, name: 'Ginger Tea', source:'./images/ginger_tea.jpeg', description: "This spicy blend of ginger root is known for its ability to aid digestion and reduce inflammation. It's also great for relieving nausea.", new:1},
  ]
  return (
    <div className={styles.outer}>
      <div className={styles.newProducts}>
        <h1>Just in!</h1><br />
        <h4>Browse our newest products</h4>
      </div>
      <div className={styles.forRow}>
        {products.map(product=>
          <div className={styles.displayNew} key={product.id}>
            <img src={product.source} alt='new product image' className='productImage'/><br />
            {product.new ? 'New': ''}
            {product.name}
            {product.description}<br /><br/>
            <a href='#' className={styles.buyThis}>Buy now</a>
          </div>
        )}
      </div>
    </div>
  )
}

export default New