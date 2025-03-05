import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { updateUser } from './UserReducer';
import UserForm from './UserForm';

function Update() {
  const { id } = useParams();
  const users = useSelector((state) => state.users);
  const existingUser = users.find(user => user.id === Number(id));
  const [name, setName] = useState(existingUser.name);
  const [email, setEmail] = useState(existingUser.email);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(updateUser({ id, name, email }));
    navigate('/');
  };

  return (
    <UserForm
      title="Update User"
      onSubmit={handleSubmit}
      name={name}
      setName={setName}
      email={email}
      setEmail={setEmail}
      submitLabel="Update"
    />
  );
}

export default Update;
