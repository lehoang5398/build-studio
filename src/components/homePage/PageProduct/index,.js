import React from 'react';
import Choose from './Choose';
import SearchBy from './SearchBy';
import Products from './Products';
function PageProduct(props) {
  return (
    <div className='right-sidebar'>
      <Choose />
      <div className='container'>
        <SearchBy/>
        <Products/>
      </div>
    </div>
  );
}

export default PageProduct;
