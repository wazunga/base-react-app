import * as Yup from 'yup'
import { user } from './user'

export const LoginSchema = {
  initialValues: {
    user_username: '',
    user_password: ''
  }
}

export const UserSchema = user(Yup)
