
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getItemById, deleteItem, updatePerson } from '../services/people';

function Delete() {
  const [userName, setUserName] = useState();
  const [userLastName, setUserLastName] = useState();
  const [date, setDate] = useState();
  const { id } = useParams();
  const nav = useNavigate()



  useEffect(() => {
    getItemById(id).then((res) => {
      setUserName(res.userName);
      setUserLastName(res.userLastName);
      setDate(res.date);
      console.log(res)
    })

  }, [id]);
  // ----------------------------------------------------------------

  const deleteUser = async () => {
    await deleteItem(id);
    nav("/")
  };


  const updateUser = async () => {
    await updatePerson(id, { userName, userLastName, date });
    nav("/");
  }
  return (
    <>
      <h1>Update / Delete</h1>
      <input type="text" value={userName || ""} placeholder="Name" onChange={(e) => setUserName(e.target.value)} />
      <input type="text" value={userLastName || ""} placeholder='LastName' onChange={(e) => setUserLastName(e.target.value)} />
      <input type="date" value={date || ""} onChange={(e) => setDate(e.target.value)} />
      <button onClick={updateUser}>Modificar</button>
      <button onClick={deleteUser}>Eliminar</button>
    </>
  )
}

export default Delete