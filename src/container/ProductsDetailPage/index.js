import BodyProducts from './BodyProducts';
import { IoMdClose } from "react-icons/io";
import { GrAttachment } from "react-icons/gr";
import { BsArrowsFullscreen } from "react-icons/bs";
import FooterProducts from './FooterProducts';
import imageProducts from './data/imageProducts';

function DetailProducts({ products, onCloseProducts }) {
  
  const handleClose = () => {
    if (onCloseProducts) {
      onCloseProducts()
    }
  };

  return (
    <div className='popHolder'>
      <div className='popup-header'>
        <div className='close-Popup'>
          <button className='btn-close-share' >
            <BsArrowsFullscreen className='icon-close' />
          </button>
          <button className='btn-close-share' >
            <GrAttachment className='icon-close' />
          </button>
          <button onClick={handleClose} className='btn-close' >
            <IoMdClose className='icon-close' />
          </button>
        </div>
      </div>
      <BodyProducts 
      products={products}
      imageProducts = {imageProducts}/>
      <FooterProducts/>
    </div>
  );
}

export default DetailProducts;