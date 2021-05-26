const token = window.localStorage.getItem('token')

const GET = async ({ resource, method }) =>
  await makeRequest({ resource, method })

const POST = async ({ resource, body, method }) =>
  await makeRequest({ resource, body, method })

const PUT = async ({ resource, body, method }) =>
  await makeRequest({ resource, body, method })

const DELETE = async ({ resource, body, method }) =>
  await makeRequest({ resource, body, method })

const makeRequest = async (conf) => {
  try {
    console.log('try')
    const config = makeRequestConf(conf)
    console.log(config)
    const response = await fetch(
      `${process.env.REACT_APP_URL_API}/${conf.resource}`,
      config
    )
    const parsedRespose = await response.json()
    return parsedRespose.result[`${conf.resource}`]
  } catch (e) {
    console.log('catch')
    console.error(e)
    return []
  }
}

const makeRequestConf = ({ method, body }) => ({
  method,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`
  },
  body
})

/**
 * resource param its the name that receives a specific route/resource
 * from api
 * @param {string} resource
 */
export const client = {
  get: GET,
  post: POST,
  put: PUT,
  delete: DELETE
}
