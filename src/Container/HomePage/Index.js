import React from 'react';
import Category from './Category';
import PageProduct from './PageProduct/Index';

function HomePage(props) {
  return (
    <div className='product'>
      <Category/>
      <PageProduct/>
    </div>
  );
}

export default HomePage;
