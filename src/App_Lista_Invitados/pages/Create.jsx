
import { useState } from "react";
import { createPerson } from "../services/people"
import { getItems } from '../../AppFireBaseUsers/services/people';

function Create() {

  const [userName, setUserName] = useState();
  const [setUsers] = useState();

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

  return (
    <div>
      <input type="text" value={userName} placeholder="Nombre" onChange={(e) => setUserName(e.target.value)} />

      <button onClick={handleCreateUser}>Guardar</button>
    </div>
  )
}

export default Create