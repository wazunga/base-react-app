import { useState } from 'react'

export const useDropdown = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [openClasses, setOpenClasses] = useState('')

  const handleIsOpen = (e) => {
    e.preventDefault()
    if (isOpen) {
      setIsOpen(false)
      setOpenClasses('')
    } else if (!isOpen) {
      setIsOpen(true)
      setOpenClasses('bg-blue-100 dark:bg-blue-600')
    }
  }

  return [isOpen, handleIsOpen, openClasses]
}
