import React from 'react';

function PriceProduct({currency,onClick}) {

  const handleClickPrice = (item) => {
    if (!currency) return;
    onClick(item)
  }
  
  return (
    <div>
      {
        currency.map((item) => (
          <div key={item.id} className='currencychoose'>
            <div className='options-img'>
              <img src={item.img} alt= ""/>
            </div>
            <li className='options-item-Currency-item'
              onClick={() => handleClickPrice(item)}
            >{item.Currency}
            </li>
          </div>
        ))
      }
    </div>
  );
}
export default PriceProduct;
