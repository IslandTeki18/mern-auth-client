import * as React from 'react'
import { useState } from 'react'
import { LabelInput } from '~src/components'
import { Link } from 'react-router-dom'
import { useSignIn } from '../hooks'

export const LoginPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { error, isLoading, signIn } = useSignIn()

    function handleSumbit(e: React.FormEvent) {
        e.preventDefault()
        signIn(email, password)
    }

    function isDisabled() {
        return email === '' || password === '' || isLoading
    }
    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-10 text-left text-2xl font-bold leading-9 tracking-tight text-gray-100">
                    Sign into your account
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form onSubmit={handleSumbit} className="space-y-6">
                    <LabelInput label='Email' placeholder='Email...' type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                    <LabelInput label='Password' placeholder="Password..." type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                    {isLoading ? (
                        <span className="loading loading-spinner loading-lg text-center"></span>
                    ) : (
                        <button disabled={isDisabled()} type='submit' className="btn btn-primary w-full">Login</button>
                    )}
                </form>
            </div>
            {error && (
                <div role="alert" className="alert alert-error sm:mx-auto sm:w-full sm:max-w-sm my-6">
                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span>{error}</span>
                </div>
            )}
            <Link to='/register' className="sm:mx-auto sm:w-full sm:max-w-sm mt-4 text-sm text-gray-100 hover:underline">Don't have an account? Register</Link>
        </div>
    )
}