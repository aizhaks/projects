import React, { useContext } from 'react';
import Theme from './Theme'
import Lang from './Lang';
function Child() {
const lang =  useContext(Lang)
  return (
<div>
  <p>{lang}</p>
</div>
  );
}

export default Child;
