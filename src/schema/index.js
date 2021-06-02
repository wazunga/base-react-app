import * as Yup from 'yup'
import { user } from './user'

export const LoginSchema = {
  initialValues: {
    user_username: '',
    user_password: ''
  },
  validations: Yup.object({
    user_username: Yup.string()
      .max(30, 'Caracteres maximos 25')
      .min(4, 'Caracteres minimos 5')
      .required('Required'),
    user_password: Yup.string()
      .max(25, 'Caracteres maximos 25')
      .min(8, 'Caracteres minimos 8')
      .required('Required')
  })
}

export const UserSchema = user(Yup)
