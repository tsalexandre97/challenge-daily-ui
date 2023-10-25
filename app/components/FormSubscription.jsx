"use client"
import { useForm } from 'react-hook-form'

const FormSubscription = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)
  console.log(watch("example"))

  return (
    <form onSubmit={handleSubmit(onSubmit)}>

      
<label for="email-address-icon" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Full Name</label>
<div className="relative">
  <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
  <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
      <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
    </svg>
  </div>
  <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" defaultValue={"John Doe"} {...register("fullName", {required: true})} />

</div>
<small className="flex h-6 font-bold text-red-600">
{errors.fullName && <span>This field is required</span>}
</small>

<label for="email-address-icon" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Email</label>
<div className="relative">
  <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
      <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
      <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
    </svg>
  </div>
  <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" defaultValue={"john@teste.com"} {...register("yourEmail", {required: true})} />

</div>
<small className="flex h-6 font-bold text-red-600">
{errors.yourEmail && <span>This field is required</span>}
</small>


      

  

      <input className="mt-2 text-white bg-[#ff7e77] hover:bg-[#ff7e77] focus:ring-4 focus:outline-none focus:ring-[#ff7e77] font-medium rounded-lg text-sm px-10 py-2.5 text-center dark:bg-[#ff7e77] dark:hover:bg-[#ff7e77] dark:focus:ring-[#ff7e77] cursor-pointer" value="SEND" type="submit" />

    </form>
  )

}

export default FormSubscription