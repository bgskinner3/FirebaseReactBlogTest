import React, { useState, useEffect } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { db, auth } from '../firebase-config';
import { useNavigate } from 'react-router-dom';

export const CreatePost = ({ isAuth }) => {
  const [title, setTitle] = useState('');
  const [postText, setPostText] = useState('');
  let navigate = useNavigate();

  const postsCollectionRef = collection(db, 'posts');

  const createPost = async () => {
    await addDoc(postsCollectionRef, {
      title: title,
      postText: postText,
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
    });
    navigate('/');
  };
  useEffect(() => {
    if (!isAuth) {
      navigate('/login');
    }
  }, []);
  return (
    <div className="createPostPage">
      <div className="postContainer">
        <h1>Create A Post</h1>
        <div className="inputgroup">
          <label>Title</label>
          <input
            placeholder="Title ..."
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div className="inputgroup">
          <label>Post</label>
          <textarea
            placeholder="Post..."
            onChange={(e) => {
              setPostText(e.target.value);
            }}
          />
        </div>
        <button onClick={createPost}>Submit Post</button>
      </div>
    </div>
  );
};
