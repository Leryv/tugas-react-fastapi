import React, { useState } from 'react';
import api from "../api.js";

const AddUserForm = ({  }) => {
  const [addUser, setAddUser] = useState('');

  const addUsers = async (userName) => {
    try {
      await api.post('/users/', { username: userName });
    } catch (error) {
      console.error("Error adding users", error);
    }
  };

  return (
    <>
      <input
        type="text"
        value={addUser}
        onChange={(e) => setAddUser(e.target.value)}
        placeholder="Enter fruit name"
      />
        <button type="submit" onClick={() => addUsers(addUser)}>Add Fruit</button>
    </>
  );
};

export default AddUserForm;