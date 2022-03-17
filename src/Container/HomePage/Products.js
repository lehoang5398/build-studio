
import { useDispatch, useSelector } from 'react-redux';
import { AddToCart } from './Actions';
import dataProducts from '../HomePage/data/Products';
import PropTypes from 'prop-types';

Products.propTypes = {
  onDetail:PropTypes.any,
}

function Products(props) {
  const { onDetail } = props;
  const unitMoney = useSelector(state => state.unitMoney.unit)

  const categoryId = useSelector(state => state.category.CategoryID)
  const dispath = useDispatch();

  const handleOnClickDetail = (item) => {
    if (onDetail) {
      onDetail(item)
      console.log(onDetail);
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
    const cart = {
      id: item.id,
      img: item.imageTitle,
    }
    const action = AddToCart(cart);
    dispath(action);
  }

  const newProducts = categoryId ? [dataProducts[categoryId]] : dataProducts;
    // const checkCategory = product.filter(cate => cate.id === categoryId);
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
                  <input className="morebtn" type="checkbox" id="vehicle1" name="vehicle1" defaultValue="Bike" />
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
                  onClick={() => handleOnClickDetail(item)}>View Details</button>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>

  );
}

export default Products;
