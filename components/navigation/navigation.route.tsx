"use client"
import Link from 'next/link';
import { useEffect, useState } from 'react'
import {FiSun} from 'react-icons/fi'
import {FcVideoCall} from 'react-icons/fc'
import {HiOutlineMoon} from 'react-icons/hi'
import AvatarDeneme from '../../assets/deneme-avatar.jpg';
import Image from 'next/image';
import { Badge } from '@mui/material';
import {AiFillBell} from 'react-icons/ai'
import {IoMdSettings} from 'react-icons/io'


const NavbarRoute:React.FC=()=>{
    const [darkmode,setDarkmode]=useState<string|null>(localStorage.getItem('darkmode'));
    const [authentication,setAuthentication]=useState<string|null>(localStorage.getItem('authPageSwitch'));

    useEffect(()=>{
        setDarkmode(localStorage.getItem('darkmode'));
        setAuthentication(localStorage.getItem('authPageSwitch'));
    },[])

    const handleDarkmode=()=>{
        localStorage.setItem('darkmode','false');
        setDarkmode('false');
    }
    const handleSunmode=()=>{
        localStorage.setItem('darkmode','true');
        setDarkmode('true');
    }
    const handleAuth=()=>{
        localStorage.setItem('authPageSwitch','false');
        setAuthentication('false');
    }
    const handleAuthReverse=()=>{
        localStorage.setItem('authPageSwitch','true');
        setAuthentication('true');
    }

    const user:boolean=true;
    return(
        <nav className="flex w-full h-full items-center px-16 py-12" >
            {user?(
                <>
                    <div className="flex-1  flex justify-start items-center text-center">
                        <label className="pr-2 text-3xl">VividChat</label>
                        <label className='pr-5 text-4xl'><FcVideoCall/></label>
                        <Link href="/" className="pr-5 text-xl">Home</Link>
                        <Link href="/about" className="pr-5 text-xl">About</Link>
                        <Link href="/contact" className="pr-5 text-xl">Contact</Link>
                    </div>
                    <div className="flex-1 flex justify-end items-center text-center">
                        <label className="pr-5 text-xl">English</label>
                        <div className='pr-5'>
                        {authentication==="true"?(
                            <button className=" text-xl bg-white shadow-2xl rounded-2xl px-3 py-2 text-blue-1" onClick={handleAuth}>Login</button>   
                            ):(
                            <button className=" text-xl bg-white shadow-2xl rounded-2xl px-3 py-2 text-blue-1" onClick={handleAuthReverse}>Register</button>
                        )}
                        </div>
                        {darkmode==="true"?(
                            <button className="pr-5 text-2xl font-black" onClick={handleDarkmode}><HiOutlineMoon/></button>
                        ):(
                            <button className="pr-5 text-2xl font-black" onClick={handleSunmode}><FiSun/></button>
                        )}
                    </div>
                </>
            ):(
                <>
                    <div className='flex-1 flex justify-stars'>
                        <label className="pr-2 text-3xl">VividChat</label>
                        <label className='pr-5 text-4xl'><FcVideoCall/></label>
                    </div>
                    <div className='flex-1 justify-end flex text-2xl text-center items-center'>
                        <span className='pr-5 transform hover:rotate-[360deg] duration-1000'><IoMdSettings/></span>
                        <button type='button' className='pr-5'>
                            <Badge badgeContent={4} color="primary"><AiFillBell/></Badge>
                        </button>
                        <span  className='pr-5'><Image src={AvatarDeneme} alt='avatar-image' width={48} height={36} className='border-2 border-black rounded-full'/></span>
                        {darkmode==="true"?(
                            <button className="pr-5 text-2xl font-black" onClick={handleDarkmode}><HiOutlineMoon/></button>
                        ):(
                            <button className="pr-5 text-2xl font-black" onClick={handleSunmode}><FiSun/></button>
                        )}
                    </div>
                </>
            )}
        </nav>
    )
}

export default NavbarRoute