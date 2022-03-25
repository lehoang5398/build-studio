import React, { useState, useEffect } from 'react';
import ProductsChoose from './ProductsChoose';
import Products from './Products';
import DetailProduct from '../ProductsDetailPage';
import ModelSearch from '../ModelSearchPage';
import ProductsNavBar from './ProductsNavBar';

function ProductsWrapper() {
  const [isOpenProduct, setIsOpenProduct] = useState(false);
  const [isOpenSearch, setIsOpenSearch] = useState(false);
  const [product, setProduct] = useState({});

  const onDetailProduct = (item) => {
    setIsOpenProduct(true);
    setProduct(item);
  };

  const onCloseProduct = () => {
    setIsOpenProduct(false)
  };

  const onSearch = () => {
    setIsOpenSearch(true);
  };

  const onCloseSearch = () => {
    setIsOpenSearch(false)
  };

  useEffect(() => {
    if (isOpenProduct) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpenProduct]);

  return (
    <div className='right-sidebar'>
      <ProductsChoose onSearch={onSearch} />
      <div className='container'>
        <ProductsNavBar />
        <Products onDetailProduct={(item) => onDetailProduct(item)} />
      </div>
      {isOpenProduct && <DetailProduct products={product} onCloseProduct={onCloseProduct} />}
      {isOpenSearch && <ModelSearch onCloseSearch={onCloseSearch} />}
    </div>
  );
}

export default ProductsWrapper;
