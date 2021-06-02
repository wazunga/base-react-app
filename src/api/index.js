const token = window.localStorage.getItem('token')

const GET = async ({ resource }) =>
	await makeRequest({ resource, method: 'GET' })

const POST = async ({ resource, body }) =>
	await makeRequest({ resource, body, method: 'POST' })

const PUT = async ({ resource, body }) =>
	await makeRequest({ resource, body, method: 'PUT' })

const DELETE = async ({ resource, body }) =>
	await makeRequest({ resource, body, method: 'DELETE' })

const makeRequest = async (conf) => {
	try {
		console.log('try')
		const config = makeRequestConf(conf)
		console.log(config)
		const response = await fetch(
			`${process.env.REACT_APP_URL_API}/${conf.resource}`,
			config
		)
		const parsedResponse = await response.json()
		return conf.resource === 'users/signin' ? 
			parsedResponse.result['users'] : 
			parsedResponse.result[`${conf.resource}`]
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
	body: JSON.stringify(body)
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
