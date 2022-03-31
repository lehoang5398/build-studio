import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

function FooterProducts({ products, handleAddToCart, handeleRemoveCart }) {
  const carts = useSelector((state) => state.addToCart.products);
  const onCart = () => {
    if (handleAddToCart) {
      handleAddToCart();
    }
  };

  function handeleRemoveCartModal(carts, products) {
    carts.map((item) =>
      item.id === products.id ? handeleRemoveCart(products.id) : ''
    );
  }

  return (
    <>
      {carts.find((x) => x.id === products.id) ? (
        <div className="sticky-Footer-remove">
          <div className="sticky-bottom-bar">
            <button
              onClick={() => handeleRemoveCartModal(carts, products)}
              className="removeTemplateButton"
            >
              Remove tempalte
            </button>
          </div>
        </div>
      ) : (
        <div className="sticky-Footer">
          <div className="sticky-bottom-bar">
            <button onClick={onCart} className="AddTemplateButton">
              Add template
            </button>
          </div>
        </div>
      )}
    </>
  );
}

FooterProducts.propTypes = {
  products: PropTypes.array,
  handleAddToCart: PropTypes.func,
  handeleRemoveCart: PropTypes.func,
};

export default FooterProducts;
