import { useEffect, useState } from "react";
import { createPerson, deleteItem, getItems, updatePerson } from "./AppFireBaseUsers/services/people"

// Importa useEffect y useState de React, así como algunas funciones relacionadas con la gestión de personas.

const App = () => {

    // Define un componente funcional llamado App.

    const [userName, setUserName] = useState();
    const [userId, setUserId] = useState();
    const [users, setUsers] = useState();

    // Define tres estados locales: userName, userId y users, utilizando el hook useState.

    useEffect(() => {
        consult();
    }, [])

    // Utiliza useEffect para ejecutar una función consult() cuando el componente se monta por primera vez.

    const consult = () => {
        getItems().then((res) => {
            setUsers(res)
            console.log(res)
        })
    }

    const handleUpdateUser = async () => {
        await updatePerson(userId, { userName })
        consult()
        setUserId("")
        setUserName("")
    }

    // Define una función consult() que obtiene la lista de usuarios y actualiza el estado users.

    const handleDeleteUser = async () => {
        await deleteItem(userId);
        consult();
        setUserId("");
    };

    // Define una función asincrónica handleDeleteUser() que elimina un usuario, actualiza la lista de usuarios y limpia el estado userId.

    const handleCreateUser = async () => {
        await createPerson({ userName });
        consult();
        setUserName("");
    };

    // Define una función asincrónica handleCreateUser() que crea un nuevo usuario, actualiza la lista de usuarios y limpia el estado userName.

    return (
        <div>
            <input type="text" value={userId} placeholder="personId" onChange={(e) => setUserId(e.target.value)} />
            <input type="text" value={userName} placeholder="personName" onChange={(e) => setUserName(e.target.value)} />
            <button onClick={handleCreateUser}>Salvar</button>
            <button onClick={handleDeleteUser}>Borrar</button>
            <button onClick={handleUpdateUser}>Actualizar Usuario</button>
            <div>
                {users?.map(u => <div key={u.id}>{u.id}__________{u.userName}</div>)}
            </div>
        </div>
    )
}

// Renderiza un formulario con campos de entrada para el ID y el nombre del usuario, botones para crear y eliminar usuarios, y muestra la lista de usuarios.

export default App
