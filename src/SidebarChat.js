import { Avatar } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import db from './firebase';
import './SidebarChat.css';
function SidebarChat({id,name,addNewChat}) {
  const [messages,setMessages]=useState("");
    const createChat=() =>{
        const roomName= prompt("Please enter a name for chat room");
        if (roomName)
        {
            db.collection('Rooms').add({
              name:roomName
            })
        }
    };
    useEffect(() => {
     if(id){
      db.collection('Rooms').doc(id).collection('messages').orderBy('timestamp','desc').onSnapshot((snapshot) =>(
        setMessages(snapshot.docs.map((doc) => doc.data()))
      ));
     }
    
    }, [id])
    
  return !addNewChat ?(
    <Link to={`/rooms/${id}`}>
         <div className='sidebarChat'>
        <Avatar src={`https://robohash.org/${id}.png?set=set4`}/>
        <div className='sidebarChat_info'>
            <h2>{name}</h2>
            <p>{messages[0]?.message}</p>
        </div>
    </div>
    </Link>
   
  ):
  <div onClick={createChat} className='sidebarChat'>
    <h2>Add new Chat</h2>
  </div>
}

export default SidebarChat