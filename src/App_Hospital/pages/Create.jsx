
import { useState } from "react";
import { createPerson } from "../services/people"
import { getItems } from '../../AppFireBaseUsers/services/people';

function Create() {

  const [userName, setUserName] = useState();
  const [userLastName, setUserLastName] = useState();
  const [setUsers] = useState();
  const [date, setDate] = useState();

  const consult = () => {
    getItems().then((res) => {
      setUsers(res)
      console.log(res)
    })
  }
  const handleCreateUser = async () => {
    await createPerson({ userName });
    consult();
    setUserName("");
  };
  const handleCreateUserLastName = async () => {
    await createPerson({ userLastName });
    consult();
    setUserLastName("");
  }
  const handleDate = async () => {
    await createPerson({ date });
    consult();
    setDate("");
  }
  const newUser = async () => {
    await createPerson({ userName, userLastName, date });
    consult();
    setUserName("");
    setUserLastName("");
    setDate("");
    console.log(handleCreateUser, handleDate, handleCreateUserLastName)
  }
  return (
    <div>
      <h1>Create</h1>
      <input type="text" value={userName} placeholder="Nombre" onChange={(e) => setUserName(e.target.value)} />
      <input type="text" value={userLastName} placeholder="Apellido" onChange={(e) => setUserLastName(e.target.value)} />
      <br />
      <input type="date" /><br />
      <button onClick={newUser}>Guardar</button>
    </div>
  )
}

export default Create