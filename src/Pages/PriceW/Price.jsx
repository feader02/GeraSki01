import React from 'react';
import './price-w.css'
import prices from'./images/prices.png'
import pricesMd from './images/prices-md.png'
import pricesLg from './images/prices-lg.png'


function Price() {

    return (
        <div className='price-w'>
           <h1>Прайси</h1>
           <img src={prices} draggable="false" alt="прайси" className='prices-w__img' />
                <img src={pricesLg} alt="prices" className='prices-w__img-lg'  />
                <img src={pricesMd} alt="prices" className='prices-w__img-md' />
        </div>
    )
}
export default Price