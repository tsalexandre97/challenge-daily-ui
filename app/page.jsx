"use client"
import Footer from './components/Footer'
import { Montserrat } from 'next/font/google'
import ProgressBar from './components/ProgressBar'
import Sumary from './components/Sumary'
import { useContext, useState } from 'react'
import { ThemeContext } from './components/ThemeContext'
import PaymentMethod from './components/PaymentMethod'
import Confirmation from './components/Confirmation'

const montserrat = Montserrat({ subsets: ['latin'], display: 'swap', variable: '--font-montserrat' })
export default function Home() {

  const [step, setStep] = useState(1)
  const totalSteps = 3

  const nextStep = () => {
    setStep(step + 1)
  }
  const prevStep = () => {
    setStep(step - 1)
  }
  console.log(step)

  const theme = useContext(ThemeContext)
  return (
    <main className="flex flex-col justify-between bg-white px-6 pb-3 pt-10 w-[19rem] h-[576px] max-h-[576px] shadow-xl rounded-[40px]">
      <div className="flex flex-col">
        <div className="flex w-full justify-center mb-2">
          <h1 className={`text-gray-500 ${montserrat.variable} text-sm font-semibold`}>
            {step === 1 && 'Checkout'}
            {step === 2 && 'Payment Method'}
            {step === 3 && 'Confirmation'}
          </h1>
        </div>

        <ProgressBar step={step} totalSteps={totalSteps} />

        {step === 1 && (
          <>
            <div className="flex flex-col w-full h-[261px]">
              <Sumary />
            </div>
            <button onClick={() => nextStep()} className="mt-24 flex w-full py-2 justify-center bg-[#5d36b6] text-white rounded-2xl">Next</button></>
        )}

        {step === 2 && (
          <>
            <div className="flex flex-col h-[261px]">
              <PaymentMethod />
            </div>
            <div className="mt-24 flex gap-x-4">
              <button onClick={() => prevStep()} className="flex w-[49%] py-2 justify-center bg-[#b85ac6] text-white rounded-2xl">Back</button>
              <button onClick={() => nextStep()} className="flex w-[49%] py-2 justify-center bg-[#5d36b6] text-white rounded-2xl">Next</button>
            </div>
          </>
        )}

        {step === 3 && (
          <>
            <div className="flex flex-col h-[261px]">
              <Confirmation />
            </div>
            <button onClick={() => setStep(step - 2)} className="mt-24 flex w-full py-2 justify-center bg-[#5d36b6] text-white rounded-2xl">Thank you</button>
          </>
        )}

      </div>

      <Footer />
    </main>
  )
}
