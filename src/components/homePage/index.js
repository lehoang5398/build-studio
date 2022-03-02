import React from 'react';
import Category from './Category';
import PageProduct from './PageProduct/index,';

function HomePage(props) {
  return (
    <div className='product'>
      <Category/>
      <PageProduct/>
    </div>
  );
}

export default HomePage;
