import React from 'react';
import PropTypes from 'prop-types';

function AddToCart({ products, removeCarts }) {
  const RemoveCarts = () => {
    if (removeCarts) {
      removeCarts()
    }
  };

  return (
    <>
      {
        products.length > 0
          ?
          (
            <div className='add-to-cart'>
              <ul className='cart'>
                {products?.length > 0 && products.map((item) => (
                  <li className='cart-item' key={item?.id}>
                    <img className='img-cart-item' alt="" src={item?.img} />
                  </li>
                ))}
                <span onClick={RemoveCarts} className='clear-selection'>Clear selection</span>
              </ul>
              <div className='build-now'>
                <span className='title-build'>{products.length} template selected</span>
                <div className='btn-build-now'>
                  <span className='build-now'>Build Now</span>
                </div>
              </div>
            </div>
          )
          :
          (
            <>
            </>
          )
      }
    </>
  );
}

AddToCart.propTypes = {
  products: PropTypes.array,
  removeCarts: PropTypes.func,
};

export default AddToCart;
