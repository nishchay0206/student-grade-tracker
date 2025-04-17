import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem('user', username);
    navigate('/dashboard');
  };

  return (
    <div className='p-4'>
      <h2 className='text-xl mb-2'>Login</h2>
      <input value={username} onChange={(e) => setUsername(e.target.value)} className='border p-2' placeholder='Enter username' />
      <button onClick={handleLogin} className='ml-2 px-4 py-2 bg-blue-500 text-white'>Login</button>
    </div>
  );
}

export default Login;