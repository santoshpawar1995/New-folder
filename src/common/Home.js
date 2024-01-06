import React from 'react'
import './Home.css'
import { signOut } from 'firebase/auth'
import { database } from './FirebaseConfig';
import { useNavigate } from 'react-router-dom';
function Home() {
  const history=useNavigate();
  const handleclick=()=>{
    signOut(database).then(val=>{
      console.log(val,"val")
      history('/login')
    })
  }
  return (
   <div>
    home
    <button onClick={handleclick}>logout</button>
   </div>
  )
}

export default Home
