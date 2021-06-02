export const user = (Yup) => ({
  validations: Yup.object({
    user_name: Yup.string()
      .max(25, 'Caracteres maximos 25')
      .min(5, 'Caracteres minimos 5')
      .required('Required'),
    user_password: Yup.string()
      .max(30, 'Caracteres maximos 25')
      .min(8, 'Caracteres minimos 8')
      .required('Required'),
    user_role: Yup.number().required('Required'),
    user_status: Yup.number().required('Required')
  }),
  initialValues: {
    user_id: 0,
    user_name: '',
    user_role: '',
    user_status: ''
  },
  tableHeaders: ['Nombre', 'Username', 'Status', 'Rol', 'Actions'],
  keys: ['user_name', 'user_username', 'user_role', 'user_status'],
  fields: [
    {
      label: 'Nombre',
      placeholder: 'Nombre',
      type: 'text',
      name: 'user_name'
    },
    {
      label: 'Password',
      placeholder: 'Password',
      type: 'password',
      name: 'user_password'
    },
    {
      label: 'Rol',
      placeholder: 'Rol',
      type: 'text',
      name: 'user_role'
    },
    {
      label: 'Estado',
      placeholder: 'Estado',
      type: 'text',
      name: 'user_status'
    }
  ]
})
