import React, { createContext, useContext, useState } from 'react';
import Theme from './Theme'
import Lang from './Lang'
import Name from './Name';
import Child from './Child';
import Child1 from './Child1';
function App() {

const[theme, setTheme]= useState('white')
const[lang, setLang] = useState('kz')
  return (
    <div>
        <Theme.Provider value={theme}>
         <div>
          <button onClick={()=> theme=='white' ? setTheme('black'): setTheme('white')}>{lang=="kz" ? (theme=='white' ? 'Ақ' : 'Қара') :lang=='ru' ?
           (theme=='white' ? 'Белый' : 'Черный'): lang=='en' ? (theme=='white' ? 'white' : 'black') :
            lang=='tr' ? (theme=='white' ? 'biyaz' : 'qara') : (theme=='白色的' ? '' : '黑色的')}</button>
         </div>
        </Theme.Provider>
        <Lang.Provider value={lang}>
          <div>
            <select onChange={(e)=> setLang(e.target.value)}>
              <option value="kz">kz</option>
               <option value="ru">ru</option>
                <option value="en">en</option>
                 <option value="tr">tr</option>
                  <option value="ch">ch</option>
            </select>
            <p>{lang=='kz' ?  '' :  lang=='ru' ?  '' : lang=='en' ? '': ''}</p>
          </div>
        </Lang.Provider>

    </div>
  );
}

export default App;
