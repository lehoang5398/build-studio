import BodyProducts from './BodyProducts';
import { IoMdClose } from 'react-icons/io';
import { GrAttachment } from 'react-icons/gr';
import { BsArrowsFullscreen } from 'react-icons/bs';
import FooterProducts from './FooterProducts';
import imageProducts from './data/imageProducts';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeCartItem, setCarts } from '../HomePage/actions';

function DetailProduct({ products, onCloseProduct }) {
  const dispath = useDispatch();

  const handleClose = () => {
    if (onCloseProduct) {
      onCloseProduct();
    }
  };
  const handleAddToCart = () => {
    const cart = {
      id: products.id,
      img: products.logo,
    };
    console.log(cart.image);
    const action = setCarts(cart);
    dispath(action);
  };
  const handeleRemoveCart = (cartId) => {
    dispath(removeCartItem(cartId));
  };
  return (
    <div className="commonPopUp acti">
      <div className="popOverlay"></div>
      <div className="popHolder">
        <div className="popHolder-container">
          <div className="popup-header">
            <div className="close-Popup">
              <button className="btn-close-share">
                <BsArrowsFullscreen className="icon-close" />
              </button>
              <button className="btn-close-share">
                <GrAttachment className="icon-close" />
              </button>
              <button onClick={handleClose} className="btn-close">
                <IoMdClose className="icon-close" />
              </button>
            </div>
          </div>
          <BodyProducts products={products} imageProducts={imageProducts} />
          <FooterProducts
            handeleRemoveCart={handeleRemoveCart}
            handleAddToCart={handleAddToCart}
            products={products}
          />
        </div>
      </div>
    </div>
  );
}

DetailProduct.propTypes = {
  onCloseProduct: PropTypes.func,
  products: PropTypes.object,
};

export default DetailProduct;
