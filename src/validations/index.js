import * as Yup from 'yup'

export const userValidationSchema = Yup.object({
  user_name: Yup.string()
    .max(25, 'Caracteres maximos 25')
    .min(5, 'Caracteres minimos 5')
    .required('Required'),
  user_username: Yup.string()
    .max(30, 'Caracteres maximos 25')
    .min(8, 'Caracteres minimos 8')
    .required('Required'),
  user_role: Yup.string()
    .max(25, 'Caracteres maximos 25')
    .min(5, 'Caracteres minimos 5')
    .required('Required'),
  user_status: Yup.string()
    .max(25, 'Caracteres maximos 25')
    .min(5, 'Caracteres minimos 5')
    .required('Required'),
})