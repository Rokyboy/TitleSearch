import React from 'react'
import style from './list.module.scss'

import {MovieItem} from './item.component'

export const MoviesList = ({ movies }) =>{
    return (
        <div className={style.List}>
            {
                movies.map(movie => <MovieItem movie={movie}/>)
            }
        </div>
    )
}