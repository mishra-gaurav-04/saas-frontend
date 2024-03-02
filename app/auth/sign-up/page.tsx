"use client"
import React from 'react';
import Link from 'next/link';
import { useState } from 'react';
import {useRouter} from 'next/navigation';

const page = () => {
  const router = useRouter();
  const [userInfo, setUserInfo] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState<string>("");
  const [pending,setPending] = useState<boolean>(false);

  const handleInputChange = (e: any) => {
    setUserInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  const handleSubmit = async(e: any) => {
    e.preventDefault();
    if (!userInfo.name || !userInfo.email || !userInfo.password) {
      setError("Details are Missing");
    }
    try{
      setPending(true);
      const res = await fetch("/api/signup",{
        method : "POST",
        headers : {
          "Content-Type" : "application/json"
        },
        body : JSON.stringify(userInfo)
      });
      if(res.ok){
        setPending(false);
        const form = e.target;
        form.reset();
        router.push('/auth/sign-in');
      }
      else{
        const errorData = await res.json();
        setError(errorData.message);
        setPending(false);
      }
    }
    catch(error){
      setPending(false);
      console.log('Something went wrong')
    }
  }
  return (
    <div className='flex items-center justify-center'>
      <div className="w-full mt-32  max-w-sm p-4 bg-gray-100 border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <h5 className="text-xl font-medium text-gray-900 dark:text-white">ContentForge.AI SignUp</h5>
          <div>
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
            <input onChange={(e: any) => handleInputChange(e)} type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name" required />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
            <input onChange={(e: any) => handleInputChange(e)} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
          </div>
          <div>
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
            <input onChange={(e: any) => handleInputChange(e)} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
          </div>
          <div className="flex items-start">
           { error && (<p className='text-red-600'>{error}</p>) }
          </div>
          <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" disabled={pending ? true : false}>{pending ? '....':'SignUp'}</button>
          <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
            Already Have an Account? <Link href="/auth/sign-in" className="text-blue-700 hover:underline dark:text-blue-500">SignIn</Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default page