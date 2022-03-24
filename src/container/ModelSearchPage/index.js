import React from 'react';

function ModelSearch(props) {
  const { onCloseSearch } = props;
  const handClose = () => {
    if (onCloseSearch) {
      onCloseSearch()
    }
  }

  return (
    <div>
      <button onClick={handClose} >close</button>
      <img alt="" />
      <input />
    </div>
  );
}

export default ModelSearch;
