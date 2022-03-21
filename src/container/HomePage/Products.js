
import { useDispatch, useSelector } from 'react-redux';
import dataProducts from '../HomePage/data/Products';
import PropTypes from 'prop-types';
import { GrAdd } from "react-icons/gr";
import { useState } from 'react';
import AddToCart from './AddToCart';
import { removeCart, setCarts } from './actions';


Products.propTypes = {
  onDetail:PropTypes.any,
}

function Products({onDetail}) {
  const dispath = useDispatch();
  const [isCarts, setOnCarts ] = useState(false);
  const unitMoney = useSelector(state => state.unitMoney.unit)
  const categoryId = useSelector(state => state.category.CategoryID)
  const products = useSelector(state => state.addToCart.Products)

  const OnClickDetail = (item) => {
    if (onDetail) {
      onDetail(item)
    }
  }

  const CheckUnitMoney = (product) => {
    switch (unitMoney) {
      case 'CAD':
        return product.canadian;
      case 'EUR':
        return product.euro;
      case 'DIR':
        return product.aed;
      default:
        return product.price;
    }
  }

  const handleAddToCart = (item) => {
    setOnCarts(true);
      const cart = {
        id: item.id,
        img: item.imageTitle, 
      }
      const action = setCarts(cart);
      dispath(action);
  }
  const RemoveCarts = () => {
    setOnCarts(false);
    const action = removeCart()
    dispath(action);
  }

  const newProducts = categoryId ? dataProducts.filter(category => category.id === categoryId) : dataProducts;
 
  
    console.log(newProducts);
  return (
    <ul className="product-list">
      {newProducts.map((item) => (
        <li key={item?.id} className="product-item">  
          <div className="templateCard">
            <div onClick={() => handleAddToCart(item)}>
              <div className="product-header">
                <img className="product-img" alt="" src={item?.imageTitle} />
                <div className="title-text">
                  {item?.TileText}
                  <span>{item?.ProductName}</span>
                </div>
                <div className="actionbx">
                  <button className="morebtn"><GrAdd/></button>
                </div>
              </div>
              <div className="product-body">
                <img className="product-body-img" alt="" src={item?.imageProduct} />
                <div className="product-featureDetail">
                  <span className="body-title">{item?.titleBody}</span>
                  <span className="body-blog">{item?.blogBody}</span>
                  <span className="features">{item?.features}</span>
                </div>
              </div>
            </div>
            <div className="product-footer">
              <div className="title-price">
                <span className="from">{item?.features}</span>
                <div className="pricewithmonth">
                  <span className="price">{CheckUnitMoney(item)}</span>
                  <span className="platForm">{item?.ber}<br /> {item.platForm} </span>
                </div>
              </div>
              <div className="detail">
                <button className="viewDetail"
                  onClick={() => OnClickDetail(item)}>View Details</button>
              </div>
            </div>
          </div>
        </li>
      ))}
      {isCarts && <AddToCart products ={products} RemoveCart = {RemoveCarts}/>}
    </ul>
  );
}

export default Products;
