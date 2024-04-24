import { getItems, deleteItem } from '../../AppFireBaseUsers/services/people';
import { useState, useEffect } from 'react';
// import React from 'react'

function Delete() {
  const [users, setUsers] = useState();
  const [userId, setUserId] = useState();


  const consult = () => {
    getItems().then((res) => {
      setUsers(res)
      console.log(res)
    })
  }
  useEffect(() => {
    consult();
  }, [])
  const handleDeleteUser = async () => {
    await deleteItem(userId);
    consult();
    setUserId("");
  };
  return (
    <>
      <input type="text" value={userId} placeholder="personId" onChange={(e) => setUserId(e.target.value)} />
      <button onClick={handleDeleteUser}>Borrar</button>
      {users?.map(user => <div key={user.id}>{user.userName} ------------------------{user.id}</div>)}




    </>
  )
}

export default Delete