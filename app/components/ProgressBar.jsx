const ProgressBar = ({ step, totalSteps }) => {
  const calculateProgressBar = () => {
    return ((step - 1) / (totalSteps - 1)) * 100
  }
  return (
    <div className="step-by-step h-6 flex flex-col justify-center relative mb-10">

      <div className="flex justify-between absolute w-full">
        <div className={`duration-1000 bg-blue-700 w-4 h-4 rounded-full z-20 flex items-center justify-center`}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-3 h-3 text-white">
            <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
          </svg>
        </div>

        {step >= 2 ? (
          <div className={`duration-1000 bg-blue-700 w-4 h-4 rounded-full z-20 flex items-center justify-center`}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-3 h-3 text-white">
              <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
            </svg>
          </div>
        ) : (
          <div className="duration-1000 bg-gray-300 w-4 h-4 rounded-full z-20"></div>
        )}


        {step >= 3 ? (
          <div className={`duration-1000 bg-blue-700 w-4 h-4 rounded-full z-20 flex items-center justify-center`}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-3 h-3 text-white">
              <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
            </svg>
          </div>
        ) : (
          <div className="duration-1000 bg-gray-300 w-4 h-4 rounded-full z-20"></div>
        )}
      </div>

      <div className="flex w-full h-[0.20rem] bg-gray-200 z-0">
        <div className={`flex bg-blue-700 h-[0.20rem] z-10 duration-1000`} style={{ width: calculateProgressBar() + "%" }}></div>
      </div>
    </div>
  )
}

export default ProgressBar 