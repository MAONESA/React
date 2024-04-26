import { useEffect, useState } from 'react';
import { getItems } from '../../AppFireBaseUsers/services/people';
import { ContainerTable } from '../pages/Container/Container.styles';
import { Link } from 'react-router-dom';


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
      <h1>Read</h1>

      <ContainerTable >
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>LastName</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user, key) => (

              <tr key={key}>

                <td><Link to={`/delete/${user.id}`}>{user.id}</Link></td>
                <td>{user.userName}</td>
                <td>{user.userLastName}</td>
                <td>{user.date}</td>
              </tr>
            ))}
          </tbody>

        </table>
      </ContainerTable >
    </>
  )
}
export default Read