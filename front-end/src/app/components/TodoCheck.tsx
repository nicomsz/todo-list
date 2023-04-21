'use client'

import Image from 'next/image'
import { useState } from 'react'
import checkmark from '../../../public/images/icons8-checkmark.svg'
import unchecked from '../../../public/images/unchecked.svg'
import deleteIcon from '../../../public/images/delete-icon.svg'
import axios from 'axios'

interface TodoProps {
  id: string
  checked: boolean
}
export function TodoCheck({ id, checked }: TodoProps) {
  const url = `http://localhost:3333/todos/${id}`
  const [icon, setIcon] = useState<string>(() => {
    switch (checked) {
      case true:
        return checkmark
      case false:
        return unchecked
    }
  })
  function handleAdd() {
    if (icon === checkmark) {
      setIcon(unchecked)
    } else {
      setIcon(checkmark)
    }
    axios
      .patch(url, {})
      .then()
      .catch((error) => {
        console.log(error)
      })
  }
  function handleDelete() {
    axios.delete(url, {}).catch((error) => {
      console.log(error)
    })
  }

  return (
    <>
      <button
        className="rounded-3xl content-end align-bottom"
        onClick={handleAdd}
      >
        <Image src={icon} alt="SVG" width={30} height={30} />
      </button>
      <button className="px-2" onClick={handleDelete}>
        <Image src={deleteIcon} alt="Delete" width={25} height={25} />
      </button>
    </>
  )
}
