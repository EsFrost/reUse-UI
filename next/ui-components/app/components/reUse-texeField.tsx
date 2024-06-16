'use client'
import React from 'react'
import { IoMdSend } from "react-icons/io"

interface ReUseTextFieldProps {
  getData: (data: string | null) => void
  title: string
}

const ReUseTextField: React.FC<ReUseTextFieldProps> = ({ getData, title }) => {
  
  const passData = (data: string | null) => {
    getData(data)
  }

  const handleKeyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter') {
      const currentText = event.currentTarget.textContent
      passData(currentText)
      event.currentTarget.textContent = ''
    }
  }
  
  const handleSendClick = () => {
    const editableElem = document.getElementById('editable-text')
    if (editableElem) {
      const currentText = editableElem.textContent
      passData(currentText??null)
      editableElem.textContent = ''
    }
  }

  return (
    <div className='flex gap-2 items-center relative'>
        <label htmlFor="" className='text-xl mr-2'>{title}: </label>
        <div
            id='editable-text'
            contentEditable='true' 
            className='
                flex items-center rounded border-2 border-gray-200 bg-gray-800 text-white pl-4 pr-[50px] py-2 min-w-[300px] break-all
                ring-[4px] ring-gray-100 dark:ring-gray-600 border-mutedaccent dark:border-white
                focus-visible:outline-none focus-visible:ring-[4px] focus-visible:ring-gray-100 dark:focus-visible:ring-gray-600
            '
            onKeyDown={handleKeyPress}
        >
        </div>
        <span className='absolute right-3 text-white flex items-center cursor-pointer' onClick={handleSendClick}>
            <span className='mr-2'>|</span>
            <IoMdSend />
        </span>
    </div>
  )
}

export default ReUseTextField