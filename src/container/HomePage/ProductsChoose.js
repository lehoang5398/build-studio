import React from 'react';
import { Search ,Arrange ,Daucong} from '../../assets/image';
import PropTypes from 'prop-types';

ProductsChoose.propTypes = {
  onSearch: PropTypes.func,
}

function ProductsChoose({onSearch}) {
  const handleOnClickSearch  = () =>{
    if(onSearch){
      onSearch()
    }
  };
  
  return (
    <div className="choose container">
      <h2 className="title-choose">Choose a base </h2>
      <ul className="choose-list">
        <li className="choose-item">
          <button className="search-btn" type="button" onClick ={handleOnClickSearch}>
            <img className="icon-search" alt ="" src={Search} />
          </button>
        </li>
        <li className="choose-item">
          <button className="btn-item">
            <img className="choose-img" alt ="" src={Daucong} />
            Custom Template
          </button>
        </li>
        <li className="choose-item">
          <button className="arrange">
            <img className="arrange-img" alt ="" src={Arrange} />
          </button>
        </li>
      </ul>
    </div>
  );
}

export default ProductsChoose;
