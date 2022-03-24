import React from 'react';
import { RiCheckboxCircleFill } from 'react-icons/ri';

function PriceProduct({currency,onClick ,isCheckBox}) {

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
            <div className={` ${item.id === isCheckBox ? 'hidden': "block"}`}>
                <RiCheckboxCircleFill/>
            </div>
          </div>
          
        ))
      }
    </div>
  );
}
export default PriceProduct;
