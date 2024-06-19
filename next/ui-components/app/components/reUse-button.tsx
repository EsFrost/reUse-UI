'use client'
import React from 'react'
import { MdCancel } from "react-icons/md"
import { FaRegSave } from "react-icons/fa"

type RUButtonProps = {
    customStyle?: string 
    title: string
    icon?: JSX.Element
    disabled?: boolean
}

type RUPresetProps = {
    customStyle?: string
    disabled?: boolean
    icon?: boolean
}

const changeCase = (str: string) => {
    if ( str.length <= 8 ) {
        return str.toLocaleUpperCase()
    }
    else {
        return str
    }
}

function ReUseButton({ customStyle, title, icon, disabled }: RUButtonProps) {
    const filteredTitle = changeCase(title)
    return (
        <button
            role={`${title} button`}
            aria-label={title}
            className={`flex items-center justify-center
                        min-w-[96px] min-h-[48px] px-4 py-2
                        text-white text-lg rounded-md 
                        mx-[8px] cursor-pointer
                        bg-blue-600 hover:bg-blue-700 active:bg-blue-800
                        focus:outline-none target:bg-blue-700
                        disabled:bg-gray-700 disabled:cursor-not-allowed
                        drop-shadow-md
                        select-none
                        transition-all ease-in-out duration-200
                        ${customStyle || ''}
                        `}
            disabled={disabled}
        >
            {filteredTitle}{icon !== undefined ? <span className='ml-2'>{icon}</span> : ''}
            
        </button>
    )
}

export default ReUseButton

function ReUseCancel({ customStyle, disabled, icon }: RUPresetProps) {
    return (
        <button
            role={`cancel button`}
            aria-label={`cancel`}
            className={`flex items-center justify-center
                        min-w-[96px] min-h-[48px] px-4 py-2
                        text-white text-lg rounded-md 
                        mx-[8px] cursor-pointer
                        bg-red-600 hover:bg-red-700 active:bg-red-800
                        focus:outline-none target:bg-red-700
                        disabled:bg-gray-700 disabled:cursor-not-allowed
                        drop-shadow-md
                        select-none
                        transition-all ease-in-out duration-200
                        ${customStyle || ''}
                        `}
            disabled={disabled}
        >
            CANCEL{icon === true ? <span className='ml-1 text-2xl'><MdCancel /></span> : ''}
        </button>
    )
}

function ReUseSave({ customStyle, disabled, icon }: RUPresetProps) {
    return (
        <button
            role={`save button`}
            aria-label={`save`}
            className={`flex items-center justify-center
                        min-w-[96px] min-h-[48px] px-4 py-2
                        text-white text-lg rounded-md 
                        mx-[8px] cursor-pointer
                        bg-green-600 hover:bg-green-700 active:bg-green-800
                        focus:outline-none target:bg-green-700
                        disabled:bg-gray-700 disabled:cursor-not-allowed
                        drop-shadow-md
                        select-none
                        transition-all ease-in-out duration-200
                        ${customStyle || ''}
                        `}
            disabled={disabled}
        >
            SAVE{icon === true ? <span className='ml-2'><FaRegSave /></span> : ''}
        </button>
    )
}

function ReUseHighContrast({ customStyle, title, icon, disabled }: RUButtonProps) {
    const filteredTitle = changeCase(title)
    return (
        <button
            role={`${title} button`}
            aria-label={title}
            className={`flex items-center justify-center
                        min-w-[96px] min-h-[48px] px-4 py-2
                        text-blue-600 text-lg rounded-md 
                        mx-[8px] cursor-pointer
                        bg-white hover:bg-gray-100 active:bg-gray-200
                        focus:outline-none target:bg-gray-200
                        disabled:bg-gray-700 disabled:cursor-not-allowed
                        drop-shadow-md
                        select-none
                        transition-all ease-in-out duration-200
                        border-4 border-blue-600
                        ${customStyle || ''}
                        `}
            disabled={disabled}
        >
            {filteredTitle}{icon !== undefined ? <span className='ml-2'>{icon}</span> : ''}
            
        </button>
    )
}

function ReUseHighContrastCancel({ customStyle, disabled, icon }: RUPresetProps) {
    return (
        <button
            role={`cancel button`}
            aria-label={`cancel`}
            className={`flex items-center justify-center
                        min-w-[96px] min-h-[48px] px-4 py-2
                        text-red-600 text-lg rounded-md 
                        mx-[8px] cursor-pointer
                        bg-white hover:bg-gray-100 active:bg-gray-200
                        focus:outline-none target:bg-gray-200
                        disabled:bg-gray-700 disabled:cursor-not-allowed
                        drop-shadow-md
                        select-none
                        transition-all ease-in-out duration-200
                        border-4 border-red-600
                        ${customStyle || ''}
                        `}
            disabled={disabled}
        >
            CANCEL{icon === true ? <span className='ml-1 text-2xl'><MdCancel /></span> : ''}
        </button>
    )
}

export { ReUseCancel, ReUseSave, ReUseHighContrast, ReUseHighContrastCancel }