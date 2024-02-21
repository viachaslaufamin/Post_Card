import React from 'react';
import CommentBlock from '../CommentBlock'
import s from './index.module.css'

export default function Post( { delete_comment, id, title, description, like, comments, change_like, delete_post, add_new_comment}) {
  const likes = like === true ? 'Liked' : 'Like?'
  const like_styles = {
    color: like ? 'white' : 'black',
    backgroundColor: like ? 'darkblue' : 'white'
  }
  return (
    <div className={s.conteiner}>
      <p>{ title }</p>
      <p>{ description }</p>
      <div 
      style={like_styles}
      onClick={() => change_like(id)}
      >{likes}
      </div>
      <p><CommentBlock delete_comment={delete_comment} post_id={id} add_new_comment={add_new_comment} comments={comments}/></p>
      <p onClick={() => delete_post(id)}>X</p>
    </div>
  )
}
