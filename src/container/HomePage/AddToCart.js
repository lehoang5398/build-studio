import React from 'react';
import PropTypes from 'prop-types';

AddToCart.propTypes = {
  products: PropTypes.array,
};

function AddToCart({ products, RemoveCart}) {
  console.log(RemoveCart);
  const RemoveCarts  = () => {
    if(RemoveCart){
      RemoveCart()
    }
  }
  return (
    <div className='add-to-cart'>
      <ul className='cart'>
        {products.map((item) => (
          <li className='cart-item' key={item?.id}>
            <img className='img-cart-item' alt="" src={item?.img} />
          </li>
        ))}
        <span onClick={RemoveCarts} className='clear-selection'>Clear selection</span>
      </ul>
      <div className='build-now'>
        <span className='title-build'>1 template selected</span>
        <div className='btn-build-now'>
          <span className='build-now'>Build Now</span>
        </div>
      </div>
    </div>
  );
}

export default AddToCart;
