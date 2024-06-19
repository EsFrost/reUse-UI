'use client'
import React, { useState } from 'react'
import { MdCancel } from "react-icons/md"
import { FaRegSave } from "react-icons/fa"

type RUButtonProps = {
    customStyle?: string 
    title: string
    icon?: JSX.Element
    disabled?: boolean
    clickFunc?: () => void
}

type RUPresetProps = {
    customStyle?: string
    disabled?: boolean
    icon?: boolean
    clickFunc?: (event: React.MouseEvent<HTMLButtonElement>) => void
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
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(true);
        setTimeout(() => setIsClicked(false), 500);
    }
    return (
        <button
            role={`${title} button`}
            aria-label={title}
            className={`flex items-center justify-center
                        min-w-[116px] min-h-[48px] px-4 py-2
                        text-white text-lg rounded-md 
                        mx-[8px] cursor-pointer
                        bg-blue-600 hover:bg-blue-700 active:bg-blue-800
                        focus:outline-none target:bg-blue-700
                        disabled:bg-gray-700 disabled:cursor-not-allowed
                        drop-shadow-md shadow-md
                        select-none
                        transition-all ease-in-out duration-200
                        ${customStyle || ''}
                        ${isClicked ? 'pulse-once' : ''}
                        `}
            disabled={disabled}
            onClick={handleClick}
        >
            {filteredTitle}{icon !== undefined ? <span className='ml-2'>{icon}</span> : ''}
            
        </button>
    )
}

export default ReUseButton

function ReUseCancel({ customStyle, disabled, icon }: RUPresetProps) {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(true);
        setTimeout(() => setIsClicked(false), 500);
    }
    return (
        <button
            role={`cancel button`}
            aria-label={`cancel`}
            className={`flex items-center justify-center
                        min-w-[116px] min-h-[48px] px-4 py-2
                        text-white text-lg rounded-md 
                        mx-[8px] cursor-pointer
                        bg-red-600 hover:bg-red-700 active:bg-red-800
                        focus:outline-none target:bg-red-700
                        disabled:bg-gray-700 disabled:cursor-not-allowed
                        drop-shadow-md shadow-md
                        select-none
                        transition-all ease-in-out duration-200
                        ${customStyle || ''}
                        ${isClicked ? 'pulse-once' : ''}
                        `}
            disabled={disabled}
            onClick={handleClick}
        >
            CANCEL{icon === true ? <span className='ml-1 text-2xl'><MdCancel /></span> : ''}
        </button>
    )
}

function ReUseSave({ customStyle, disabled, icon }: RUPresetProps) {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(true);
        setTimeout(() => setIsClicked(false), 500);
    }
    return (
        <button
            role={`save button`}
            aria-label={`save`}
            className={`flex items-center justify-center
                        min-w-[116px] min-h-[48px] px-4 py-2
                        text-white text-lg rounded-md 
                        mx-[8px] cursor-pointer
                        bg-green-600 hover:bg-green-700 active:bg-green-800
                        focus:outline-none target:bg-green-700
                        disabled:bg-gray-700 disabled:cursor-not-allowed
                        drop-shadow-md shadow-md
                        select-none
                        transition-all ease-in-out duration-200
                        ${customStyle || ''}
                        ${isClicked ? 'pulse-once' : ''}
                        `}
            disabled={disabled}
            onClick={handleClick}
        >
            SAVE{icon === true ? <span className='ml-2'><FaRegSave /></span> : ''}
        </button>
    )
}

function ReUseHighContrast({ customStyle, title, icon, disabled }: RUButtonProps) {
    const filteredTitle = changeCase(title)
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(true);
        setTimeout(() => setIsClicked(false), 500);
    }
    return (
        <button
            role={`${title} button`}
            aria-label={title}
            className={`flex items-center justify-center
                        min-w-[126px] min-h-[48px] px-4 py-2
                        text-blue-600 text-lg rounded-md 
                        mx-[8px] cursor-pointer
                        bg-white hover:bg-gray-100 active:bg-gray-200
                        focus:outline-none target:bg-gray-200
                        disabled:bg-gray-700 disabled:cursor-not-allowed
                        drop-shadow-md shadow-md
                        select-none
                        transition-all ease-in-out duration-200
                        border-4 border-blue-600
                        ${customStyle || ''}
                        ${isClicked ? 'pulse-once' : ''}
                        `}
            disabled={disabled}
            onClick={handleClick}
        >
            {filteredTitle}{icon !== undefined ? <span className='ml-2'>{icon}</span> : ''}
            
        </button>
    )
}

function ReUseHighContrastCancel({ customStyle, disabled, icon }: RUPresetProps) {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(true);
        setTimeout(() => setIsClicked(false), 500);
    }
    return (
        <button
            role={`cancel button`}
            aria-label={`cancel`}
            className={`flex items-center justify-center
                        min-w-[126px] min-h-[48px] px-4 py-2
                        text-red-600 text-lg rounded-md 
                        mx-[8px] cursor-pointer
                        bg-white hover:bg-gray-100 active:bg-gray-200
                        focus:outline-none target:bg-gray-200
                        disabled:bg-gray-700 disabled:cursor-not-allowed
                        drop-shadow-md shadow-md
                        select-none
                        transition-all ease-in-out duration-200
                        border-4 border-red-600
                        ${customStyle || ''}
                        ${isClicked ? 'pulse-once' : ''}
                        `}
            disabled={disabled}
            onClick={handleClick}
        >
            CANCEL{icon === true ? <span className='ml-1 text-2xl'><MdCancel /></span> : ''}
        </button>
    )
}

function ReUseHighContrastSave({ customStyle, disabled, icon, clickFunc}: RUPresetProps) {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(true);
        setTimeout(() => setIsClicked(false), 500);
    }

    const handleFuncs = (event: React.MouseEvent<HTMLButtonElement>) => {
        handleClick()
        if (clickFunc) {
            clickFunc(event)
        }
    }

    const myVal = 'rgba(128, 255, 255, 0.7)'
    const myVal2 = 'rgba(128, 255, 255, 0)'

    return (
        <button
            role={`save button`}
            aria-label={`save`}
            className={`flex items-center justify-center
                        min-w-[126px] min-h-[48px] px-4 py-2
                        text-green-600 text-lg rounded-md 
                        mx-[8px] cursor-pointer
                        bg-white hover:bg-gray-100 active:bg-gray-200
                        focus:outline-none target:bg-gray-200
                        disabled:bg-gray-700 disabled:cursor-not-allowed
                        drop-shadow-md shadow-md
                        select-none
                        transition-all ease-in-out duration-200
                        border-4 border-green-600
                        ${customStyle || ''}
                        ${isClicked ? 'pulse-once' : ''}
                        `}
            disabled={disabled}
            onClick={handleFuncs}
        >
            SAVE{icon === true ? <span className='ml-2'><FaRegSave /></span> : ''}
        </button>
    )
}

export { ReUseCancel, ReUseSave, ReUseHighContrast, ReUseHighContrastCancel, ReUseHighContrastSave }