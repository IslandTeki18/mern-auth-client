import * as React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '~src/hooks/useAuthContext';

export const HomePage = () => {
  const navigate = useNavigate();
  const { user } = useAuthContext();

  useEffect(() => {
    if (user !== null) {
      navigate('/dashboard');
    }
  }, [user, navigate]);

  return (
    <div className="flex flex-col w-full">
      <div className="flex justify-center items-center h-96">
        <h1 className="text-3xl font-bold">Welcome to the Home Page</h1>
      </div>
      <div className="flex justify-center">
        <button className="btn btn-primary w-3/12" onClick={() => {
          navigate('/login')
        }}>Login</button>
      </div>
    </div>
  )
}