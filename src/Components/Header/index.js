import React, { useState,useRef,useEffect } from 'react';
import { Link } from 'react-router-dom';
import { DirHam, Logo , Dola, Euro, Cur } from '../../Assets/image';
import { TiArrowSortedDown } from "react-icons/ti";
import PriceProduct from './PriceProduct';
import { useDispatch } from 'react-redux';
import { UnitMoney } from '../../Redux/Actions/Index';

function Header(props) {
  const [isOpen, setOpen] = useState(false);
  const [price, setPrice] = useState({value:'USD'});
  // const unitMoney = useSelector(state => state.unitMoney.unit)
  const dispath = useDispatch();
  const priceProductRef=useRef(null);
  const Currency = [
    {
      img:Dola,
      id: 1,
      Currency: 'Canadian Dollar',
      value: 'CAD'
    },
    {
      img:DirHam,
      id: 2,
      Currency: 'Dirham',
      value:'DIR'
    },
    {
      img:Euro,
      id: 3,
      Currency: 'Euro',
      value:'EUR'
    },
    {
      img:Cur,
      id: 4,
      Currency: 'Indian Rupee',
      value:'CUR'
    },
  ];
  const handleClickHidden = () => {
    setOpen(false);
  }
  const handleClickOpen = () => {
    setOpen(true);
  }
  const handleClickMenu = (item) => {
    setOpen(false);
    setPrice(item);
    const action = UnitMoney(item.value)
    dispath(action);

  }
  function useOnClickOutside(ref, handler) {
    useEffect(
      () => {
        const listener = (event) => {
          // Do nothing if clicking ref's element or descendent elements
          if (!ref.current || ref.current.contains(event.target)) {
            return;
          }
          handler(event);
        };
        document.addEventListener("mousedown", listener);
        document.addEventListener("touchstart", listener);
        return () => {
          document.removeEventListener("mousedown", listener);
          document.removeEventListener("touchstart", listener);
        };
      },
      [ref, handler]
    );
  }
  useOnClickOutside(priceProductRef,()=>handleClickHidden())
  return (
    <header className="page-header">
      <div className="header-content">
        <div className="logo">
          <h1>
            <Link to="/">
              <img className="logo-img" alt="" src={Logo} />
            </Link>
          </h1>
        </div>
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/">1.Choose a base</Link>
          </li>
          <li className="nav-item">
            <Link to="/">2.Refine features</Link>
          </li>
          <li className="nav-item">
            <Link to="/">3.Plan delivery</Link>
          </li>
        </ul>
        <ul className="options-list">
          <li className="options-item">
            <button type="button" className="options-button">
              Talk to our experts
            </button>
          </li>
          <li className="options-item" ref={priceProductRef}>
            <button onClick={handleClickOpen} type="button" className="options-button">
              {price.value} <TiArrowSortedDown />
            </button>
            {isOpen && (
            <ul className={'options-item-Currency'}>
              <PriceProduct onClick={handleClickMenu} Currency={Currency}/>
            </ul>)
            }
          </li>
          <li className="options-item">
            <button type="button" className="options-button">
              Sign In
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
