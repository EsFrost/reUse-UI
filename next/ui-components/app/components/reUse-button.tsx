'use client'
import React from 'react'
import { MdCancel } from "react-icons/md"
import { FaRegSave } from "react-icons/fa"

type RUButtonProps = {
    customStyle?: string
    customFunction?: () => void
    title: string
    icon?: JSX.Element
    disabled?: boolean
}

type RUPresetProps = {
    customStyle?: string
    customFunction?: () => void
    disabled?: boolean
}

const changeCase = (str: string) => {
    if ( str.length <= 8 ) {
        return str.toLocaleUpperCase()
    }
    else {
        return str
    }
}

function ReUseButton({ customStyle, customFunction, title, icon, disabled }: RUButtonProps) {
    const filteredTitle = changeCase(title)
    return (
        <div>
            <button
                role={`${title} button`}
                aria-label={title}
                className={`flex items-center justify-center
                            min-w-[96px] min-h-[48px] px-4 py-2
                            text-white text-lg rounded-md 
                            mx-[8px] cursor-pointer
                            bg-blue-600 hover:bg-blue-700
                            focus:outline-none target:bg-blue-700
                            disabled:bg-gray-700 disabled:cursor-not-allowed
                            drop-shadow-md
                            select-none
                            transition-all ease-in-out duration-200
                            ${customStyle || ''}
                            `}
                onClick={customFunction}
                disabled={disabled}
            >
                {filteredTitle}<span className='ml-2'>{icon}</span>
            </button>
        </div>
    )
}

export default ReUseButton

function ReUseCancel({ customStyle, customFunction, disabled }: RUPresetProps) {
    return (
        <div>
            <button
                role={`cancel button`}
                aria-label={`cancel`}
                className={`flex items-center justify-center
                            min-w-[96px] min-h-[48px] px-4 py-2
                            text-white text-lg rounded-md 
                            mx-[8px] cursor-pointer
                            bg-red-600 hover:bg-red-700
                            focus:outline-none target:bg-red-700
                            disabled:bg-gray-700 disabled:cursor-not-allowed
                            drop-shadow-md
                            select-none
                            transition-all ease-in-out duration-200
                            ${customStyle || ''}
                            `}
                onClick={customFunction}
                disabled={disabled}
            >
                CANCEL<span className='ml-1 text-2xl'><MdCancel /></span>
            </button>
        </div>
    )
}

function ReUseSave({ customStyle, customFunction, disabled }: RUPresetProps) {
    return (
        <div>
            <button
                role={`save button`}
                aria-label={`save`}
                className={`flex items-center justify-center
                            min-w-[96px] min-h-[48px] px-4 py-2
                            text-white text-lg rounded-md 
                            mx-[8px] cursor-pointer
                            bg-green-600 hover:bg-green-700
                            focus:outline-none target:bg-green-700
                            disabled:bg-gray-700 disabled:cursor-not-allowed
                            drop-shadow-md
                            select-none
                            transition-all ease-in-out duration-200
                            ${customStyle || ''}
                            `}
                onClick={customFunction}
                disabled={disabled}
            >
                SAVE<span className='ml-2'><FaRegSave /></span>
            </button>
        </div>
    )
}

export { ReUseCancel, ReUseSave }