import React from 'react'
import s from './index.module.css'

export default function AddPostForm({add_new_word}) {
  const form_submit = (event)=>{
    event.preventDefault();
    const { title, description } = event.target
    const new_word = {
      id: Date.now(),
      like: false,
      title: title.value,
      description: description.value,
      comments: []
    }
    add_new_word(new_word);
    event.target.reset()

}
  return (
    <div>
        <form className={s.conteiner} onSubmit={form_submit}>
        <input type="text" placeholder='title' name='title' />
        <input type="text" placeholder='description' name='description' />
        <button>Enter</button>
      </form>
    </div>
  )
}
