import React, { useEffect, useRef, useState } from 'react';
import { TiArrowSortedDown } from 'react-icons/ti';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { Logo } from '../../assets/image';
import { unitMoney } from '../../container/HomePage/actions';
import useOnClickOutside from '../../utils/UseOnClickOutside';
import { logout } from './action';
import PriceProduct from './Currency';
import currency from './data/currencies';
import SignIn from './SignIn';

function Header() {
  const dispath = useDispatch();
  const accessToken = useSelector((state) => state.user.accessToken);
  const tokenRefresh = useSelector((state) => state.user.refreshToken);
  console.log(accessToken);
  const [isOpen, setOpen] = useState(false);
  const [price, setPrice] = useState({ value: 'USD' });
  const [isSignModal, setIsSignModal] = useState(false);
  const [isCheckBox, setIsCheckBox] = useState(1);
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
    setIsSignModal(true);
  };
  const handleCloseSignIn = () => {
    setIsSignModal(false);
  };

  function SignOut() {
    const refreshToken = { refreshToken: tokenRefresh };
    dispath(logout(refreshToken));
  }

  useOnClickOutside(priceProductRef, () => handleClickHidden());

  useEffect(() => {
    if (setIsSignModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [setIsSignModal]);

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
          { Object.keys(accessToken).length === 0 ? (
            <li className="options-item">
            <button
              onClick={handeleClickSignIn}
              type="button"
              className="options-button"
            >
              Sign In
            </button>
            {isSignModal && <SignIn handleCloseSignIn={handleCloseSignIn}/>}
          </li>
          ) : (
            <>
              <li className="options-item">
              <button
                onClick={SignOut}
                type="button"
                className="options-button"
              >
                Log Out
              </button>
            </li>
            </>
          )}
        </ul>
      </div>
    </header>
  );
}

export default Header;
