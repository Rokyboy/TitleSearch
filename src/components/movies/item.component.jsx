import React from 'react'
import style from './item.module.scss'

export const MovieItem = ({ movie } ) =>{
    return (
        <div className={style.Item}>
            <p className={style.Item__title}> 
            {movie.Title}
            </p>
            <span>
  
            </span>
        </div>
    )
}