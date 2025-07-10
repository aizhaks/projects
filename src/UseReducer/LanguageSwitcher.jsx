import { useContext } from "react";
import LanguageContext from "./LanguageContext";
function LanguageSwitcher(){
    const {dispatch, state} =  useContext(LanguageContext)
    const translations = {
        en: {
            title: 'Blog Post', 
            desc: 'sldkm'
        }, 
        kz: {
            title: 'Блог Пост', 
            desc: 'sldkm'
        }, 
        ru: {
            title: 'Блог пост', 
            desc: 'sldkm'
        }
    }
    return(
        <div>
            <select onChange={(e)=> dispatch({type: 'change', payload: e.target.value})}>
                <option value="en">english</option>
                <option value="ru">russian</option>
                <option value="kz">Kazakh</option>
            </select>
            <button onClick={()=> dispatch({type: 'ru'})}>ru</button>
            <h2>{translations[state.language].title}</h2>
            <h1>{translations[state.language].desc}</h1>

        </div>
    )
}

export default LanguageSwitcher