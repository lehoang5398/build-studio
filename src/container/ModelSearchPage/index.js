import React from 'react';
import PropTypes from 'prop-types';
function ModelSearch({ onCloseSearch }) {
  const handClose = () => {
    if (onCloseSearch) {
      onCloseSearch();
    }
  };

  return (
    <div>
      <button onClick={handClose}>close</button>
      <img alt="" />
      <input />
    </div>
  );
}

ModelSearch.prototype = {
  onCloseSearch: PropTypes.func,
};

export default ModelSearch;
