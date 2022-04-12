import React, { useState, useRef ,useEffect} from 'react';
import { Link } from 'react-router-dom';
import { TiArrowSortedDown } from 'react-icons/ti';
import { useDispatch } from 'react-redux';
import { Logo } from '../../assets/image';
import PriceProduct from './Currency';
import { unitMoney } from '../../container/HomePage/actions';
import currency from './data/currencies';
import useOnClickOutside from '../../utils/UseOnClickOutside';
import SignIn from './SignIn';

function Header() {
  const [isOpen, setOpen] = useState(false);
  const [price, setPrice] = useState({ value: 'USD' });
  const [isSignIn, setSignIn ] = useState(false);
  const [isCheckBox, setIsCheckBox] = useState(1);
  const dispath = useDispatch();
  const priceProductRef = useRef(null);

  const handleClickHidden = () => {
    setOpen(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClickMenu = (item) => {
    setOpen(false);
    setPrice(item);
    const action = unitMoney(item.value);
    dispath(action);
    setIsCheckBox(item.id);
  };

  const handeleClickSignIn = () => {
    setSignIn(true);
  }
  const handleCloseSignIn = () => {
    setSignIn(false)
  }

  useOnClickOutside(priceProductRef, () => handleClickHidden());

  useEffect(() => {
    if (isSignIn) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isSignIn]);

  return (
    <header className="page-header sm:grid-cols-12">
      <div className="header-content">
        <div className="logo sm:grid-cols-12">
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
            {/* <img alt ='' src = {EXV}/> */}
            <button type="button" className="options-button">
              Talk to our experts
            </button>
          </li>
          <li className="options-item" ref={priceProductRef}>
            <button
              onClick={handleClickOpen}
              type="button"
              className="options-button"
            >
              {price.value} <TiArrowSortedDown />
            </button>
            {isOpen && (
              <li className="options-item-Currency">
                <PriceProduct
                  onClick={handleClickMenu}
                  currency={currency}
                  isCheckBox={isCheckBox}
                />
              </li>
            )}
          </li>
          <li className="options-item">
            <button onClick = {handeleClickSignIn} type="button" className="options-button">
              Sign In
            </button>
            {isSignIn && (<SignIn handleCloseSignIn = {handleCloseSignIn}/>)}
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
