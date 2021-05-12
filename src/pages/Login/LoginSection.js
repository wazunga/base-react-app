import React from 'react'
import { Brand } from './Brand'
import { LoginForm } from './LoginForm'

export const LoginSection = () => (
  <div className="flex flex-col w-full md:w-1/2">
    <Brand />
    <LoginForm />
  </div>
)
