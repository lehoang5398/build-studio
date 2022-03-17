import React from 'react';
import Category from './Category';
import PageProduct from './PageProducts';
import category from '../HomePage/data/Category';
import Cost from '../HomePage/data/Cost';
function HomePage() {
  return (
    <div className='product'>
      <Category category={category} cost ={Cost}/>
      <PageProduct/>
    </div>
  );
}


export default HomePage;
