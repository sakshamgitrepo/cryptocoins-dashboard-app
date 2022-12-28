import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import SavedCoin from '../components/SavedCoin'
import { UserAuth } from '../contexts/AuthContext';

function Account() {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();
console.log(user?.email.charAt(0).toUpperCase() + user?.email.slice(1).split('@')[0]);
  const handleSignOut = async () => {
    try {
      await logout();
      navigate('/');
    } catch (e) {
      console.log(e.message);
    }
  };

  if (user) {
  return (
    <div className='max-w-[1140px] mx-auto'>
    <div className='flex justify-between items-center my-12 py-8 rounded-div'>
      <div>
        <h1 className='text-2xl font-bold'>Account</h1>
        <div>
          <p>Welcome,{' '}
          <b>{user?.email.charAt(0).toUpperCase() + user?.email.slice(1).split('@')[0]}</b>
            </p>
            <p>Email :{' '}{user?.email}</p>
        </div>
      </div>
      <div>
        <button
          onClick={handleSignOut}
          className='border px-6 py-2 rounded-2xl shadow-lg hover:shadow-2xl'
        >
          Sign Out
        </button>
      </div>
    </div>
    <div className='flex justfiy-between items-center my-12 py-8 rounded-div'>
      <div className='w-full min-h-[300px]'>
        <h1 className='text-2xl font-bold py-4'>Watch List</h1>
        <SavedCoin />
      </div>
    </div>
  </div>

  ) } else {
    return <Navigate to='/signin' />;
  }

}

export default Account