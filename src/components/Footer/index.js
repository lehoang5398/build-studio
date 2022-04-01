import React from 'react';
import { Link } from 'react-router-dom';
function Footer(props) {
  return (
    <div className="teamlateFooter">
      <div className="page-footer">
        <div className="footer-left">
          {/* <img src /> */}
          <div className="copy-text">Copyright © Builder.ai 2022</div>
        </div>
        <div className="footer-right">
          <Link to="/">Privacy policy </Link>
          <Link to="/">Terms and conditions</Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
