import React, { useEffect, useState } from 'react'
import { auth, db } from '../firebase-config';
import { addDoc, collection } from 'firebase/firestore'; 

import '../App.css'
import { useNavigate } from 'react-router-dom';
const Cp = ({isAuth}) => {
  const [title , setTitle] = useState("");
  const [postText , setPostText] = useState("");
  const postsCollectionRef = collection(db,"posts");
  let navigate = useNavigate();
  const makepost = async () => {
    await addDoc(postsCollectionRef, { 
      title,
      postText,
      author : { name: auth.currentUser.displayName , id: auth.currentUser.uid },
     }) ;
    navigate("/") ;
  };
  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  }, []);

  return (
    <div className='create'>
      <input  placeholder='Title...'  onChange={(event)=>{setTitle(event.target.value)}}  />
      <textarea placeholder='Description...'  onChange={(event)=>{setPostText(event.target.value)}}  />
      <button className='post' onClick={makepost} > Post </button>
    </div>
  )
}

export default Cp