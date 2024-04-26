
import { useState } from "react";
import { createPerson } from "../services/people"

function Create() {

  const [userName, setUserName] = useState();
  const [userLastName, setUserLastName] = useState();
  const [date, setDate] = useState();

  const handleCreateUser = async () => {
    await createPerson({ userName });
    setUserName("");
  };
  const handleCreateUserLastName = async () => {
    await createPerson({ userLastName });

    setUserLastName("");
  }
  const handleDate = async () => {
    await createPerson({ date });

    setDate("");
  }
  const newUser = async () => {
    await createPerson({ userName, userLastName, date });
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
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} /><br />
      <button onClick={newUser}>Guardar</button>
    </div>
  )
}

export default Create