import React,{useState,useEffect} from 'react';
import Choose from './Choose';
import SearchBy from './SearchBy';
import Products from './Products';
import DetailProducts from '../ProductsDetail/';
import ModelSearch from '../ModelSearchPage';

function PageProduct() {
  const [isOpenProduct, setIsOpenProduct] = useState(false);
  const [isOpenSearch,setIsOpenSearch] = useState(false);
  const [products,setProducts] = useState({});


  const OnDetail = (item) =>{
    setIsOpenProduct(true);
    setProducts(item); 
  }

  const OnClose = () =>{
    setIsOpenProduct(false)
  }

  const OnSearch = () =>{
    setIsOpenSearch(true);
  }

  const OnCloseSearch = () =>{
    setIsOpenSearch(false)
  }
  

  useEffect(()=>{
    if (isOpenProduct) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  },[isOpenProduct])

  return (
    <div className='right-sidebar'>
      <Choose onSearch = {OnSearch}/>
      <div className='container'>
        <SearchBy />
        <Products onDetail={(item)=>OnDetail(item)} />
      </div>
      {isOpenProduct && <DetailProducts product ={products} onClose={OnClose} />}
      {isOpenSearch && <ModelSearch onCloseSearch = {OnCloseSearch}/>}
    </div>
  );
}

export default PageProduct;
