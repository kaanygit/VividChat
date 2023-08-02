"use client"
import React from "react"
import Image from 'next/image'
import Character from '../assets/home-page-character.png'
import { Authentication, LoginScreen } from '@/components/export'
import { Transition } from '@headlessui/react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {FcVideoCall} from 'react-icons/fc'
import {BsSearch} from 'react-icons/bs';
import denemeAvatar from '../assets/deneme-avatar.jpg'


export default function Home() {
  const [showPageTransition,setShowPageTransition]=React.useState<boolean>(false);
  React.useEffect(()=>{
    setShowPageTransition(true);
  },[])
  const user:boolean=true;
  return (
    <Transition show={showPageTransition} enter='transition-opacity duration-1000' enterFrom='opacity-0' enterTo='opacity-100'>
      {user?(
        <main className="flex flex-row  h-full items-center justify-between px-24 py-36 w-full">
            <div className="relative flex flex-1 flex-col place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
              <span className='text-5xl'>Sign in now start using our video chat application</span>
              <span className='justify-start flex w-full pt-8'>If you don't have an account, create it now <button className='text-blue-1 pl-2' >Register</button></span>
            </div>
            <div className='flex-1 relative mx-auto'>
              <Image src={Character} alt='home-page-character' className="animate-image"/>  
            </div>   
            <div className='flex-1 w-full h-full justify-center items-center text-center'>
              <Authentication/>
            </div> 
        </main>
      ):(
        <main className="flex flex-row h-screen items-center justify-center px-24 w-full ">
          <div className="w-full h-full text-xl flex-1">
            <div className="flex border-black border-b">
              <div className="pr-4 text-4xl"><span><FcVideoCall/></span></div>
              <div className="relative text-xl">
                <span className="absolute right-2 top-0.5"><BsSearch/></span>
                <input type="text" placeholder="Search" required className="bg-blue-100 place-holder-gray-400 focus:ring-offset-1 focus:ring-2 focus:ring-blue-500 focus:outline-none rounded-lg pr-8"/>
              </div>
            </div>
            <div className="pt-5 flex grid grid-cols-1 gap-5 text-center">
              <div className="flex flex-row justify-start relative">
                <Image src={denemeAvatar} alt="user-avatar" width={48} height={36} className="rounded-full"/>
                <span className="pl-5 flex text-center items-center">Yasin Kaan Yiğit</span>
                <span className="pl-5 flex text-center items-center justify-end text-2xl absolute top-0 right-0 bottom-0"><FcVideoCall/></span>
              </div>
              <div className="flex flex-row justify-start relative">
                <Image src={denemeAvatar} alt="user-avatar" width={48} height={36} className="rounded-full"/>
                <span className="pl-5 flex text-center items-center">Yasin Kaan Yiğit</span>
                <span className="pl-5 flex text-center items-center justify-end text-2xl absolute top-0 right-0 bottom-0"><FcVideoCall/></span>
              </div>
              <div className="flex flex-row justify-start relative">
                <Image src={denemeAvatar} alt="user-avatar" width={48} height={36} className="rounded-full"/>
                <span className="pl-5 flex text-center items-center">Yasin Kaan Yiğit</span>
                <span className="pl-5 flex text-center items-center justify-end text-2xl absolute top-0 right-0 bottom-0"><FcVideoCall/></span>
              </div>
            </div>
          </div>
          <div className="flex-initial w-full h-full items-center flex justify-center  p-10">
            <span className="text-5xl w-full h-full bg-gray-200 text-center bg-[url('../assets/chat-background.jpg')] rounded-2xl flex justify-center items-center">VividChat</span>
          </div>
        </main>
      )}
      <ToastContainer/>
    </Transition>
  )
}
