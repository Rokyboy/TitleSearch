import React from 'react'
import style from './item.module.scss'

export const PostItem = ({ post } ) =>{
    return (
        <div className={style.Item}>
            <p className={style.Item__title}> 
            {post.title}
            </p>
            <span>
            {post.body}
            </span>
        </div>
    )
}