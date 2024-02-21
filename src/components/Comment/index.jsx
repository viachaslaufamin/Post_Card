import React from 'react'

export default function Comment({text, post_id, id, delete_comment}) {
  return (
    <div onClick={() => delete_comment(post_id,id)}>
      {text}
    </div>
  )
}
