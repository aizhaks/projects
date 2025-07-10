import React from 'react';
import { useContext } from 'react';
import Lang from './Lang';
function Child1() {
  const lang =  useContext(Lang)
  return (
  <div>
    <p>{lang}</p>
  </div>
  );
}

export default Child1;
