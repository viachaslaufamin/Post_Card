import React from 'react'
import s from './index.module.css'

export default function AddCommentForm({add_new_comment, post_id}) {
  const comment_submit = (event)=>{
    event.preventDefault();
    const { text } = event.target
    const new_comment = {
      id: Date.now(),
      text: text.value
    }
    add_new_comment(new_comment, post_id);
    event.target.reset()
  }
  return (
    <div>
    <form className={s.form} onSubmit={comment_submit}>
      <input type="text" placeholder='comments' name='text' />
      <button>Add</button>
    </form>
    </div>
  )
}
