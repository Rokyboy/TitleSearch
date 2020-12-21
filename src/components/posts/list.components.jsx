import React from 'react'
import style from './list.module.scss'

import {PostItem} from './item.component'

export const PostsList = ({ posts }) =>{
    return (
        <div className={style.List}>
            {
                posts.map(post => <PostItem post={post}/>)
            }
        </div>
    )
}