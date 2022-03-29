import React from 'react';
import { AiOutlinePlus,AiOutlineSearch } from 'react-icons/ai';
import { BsArrowDownUp } from 'react-icons/bs';
import PropTypes from 'prop-types';

function ProductsChoose({ onSearch }) {
  const handleOnClickSearch = () => {
    if (onSearch) {
      onSearch()
    }
  };

  return (
    <div className='choose'>
      <h2 className='title-choose'>Choose a base </h2>
      <ul className='choose-list'>
        <li className='choose-item'>
          <button className='search-btn btn' type='button' onClick={handleOnClickSearch}>
            <AiOutlineSearch/>
          </button>
        </li>
        <li className='choose-item'>  
          <button className='btn-item'>
          <div className='choose-icon'>
            <AiOutlinePlus />
          </div>
            Custom Template
          </button>
        </li>
        <li className='choose-item'>
          <button className='arrange btn'>
            <BsArrowDownUp />
          </button>
        </li>
      </ul>
    </div>
  );
}

ProductsChoose.propTypes = {
  onSearch: PropTypes.func,
}

export default ProductsChoose;
