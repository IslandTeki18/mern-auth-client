import * as React from 'react'
import { useState } from 'react'
import { LabelInput } from '~src/components'
import { Link } from 'react-router-dom'

export const RegisterPage = () => {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  function handleSumbit(e: React.FormEvent) {
    e.preventDefault()
    console.log(email, name, password, confirmPassword)
  }

  function isDisabled() {
    return email === '' || name === '' || password === '' || confirmPassword === '' || password !== confirmPassword
  }
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-left text-2xl font-bold leading-9 tracking-tight text-gray-100">
          Register for new account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSumbit} className="space-y-6">
          <LabelInput label='Email' placeholder='Email...' type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
          <LabelInput label='Name' placeholder='Name...' type='text' value={name} onChange={(e) => setName(e.target.value)} />
          <LabelInput label='Password' placeholder="Password..." type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
          <LabelInput label='Confirm Password' placeholder="Confirm Password..." type='password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
          <button disabled={isDisabled()} type='submit' className="btn btn-primary w-full">Login</button>
        </form>
      </div>
      <Link to='/' className="sm:mx-auto sm:w-full sm:max-w-sm mt-4 text-sm text-gray-100 hover:underline">Already have an account? Sign In!</Link>
    </div>
  )
}