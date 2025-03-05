import { useState } from 'react';
import { addUser } from './UserReducer';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import UserForm from './UserForm';

function Create() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    let isValid = true;

    // Walidacja pola Name
    if (name.trim() === '') {
      setNameError('Name is required');
      isValid = false;
    } else {
      setNameError('');
    }

    // Walidacja pola Email
    if (email.trim() === '') {
      setEmailError('Email is required');
      isValid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      setEmailError('Invalid email address');
      isValid = false;
    } else {
      setEmailError('');
    }

    if (!isValid) return;

    // Jeśli walidacja przejdzie, dodaj użytkownika
    dispatch(addUser({ id: users[users.length - 1].id + 1, name, email }));
    navigate('/');
  };

  return (
    <UserForm
      title="Add New User"
      onSubmit={handleSubmit}
      name={name}
      setName={setName}
      email={email}
      setEmail={setEmail}
      submitLabel="Submit"
      nameError={nameError}
      emailError={emailError}
    />
  );
}

export default Create;
