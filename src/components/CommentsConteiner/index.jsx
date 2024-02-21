import React from 'react'
import Comment from '../Comment'
import s from './index.module.css'

export default function CommentsConteiner({post_id,delete_comment,comments}) {
  return (
    <div className={s.conteiner}>
      {
        comments.map(el=> <Comment post_id={post_id} delete_comment={delete_comment} {...el} key={el.id} /> )
      }
    </div>
  )
}
