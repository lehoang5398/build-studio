import React from 'react';
import { Product, TitleProduct } from '../../../assets/image';
function Products(props) {
  const product = [
    {
      id:1,
      imageTitle: TitleProduct,
      TileText: 'BUILD AN APP LIKE',
      ProductName: '3D Look',
      imageProduct: Product,
      titleBody: 'INCLUDED FEATURES',
      blogBody: 'activity log, Admin Console , Account Creation',
      features: '+ 34 other features',
      from: 'from',
      price: '$ 27',
      platForm: 'platfrom',
      ber: 'ber'
    },
    {
      id:2,
      imageTitle: TitleProduct,
      TileText: 'BUILD AN APP LIKE',
      ProductName: '3D Look',
      imageProduct: Product,
      titleBody: 'INCLUDED FEATURES',
      blogBody: 'activity log, Admin Console , Account Creation',
      features: '+ 34 other features',
      from: 'from',
      price: '$ 27',
      platForm: 'platfrom',
      ber: 'ber'
    },
    {
      id:3,
      imageTitle: TitleProduct,
      TileText: 'BUILD AN APP LIKE',
      ProductName: '3D Look',
      imageProduct: Product,
      titleBody: 'INCLUDED FEATURES',
      blogBody: 'activity log, Admin Console , Account Creation',
      features: '+ 34 other features',
      from: 'from',
      price: '$ 27',
      platForm: 'platfrom',
      ber: 'ber'
    },

  ]
  return (
    <ul className="product-list">
      {product.map((item) => (
        <li key ={item?.id} className="product-item">
          <div className="templateCard">
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
            <div className="product-footer">
              <div className="title-price">
                <span className="from">{item?.features}</span>
                <div className="pricewithmonth">
                  <span className="price">{item?.price}</span>
                  <span className="platForm">{item?.ber}<br /> {item.platForm} </span>
                </div>
              </div>
              <div className="detail">
                <button className="viewDetail">View Details</button>
              </div>
            </div>
          </div>
        </li>
      ))}

    </ul>
  );
}

export default Products;
