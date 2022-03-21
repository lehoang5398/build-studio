import React from 'react';
import Category from './Category';
import PageProduct from './PageProducts';
import category from './data/Category';
import Cost from './data/Cost';
function HomePage() {
  return (
    <div className='product'>
      <Category category={category} cost ={Cost}/>
      <PageProduct/>
    </div>
  );
}


export default HomePage;
