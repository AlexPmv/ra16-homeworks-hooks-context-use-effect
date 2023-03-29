import React from 'react'
import { useEffect, useState } from 'react';
import ListItem from "./ListItem";

export default function List () {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData () {
      try {
        const result = await fetch(process.env.REACT_APP_USERS_URL)
    
        if (!result.ok) {
          throw new Error(result.statusText)
        }
    
        const users = await result.json()
        setUsers(users);

      } catch(e) {
        console.error(e)
      }
    }

    fetchData();
  }, [])

  if (users.length === 0) {
    return <h3 className='loading-status'>Loading...</h3>
  }

  return (
    <ul className='users-list'>
      {users.map(user => <ListItem key={user.id} {...user} />)}
    </ul>
  )
}