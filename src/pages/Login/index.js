import React from 'react'
import { ImageSection } from './ImageSection'
import { LoginContainer } from './LoginPageContainer'
import { LoginSection } from './LoginSection'

const Login = () => (
  <LoginContainer>
    <LoginSection />
    <ImageSection />
  </LoginContainer>
)

export default Login
