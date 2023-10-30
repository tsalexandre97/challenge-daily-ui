import { Montserrat } from 'next/font/google'
const montserrat = Montserrat({ subsets: ['latin'], display: 'swap', variable: '--font-montserrat' })

const Confirmation = () => {
  
  return (<>
    <div className={`flex flex-col w-full items-center text-center gap-y-4 my-4 ${montserrat.variable}`}>
      <div className={`bg-[#5d36b6] w-10 h-10 rounded-full z-20 flex items-center justify-center`}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-8 h-8 text-white">
            <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
          </svg>
      </div>
      <h2 className="text-xl font-bold text-[#5d36b6]">Order placed!</h2>
      <p className="text-sm">Your order was placed successfully.<br /> For more details, check Delivery Status under Profile Tab.</p>
    </div>
  </>)

}

export default Confirmation