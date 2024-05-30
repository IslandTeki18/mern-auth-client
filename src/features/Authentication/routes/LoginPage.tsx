import * as React from 'react'
import { useState } from 'react'
import { LabelInput } from '~src/components'


export const LoginPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function handleSumbit(e: React.FormEvent) {
        e.preventDefault()
        console.log(email, password)
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
                    <button type='submit' className="btn btn-primary w-full">Login</button>
                </form>
            </div>
        </div>
    )
}