'use client'

import Image from 'next/image'
import { useState } from 'react'
import checkmark from '../../../public/images/icons8-checkmark.svg'
import unchecked from '../../../public/images/unchecked.svg'
import axios from 'axios'

interface TodoProps {
  id: string
  checked: boolean
}
export default function MyButton({ id, checked }: TodoProps) {
  const url = `http://localhost:3333/todos/${id}`
  const [icon, setIcon] = useState<string>(() => {
    switch (checked) {
      case true:
        return 'checkmark.svg'
      case false:
        return 'unchecked.svg'
    }
  })
  function handleClick() {
    if (icon === checkmark) {
      setIcon(unchecked)
      console.log(icon)
    } else {
      setIcon(checkmark)
      console.log(icon)
    }
  }
  axios
    .patch(url, {})
    .then()
    .catch((error) => {
      console.log(error)
    })

  return (
    <button
      className="rounded-3xl bg-red-500 content-end align-bottom"
      onClick={handleClick}
    >
      <Image src={icon} alt="SVG" width={25} height={25} />
    </button>
  )
}
