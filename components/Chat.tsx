'use client'
import React from "react";
import Image from "next/image";
import { IoAddCircleSharp } from "react-icons/io5";
import { MdSend } from "react-icons/md";
import { HiOutlineMenu } from "react-icons/hi";
import { useSession } from "next-auth/react";
import {useState} from 'react';
import {postPrompt} from '@/lib/actions/user.action'
import { preconnect } from "next/dist/server/app-render/entry-base";

const Chat = ({ toggle, setToggle }: any) => {
  const { data: session, status } = useSession();
  const [response,setResponse] = useState('');
  const [prompt,setPrompt] = useState({});
  const userId = session?.user?.id;

  const handleInputChange = (e:any) => {
    setPrompt((prev) => ({
      ...prev,[e.target.name] : e.target.value
  }))
  }

  const handleSubmit = async(e:any) => {
    e.preventDefault();
    try{
      const res = await postPrompt({userId,prompt});
      console.log(res);
    }
    catch(error){
      console.log(error);
    }
  }

  console.log('This is prompt\n',prompt);

  return (
    <>
      <div className="h-screen w-full md:w-2/3 bg-gray-100">
        <div className="flex justify-between items-center w-full bg-white h-[52px]">
          <div className="ml-4 flex gap-2 items-center">
            <HiOutlineMenu
              className="text-2xl md:hidden block"
              onClick={() => {
                setToggle(!toggle);
              }}
            />
            <Image
              src="/assets/logo.svg"
              alt=""
              width={30}
              height={30}
              className="rounded-full"
            />
            <div>
              <p className="text-md">{session?.user?.name}</p>
              <p className="text-sm text-gray-500">{session?.user?.email}</p>
            </div>
          </div>
          <button className="hidden md:block mr-2 border text-sm border-[#6656FF] py-2 px-4 rounded-3xl hover:bg-[#6656FF] hover:text-white">
            Invite Friends
          </button>
        </div>

        <div className="flex gap-2.5 p-3">
          {/* <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="Jese image"> */}
          <div className="flex flex-col w-full leading-1.5 p-4 border-gray-200 bg-white rounded-e-xl rounded-es-xl dark:bg-gray-700 shadow-lg">
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <span className="text-sm font-semibold text-gray-900 dark:text-white">
                Bonnie Green
              </span>
              <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                11:46
              </span>
            </div>
            <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">
              That's awesome. I think our users will really appreciate the
              improvements.
            </p>
            <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
              Received
            </span>
          </div>
        </div>
        <div className="flex gap-2.5 p-3">
          {/* <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="Jese image"> */}
          <div className="flex flex-col w-full leading-1.5 p-4 border-gray-200 bg-white rounded-e-xl rounded-es-xl dark:bg-gray-700 shadow-lg">
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <span className="text-sm font-semibold text-gray-900 dark:text-white">
                Bonnie Green
              </span>
              <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                11:46
              </span>
            </div>
            <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe
              esse, impedit commodi quaerat ut et tempore obcaecati, architecto,
              maxime dolore quos magni officiis distinctio unde in optio non
              facilis illum doloremque. Reiciendis sequi harum autem culpa
              repudiandae, pariatur fugit impedit ipsa cumque commodi laboriosam
              et ad ducimus voluptatem neque. Laborum.
            </p>
            <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
              Received
            </span>
          </div>
        </div>
        <div className="flex gap-2.5 p-3">
          {/* <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="Jese image"> */}
          <div className="flex flex-col w-full leading-1.5 p-4 border-gray-200 bg-white rounded-e-xl rounded-es-xl dark:bg-gray-700 shadow-lg">
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <span className="text-sm font-semibold text-gray-900 dark:text-white">
                Bonnie Green
              </span>
              <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                11:46
              </span>
            </div>
            <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In beatae
              iure dolorum facere perspiciatis, nam ab distinctio molestias
              omnis porro exercitationem dolorem at consequuntur quis voluptatem
              magnam quidem, ex, tenetur repellendus incidunt itaque provident?
              Tempora explicabo quisquam, commodi in, temporibus nostrum
              asperiores eum voluptas sapiente possimus obcaecati et
              dignissimos? Iste rem voluptatum voluptatem laborum sunt natus,
              possimus aut enim adipisci quaerat nesciunt nihil nobis excepturi
              quam tempora vitae. Ab natus delectus molestiae totam voluptatem
              illo amet veritatis recusandae fugit, eligendi accusamus
              voluptatum neque doloribus obcaecati ullam reiciendis magnam nam
              dolor enim error impedit. Ducimus accusamus sed explicabo esse
              nisi. Aliquid!
            </p>
            <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
              Received
            </span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="fixed bottom-0 w-[65%] m-4">
          <label
            form="submit"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 -start-1 flex items-center ps-3 hover:cursor-pointer">
              <IoAddCircleSharp className="text-3xl text-[#4b3ebe] " />
            </div>
            <input
              type="text"
              id="chat"
              name="query"
              onChange={(e) => handleInputChange(e)}
              className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-3xl bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none"
              placeholder="Tell me what do you want"
              required
            />
            <button
              type="submit"
              className="text-white absolute end-2.5 bottom-3 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <MdSend />
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Chat;
