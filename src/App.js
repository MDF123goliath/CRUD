import React, {useState, useEffect} from 'react'
import UserTable from './tables/UserTable'
import AddUserForm from './forms/AddUserForm'
import EditUserForm from './forms/EditUserForm'
//import EditUserForm from './forms/<div className="flex-large">{editing ? (<div><h2>Edit User</h2><EditUserForm setEditing={setEditing} currentUser={currentUser} updateUser={updateUser}/></div>) : (<div><h2>Add User</h2><AddUserForm addUser={addUser}/></div>)}</div>EditUserForm'
import './styles/main.css'



const App = () => {
    const usersData =[
        { id: 1, name: 'Marius', username: 'theNothing'},
        { id: 2, name: 'Niemet', username: 'brokeDev'},
    ]

    const [users, setUsers] = useState(usersData)

    const addUser = (user) => {
        user.id = users.length + 1
        setUsers([...users, user])
    }

    const deleteUser = (id) =>{
        setUsers(users.filter((user) => user.id !== id))
    }

    const [editing, setEditing] = useState(false)
    const initialFormState = {id: null, name: '', username: ''}
    const [currentUser, setCurrentUser] = useState(initialFormState)
    const editRow = (user) => {
        setEditing(true)

        setCurrentUser({id: user.id, name: user.name, username: user.username})
    }

    const updateUser = (id, updatedUser) => {
        setEditing(false)

        setUsers(users.map((user) => (user.id === id ? updatedUser : user)))
    }

    return (
        <div className='container'>
            <h1>Crud Application avec les hooks</h1>
            <div className='flex-row'>
                <div className="flex-large">
                    <h2>Nouvel utilisateur</h2>
                    <AddUserForm addUser={addUser} />
                </div>
                <div className="flex-large">
                    <h2>Liste des utilisateurs</h2>
                    <UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
                </div>
            </div>
        </div>
    )
}

export default App