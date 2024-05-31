import * as React from 'react';
import { useNavigate } from 'react-router-dom';

export const HomePage = () => {
  const navigate = useNavigate();

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