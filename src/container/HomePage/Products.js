
import { useDispatch, useSelector } from 'react-redux';
import dataProducts from '../HomePage/data/products';
import PropTypes from 'prop-types';
import { GrAdd } from 'react-icons/gr';
import { useState } from 'react';
import AddToCart from './AddToCart';
import { removeCart, removeCartItem as removeCartItemAction, setCarts } from './actions';

function Products({ onDetailProduct }) {
  const dispath = useDispatch();
  const [isCarts, setIsCarts] = useState(false);
  const unitMoney = useSelector(state => state.unitMoney.unit);
  const categoryId = useSelector(state => state.category.categoryId);
  const products = useSelector(state => state.addToCart.products);

  const onClickDetail = (item) => {
    if (onDetailProduct) {
      onDetailProduct(item)
    }
  };

  const checkUnitMoney = (products) => {
    switch (unitMoney) {
      case 'CAD':
        return products.canadian;
      case 'EUR':
        return products.euro;
      case 'DIR':
        return products.aed;
      default:
        return products.price;
    }
  };

  const handleAddToCart = (item) => {
    setIsCarts(true);
    const cart = {
      id: item.id,
      img: item.logo,
    }
    const action = setCarts(cart);
    dispath(action);
  };

  const removeCartItem = (idCart) => {
    dispath(removeCartItemAction(idCart));
  };

  const onSelectActions = (item) => {
    const idex = products.findIndex(p => p.id === item.id)
    if (idex < 0) {
      handleAddToCart(item);
    } else {
      removeCartItem(item.id);
    }
  };

  const removeCarts = () => {
    setIsCarts(false);
    const action = removeCart()
    dispath(action);
  };

  const newProducts = categoryId ? dataProducts.filter(category => category.id === categoryId) : dataProducts;

  return (
    <ul className='product-list'>
      {newProducts.map((item, index) => (
        <li key={index} className='product-item'>
          <div className='templateCard'>
            <div onClick={() => onSelectActions(item)}>
              <div className='product-header'>
                <img className='product-img' alt='' src={item?.logo} />
                <div className='title-text'>
                  {item?.TileText}
                  <span>{item?.name}</span>
                </div>
                <div className='actionbx'>
                  <button className='morebtn'><GrAdd /></button>
                </div>
              </div>
              <div className='product-body'>
                <img className='product-body-img' alt='' src={item?.image} />
                <div className='product-featureDetail'>
                  <span className='body-title'>INCLUDED FEATURES</span>
                  <span className='body-blog'>{item?.features[0]}</span>
                  <span className='features'>{item?.features}</span>
                </div>
              </div>
            </div>
            <div className='product-footer'>
              <div className='title-price'>
                <span className='from'>FROM</span>
                <div className='pricewithmonth'>
                  <span className='price'>{checkUnitMoney(item)}</span>
                  <span className='platForm'>ber<br />platform</span>
                </div>
              </div>
              <div className='detail'>
                <button className='viewDetail'
                  onClick={() => onClickDetail(item)}>View Details</button>
              </div>
            </div>
          </div>
        </li>
      ))}
      {isCarts && <AddToCart products={products} removeCarts={removeCarts} />}
    </ul>
  );
}

Products.propTypes = {
  onDetailProduct: PropTypes.func,
}

export default Products;
