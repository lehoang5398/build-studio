import React from 'react';
import BodyProducts from './BodyProducts';
import { IoMdClose } from "react-icons/io";
import { GrAttachment } from "react-icons/gr";
import FooterProducts from './FooterProducts';

function DetailProducts({ products, onClose }) {
  const handleClose = () => {
    if (onClose) {
      onClose()
    }
  }

  return (
    <div className='popHolder'>
      <div className='popup-header'>
        <div className='close-Popup'>
          <button className='btn-close-share' >
            <IoMdClose className='icon-close' />
          </button>
          <button className='btn-close-share' >
            <GrAttachment className='icon-close' />
          </button>
          <button onClick={handleClose} className='btn-close' >
            <IoMdClose className='icon-close' />
          </button>
        </div>
      </div>
      <BodyProducts products={products} />
      <FooterProducts/>
    </div>
  );
}

export default DetailProducts;