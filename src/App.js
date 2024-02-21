import './App.css';
import { useState } from 'react'
import { post_data } from './data/post_data';
import PostConteiner from './components/PostConteiner';
import AddPostForm from './components/AddPostForm';


function App() {
  const [ posts, setPosts ] = useState(post_data);

  const delete_comment = (post_id, comment_id) =>{
    // Найти пост который мы удаляем
    const target_comments = posts.find(el => el.id === post_id);
    // У найденного поста обращаемся к массиву и находим в нем коментарий
    target_comments.comments = target_comments.comments.filter(el => el.id !== comment_id)
    // Передаем обновленное состояние
    setPosts([...posts]);
  }

  const add_new_comment = (new_comment, post_id) =>{
  const target_comments = posts.find(el => el.id === post_id);
  target_comments.comments.push(new_comment)
  setPosts([...posts]);
  }

  const add_new_word = (new_word) => setPosts([...posts, new_word]);


  const change_like = (id) => {
    const target_like = posts.find(el => el.id === id);
    target_like.like = !target_like.like;
    setPosts([...posts])
  };

  const delete_post = (id) => setPosts(posts.filter(el => el.id !== id))
  return (
    <div>
      <AddPostForm add_new_word={add_new_word}/>
      <PostConteiner delete_comment={delete_comment}  add_new_comment={add_new_comment} delete_post={delete_post} change_like={change_like} posts = {posts}/>
    </div>
  );
}

export default App;
