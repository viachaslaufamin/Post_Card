import React from 'react'
import Post from '../Post'
import s from './index.module.css'

export default function PostConteiner( { delete_comment, delete_post, posts , change_like, add_new_comment }) {
  return (
    <div className={s.conteiner}>
      {posts.map(el=><Post delete_comment={delete_comment} add_new_comment={add_new_comment} delete_post={delete_post} change_like={change_like} {...el} key={el.id}/>)}
    </div>
  )
}
