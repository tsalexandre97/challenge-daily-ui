import { Montserrat } from 'next/font/google'
import Image from 'next/image'
import { useState } from 'react'
import { useForm } from "react-hook-form"

const montserrat = Montserrat({ subsets: ['latin'], display: 'swap', variable: '--font-montserrat' })

const PaymentMethod = () => {
  const [name, setName] = useState("")
  const [number, setNumber] = useState("")
  const [expiry, setExpiry] = useState("")

  const handleChange = (event) => {
    setName(event.target.value)
  }
  const handleChangeNum = (event) => {
    setNumber(event.target.value)
  }
  const handleChangeExpiry = (event) => {
    setExpiry(event.target.value)
  }

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)
  console.log(watch("example"))

  return (<>
    <div className="flex w-full justify-center mb-2">
      <h2 className={`text-gray-500 ${montserrat.variable} text-lg font-medium`}>Payment Method</h2>
    </div>

    <div className="flex flex-col w-full">
      <div className="flex flex-col justify-between w-full h-[140px] rounded-2xl bg-gradient-to-br from-[#b85ac6] to-[#3326af] px-4 py-2 text-white mb-4">
        <div className={`${montserrat.variable} font-medium`}>{name === "" ? "John Doe" : name}</div>
        <div className={`${montserrat.variable} text-sm font-medium`}><span className="tracking-widest">**** **** ****</span> {number === "" ? "5392" : number}</div>
        <div className={`${montserrat.variable} font-medium`}>

          <div className="flex justify-between">
            <div className="flex">
              <div className="flex flex-col mr-8">
                <span className={`${montserrat.variable} font-thin text-[0.65rem]`}>Valid</span>
                <span className={`${montserrat.variable} font-light text-sm`}>{expiry === "" ? "08/26" : expiry}</span>
              </div>

              <div className="flex flex-col">
                <span className={`${montserrat.variable} font-thin text-[0.65rem]`}>CVV</span>
                <span className={`${montserrat.variable} font-light text-sm tracking-widest`}>***</span>
              </div>
            </div>

            <div className="flex flex-col justify-end relative w-14 h-10">
              <Image src="/visa.svg"
                priority={true}
                fill={true}
                alt={`Credit Card Visa`} />
            </div>
          </div>
        </div>
      </div>

      <div>
        <form className="flex flex-col px-2" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label className="text-sm text-gray-500">
              Name on card
            </label>
            <input className="w-full outline-none border-b-2 text-[#3326af] font-medium" type="text" value={name} onChange={handleChange} />
          </div>
          <div>
            <label className="text-sm text-gray-500">
              Card number
            </label>
            <input className="w-full outline-none border-b-2 text-[#3326af] font-medium" type="number" value={number} onChange={handleChangeNum} />
          </div>

          <div className="flex w-full gap-x-4">
            <div className="flex flex-col">
              <label className="text-sm text-gray-500">
                Expiration date
              </label>
              <input className="w-full outline-none border-b-2 text-[#3326af] font-medium" type="text" value={expiry} onChange={handleChangeExpiry} />
            </div>
            <div className="flex flex-col">
              <label className="text-sm text-gray-500">
                CVV
              </label>
              <input className="w-full outline-none border-b-2 text-[#3326af] font-medium" type="number" value="123" />
            </div>
          </div>
        </form>
      </div>
    </div>
  </>)

}

export default PaymentMethod