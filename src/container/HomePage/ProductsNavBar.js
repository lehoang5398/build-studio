import React from 'react';

function ProductsNavBar() {

  return (
    <div className='search-product'>
      <ul className='product-menu-list'>
        <li className='product-menu-item'><button>All</button></li>
        <li className='product-menu-item'><button>pro</button></li>
        <li className='product-menu-item'><button>store</button></li>
      </ul>
      <p className='description'>Choose up to 3 templates (apps similar to your idea) to use as a base.</p>
    </div>
  );
}

export default ProductsNavBar;
