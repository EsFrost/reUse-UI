'use client'
import ReUseButton, { ReUseCancel, ReUseSave, ReUseHighContrast } from "./components/reUse-button"
import { FaCheck } from "react-icons/fa"
import ReUseTextField from "./components/reUse-texeField"

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
        <ReUseHighContrast title='Action' />
      </div>

      <div className="flex justify-center mt-7 w-full">
      <ReUseTextField getData={logData} title='Text field' />
      </div>
    </>
  )
}
