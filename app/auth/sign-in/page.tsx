"use client"
import Link from 'next/link';
import {useState} from 'react';
import {useRouter} from "next/navigation"
import {signIn} from 'next-auth/react'


const page = () => {
  const [userInfo,setUserInfo] = useState({email:"",password:""});
  const [error,setError] = useState<string>("");
  const [pending,setPending] = useState<boolean>(false);
  const router = useRouter();
  const handleInputChange = (e:any) => {
    setUserInfo((prev) => ({...prev,[e.target.name] : e.target.value}));
  };
  const handleSubmit = async(e:any) => {
    e.preventDefault();
    if(!userInfo.email || !userInfo.password){
      setError("Details are missing");
    }
    try{
      setPending(true);
      const res = await signIn("credentials",{
        email : userInfo.email,
        password : userInfo.password,
        redirect : false
      })
      if(res?.error){
        setError("Invalid Credentials");
        setPending(false);
        return;
      }
      router.replace("/dashboard");
    }
    catch(error){
      setPending(false);
      console.log('Something went wrong')
    }
  }
  return (
    <div className='flex items-center justify-center '>
      <div className="w-full mt-32  max-w-sm p-4 bg-gray-100 border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <h5 className="text-xl font-medium text-gray-900 dark:text-white">ContentForge.AI SignIn</h5>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
            <input onChange={(e:any) => handleInputChange(e)} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
          </div>
          <div>
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
            <input onChange={(e:any) => handleInputChange(e)} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
          </div>
          <div className="flex items-start">
           { error && (<p className='text-red-600'>{error}</p>) }
          </div>
          <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" disabled={pending?true:false}>{pending ? '....':'SignIn'}</button>
          <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
            Not registered? <Link href="/auth/sign-up" className="text-blue-700 hover:underline dark:text-blue-500">Create an account</Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default page