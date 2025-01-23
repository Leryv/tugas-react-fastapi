import React, { useEffect, useState } from 'react';
import AddUserForm from './AddUserForm.jsx';
import api from '../api';

const UserList = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await api.get('/users/');
      setUsers(response.data)
    } catch (error) {
      console.error("Error fetching users", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <h2>Fruits List</h2>
      <ul>
        {users?.map((item, index) => (
          <li key={index}>{item.username}</li>
        ))}
      </ul>
      <AddUserForm />
      <button onClick={()=>fetchUsers()}>Refresh</button>
    </div>
  );
};

export default UserList;