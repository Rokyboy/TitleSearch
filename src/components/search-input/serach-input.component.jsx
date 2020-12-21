import { React } from "react";
import style from './search-input.module.scss'

export const SearchInput = ({query, onChange, onClear}) => {
    const handleChange = (event) =>{
        event.preventDefault()

        onChange(event.target.value)
    } 

    return(
        <div className={style.SearchInput}>
            <input 
                className={style.SearchInput__input}
                value={query} 
                placeholder="Search" 
                onChange={handleChange} 
            />
            {
                query.length > 0 && (
                    <button
                    className={style.SearchInput__button} 
                    onClick={onClear}>
                        <span>+</span>
                    </button>
                )
            } 
        </div>
    )
}