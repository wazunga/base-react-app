import { useState, useEffect } from 'react'

export const useFetch = (resource) => {
  const [data, setData] = useState({
    status_code: 0,
    result: {},
    msg: ''
  })
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const token = window.localStorage.getItem('token')

  useEffect(() => {
    const fetchResource = async () => {
      setLoading(true)
      try {
        const config = {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          }
        }
        const res = await fetch(
          `${process.env.REACT_APP_URL_API}/${resource}`,
          config
        )
        const fetchedData = await res.json()
        setData(fetchedData)
        setLoading(false)
      } catch (err) {
        setError(err)
        setLoading(false)
      }
    }
    fetchResource()
  }, [resource, token])
  return [data, loading, error]
}
