'use client'
import ReUseButton, { ReUseCancel, ReUseSave, ReUseHighContrast, ReUseHighContrastCancel, ReUseHighContrastSave } from "./components/reUse-button"
import { FaCheck } from "react-icons/fa"
import ReUseTextField from "./components/reUse-texeField"
import React from "react"
import ReUseCard from "./components/reUse-card"
import myImg from './images/reUse-card.jpg'


const logData = (data: string | null) => {
  console.log(data)
}

export default function Home() {

  return (
    <>    
      <div className="flex justify-center mt-7 w-full">

        <ReUseButton title='Action' icon={<FaCheck />} /> 
        <ReUseCancel icon={true} />
        <ReUseSave icon={true} />

        <ReUseButton title='Action' />  
        <ReUseCancel />
        <ReUseSave />
      </div>

      <div className="flex justify-center mt-7 w-full">
        <ReUseHighContrast title='Action' icon={<FaCheck />} />
        <ReUseHighContrastCancel icon={true} />
        <ReUseHighContrastSave icon={true} />

        <ReUseHighContrast title='Action' />
        <ReUseHighContrastCancel />
        <ReUseHighContrastSave />
      </div>

      <div className="flex justify-center mt-7 w-full">
        <ReUseTextField id='editable-div' getData={logData} title='Text field' />
      </div>

      <div className="flex justify-center mt-7 w-full">
        <ReUseCard customImg={myImg}/>
      </div>
    </>
  )
}
