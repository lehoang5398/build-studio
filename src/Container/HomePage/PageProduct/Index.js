import React,{useState,useEffect} from 'react';
import Choose from './Choose';
import SearchBy from './SearchBy';
import Products from './Products';
import Model from '../../Model/Index';
import ModelSearch from './ModelSearch/index';
function PageProduct(props) {
  const [modalOpen, setModalOpen] = useState(false);
  const [modelSearch,setModelSearch] = useState(false);
  const [view,setView] = useState({});

  const handleOnDetail = (item) =>{
    setModalOpen(true);
    setView(item); 
  }
  useEffect(()=>{
    if (modalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  },[modalOpen,modelSearch])

  const handleOnClose = () =>{
    setModalOpen(false)
  }
  const handleOnSearch = () =>{
    setModelSearch(true);
    // console.log("aaaaaaa");
  }

  const handleOnCloseSearch = () =>{
    setModelSearch(false)
  }

  return (
    <div className='right-sidebar'>
      <Choose onSearch = {handleOnSearch}/>
      <div className='container'>
        <SearchBy />
        <Products onDetail={(item)=>handleOnDetail(item)} />
      </div>
      {modalOpen && <Model onView ={view} onClose={handleOnClose} />}
      {modelSearch && <ModelSearch onCloseSearch = {handleOnCloseSearch}/>}
    </div>
  );
}

export default PageProduct;
