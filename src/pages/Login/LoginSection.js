import React from 'react'
import { Brand } from './Brand'
import { LoginForm } from './LoginForm'

export const LoginSection = () => (
  <div className="w-full md:w-1/2 flex flex-col">
    <Brand />
    <LoginForm />
  </div>
)
