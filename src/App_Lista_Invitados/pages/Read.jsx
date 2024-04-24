import { useEffect, useState } from 'react';
import { getItems } from '../../AppFireBaseUsers/services/people';

function Read() {
  const [users, setUsers] = useState();

  const consult = () => {
    getItems().then((res) => {
      setUsers(res)
      console.log(res)
    })
  }
  useEffect(() => {
    consult();
  }, []);
  return (

    <>
      {users?.map(user => <div key={user}>{user.userName}</div>)}
    </>
  )
}

export default Read