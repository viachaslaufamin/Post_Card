import React from 'react'
import CommentsConteiner from '../CommentsConteiner'
import AddCommentForm from '../AddCommentForm'

export default function CommentBlock({delete_comment,comments, add_new_comment, post_id}) {
  return (
    <div>
      <CommentsConteiner post_id={post_id} delete_comment={delete_comment} comments={comments}/>
      <AddCommentForm post_id={post_id} add_new_comment={add_new_comment}/>
    </div>
  )
}
