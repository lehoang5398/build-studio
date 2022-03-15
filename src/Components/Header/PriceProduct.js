import React from 'react';


function PriceProduct(props) {
  const { Currency, onClick } = props;
  const handleClickPrice = (item) => {
    if (!Currency) return;
    onClick(item)
    console.log(onClick);
  }
  return (
    Currency.map((item) => (
      <li key={item.id} className='options-item-Currency-item'
        onClick={() => handleClickPrice(item)}
      >{item.Currency}
      </li>
    ))

  );
}
export default PriceProduct;
