import { Montserrat } from 'next/font/google'
import Image from 'next/image'
import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'
import { Products } from './Products'

const montserrat = Montserrat({ subsets: ['latin'], display: 'swap', variable: '--font-montserrat' })

const Sumary = () => {
  const Theme = useContext(ThemeContext)
  console.log(Products)
  const products = [
    { id: 1234, name: "Tênis Nike Feminino", price: 469.99, img: "/tenis-nike.jpg" },
    { id: 5678, name: "Blusa Moletom Juvenil", price: 179.99, img: "/moleton.jpg" }
  ]
  return (<>
    <div className="flex w-full justify-center mb-2">
      <h2 className={`text-gray-500 ${montserrat.variable} text-lg font-medium`}>Sumary</h2>
    </div>

    <div className="flex flex-col w-full">
      <div className="flex flex-col w-full relative">
        {products.map((product, index) => (
          <div className="flex w-full mb-4 justify-between" key={index}>
            <div className="flex w-16 h-16 relative">
              <Image
                src={product.img}
                priority={true}
                fill={true}
                alt={product.name} />
            </div>
            <div className="flex flex-col pl-2 w-[9rem]">
              <small className="text-gray-400 text-xs pb-1">Prod. Code: {product.id}</small>
              <span className="text-xs font-semibold">1x {product.name}</span>
            </div>

            <div className="flex flex-col">
              <small className="text-gray-400 text-xs pb-1">Total</small>
              <span className="text-xs font-semibold">${product.price}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="flex w-full justify-between">
        <small className="text-gray-400 text-xs pb-1">Subtotal</small>
        <span className="text-xs font-semibold">$649,98</span>
      </div>
      <div className="flex w-full justify-between mb-4">
        <small className="text-gray-400 text-xs pb-1">VAT (15%)</small>
        <span className="text-xs font-semibold">$97,49</span>
      </div>
      <hr className="" />
      <div className="flex w-full justify-between mt-4">
        <small className="text-gray-700 text-xs font-semibold">Total</small>
        <span className="text-xl font-semibold">$747,47</span>
      </div>
    </div>
  </>)

}

export default Sumary