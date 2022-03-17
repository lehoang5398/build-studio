import React from 'react';

function PriceProduct(props) {
  const { Currency, onClick } = props;
  const handleClickPrice = (item) => {
    if (!Currency) return;
    onClick(item)
  }
  return (
    <div>
      {
        Currency.map((item) => (
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
