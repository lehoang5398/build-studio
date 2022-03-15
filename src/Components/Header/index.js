import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../../Assets/image';
import { TiArrowSortedDown } from "react-icons/ti";
import PriceProduct from './PriceProduct';
import { useDispatch, useSelector } from 'react-redux';
import { UnitMoney } from '../../Redux/Actions/Index';


function Header(props) {
  const [hidden, setHidden] = useState(false);
  const [price, setPrice] = useState({value:'USD'});
  const unitMoney = useSelector(state => state.unitMoney.unit)
  const dispath = useDispatch();
  const Currency = [
    {
      id: 1,
      Currency: 'Canadian Dollar',
      value: 'CAD'

    },
    {
      id: 2,
      Currency: 'Dirham',
      value:'DIR'
    },
    {
      id: 3,
      Currency: 'Euro',
      value:'EUR'
    },
    {
      id: 4,
      Currency: 'Indian Rupee',
      value:'CUR'
    },
  ];
  const handleClick = () => {
    console.log("aaaaaa");
    setHidden(!hidden);
  }
  const handleClickMenu = (item) => {
    setHidden(false)
    setPrice(item)
    const action = UnitMoney(item.value)
    dispath(action);

  }
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
          <li className="options-item">
            <button onClick={handleClick} type="button" className="options-button">
              {price.value} <TiArrowSortedDown />
            </button>
            <ul className={`options-item-Currency ${hidden ? "hidden" : ""}`}>
              <PriceProduct onClick={handleClickMenu} Currency={Currency} />
            </ul>
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
