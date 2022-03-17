
import { useSelector } from 'react-redux';
import { Product, TitleProduct } from '../../../Assets/image';
function Products(props) {
  const { onDetail } = props;
  const unitMoney = useSelector(state => state.unitMoney.unit)

  const categoryId = useSelector(state => state.category.CategoryID)
    console.log(categoryId);
  const product = [
    {
      id: 1,
      imageTitle: TitleProduct,
      TileText: 'BUILD AN APP LIKE',
      ProductName: '3D Look',
      imageProduct: Product,
      titleBody: 'INCLUDED FEATURES',
      blogBody: 'activity log, Admin Console , Account Creation',
      features: '+ 34 other features',
      from: 'from',
      price: '$ 27',
      euro: ' € 23k',
      canadian: ' C$ 28k',
      platForm: 'PLATFROM',
      ber: 'ber',
      categoryId:1,
    },
    {
      id: 2,
      imageTitle: TitleProduct,
      TileText: 'BUILD AN APP LIKE',
      ProductName: '9GAG',
      imageProduct: Product,
      titleBody: 'INCLUDED FEATURES',
      blogBody: 'activity log, Admin Console , Account Creation',
      features: '+ 23 other features',
      from: 'from',
      price: '$ 350',
      euro: ' € 350k',
      canadian: ' C$ 350k',
      aed: ' د.إ 100k',
      platForm: 'PLATFROM',
      ber: 'ber',
      categoryId:2,
    },
    {
      id: 3,
      imageTitle: TitleProduct,
      TileText: 'BUILD AN APP LIKE',
      ProductName: 'ASOS',
      imageProduct: Product,
      titleBody: 'INCLUDED FEATURES',
      blogBody: 'activity log, Admin Console , Account Creation',
      features: '+ 48 other features',
      from: 'from',
      price: '$ 420',
      euro: '€ 420k',
      canadian: ' C$ 420k',
      platForm: 'PLATFROM',
      ber: 'ber',
      categoryId:3,
    },
  ]
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
      default:
        return product.price;
    }
  }
const newProducts = categoryId ? [product[categoryId]] : product;
// const checkCategory = product.filter(cate => cate.id === categoryId);
  return (
    <ul className="product-list">
      {newProducts.map((item) => (
        <li key={item?.id} className="product-item">
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
