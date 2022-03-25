import React from 'react';
import Categories from './Categories';
import ProductsWrapper from './ProductsWrapper';
import categories from './data/categories';
import Cost from './data/prices';
function HomePage() {

  return (
    <div className='product'>
      <Categories categories={categories} cost={Cost} />
      <ProductsWrapper />
    </div>
  );
}


export default HomePage;
