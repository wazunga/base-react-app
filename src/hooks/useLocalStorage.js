import { useState } from 'react'

export function useLocalStorage(key, initialValue) {
  const [storedValue, setValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item !== null ? item : initialValue
    } catch (e) {
      console.error(e)
      return initialValue
    }
  })

  const setLocalStorage = (value) => {
    try {
      window.localStorage.setItem(key, value)
      setValue(value)
    } catch (error) {
      console.error(error)
    }
  }

  return [storedValue, setLocalStorage]
}
