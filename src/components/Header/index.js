import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../../assets/image';
import { TiArrowSortedDown } from "react-icons/ti";
import PriceProduct from './Currency';
import { useDispatch } from 'react-redux';
import { unitMoney } from '../../container/HomePage/actions';
import currency from './data/currencies';
import useOnClickOutside from '../../unitl/UseOnClickOutside';

function Header() {
  const [isOpen, setOpen] = useState(false);
  const [price, setPrice] = useState({ value: 'USD' });
  const [isCheckBox,setIsCheckBox] = useState(2);
  const dispath = useDispatch();
  const priceProductRef = useRef(null);

  const handleClickHidden = () => {
    setOpen(false);
  }
  const handleClickOpen = () => {
    setOpen(true);
  }
  const handleClickMenu = (item) => {
    setOpen(false);
    setPrice(item);
    const action = unitMoney(item.value)
    dispath(action);
    setIsCheckBox(item.id);
  }

  useOnClickOutside(priceProductRef, () => handleClickHidden())
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
            {/* <img alt ="" src = {EXV}/> */}
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
                <PriceProduct onClick={handleClickMenu}
                  currency={currency}
                  isCheckBox = {isCheckBox}
                />
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
