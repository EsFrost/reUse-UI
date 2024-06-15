import ReUseButton, { ReUseCancel, ReUseSave } from "./components/reUse-button"
import { FaCheck } from "react-icons/fa"


export default function Home() {
  return (
    <div className="flex justify-center mt-7">
      <ReUseButton title='Action' icon={<FaCheck />} />      
      <ReUseCancel />
      <ReUseSave />
    </div>
  )
}
