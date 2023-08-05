"use client"
import {  useEffect, useState } from "react";
import { LoginScreen } from "../export";
import {RegisterScreen} from '../export'
import { Transition } from "@headlessui/react";
import { useSelector } from "react-redux"
import RootState from "@/redux/root-reducer";

const Authentication:React.FC=()=>{
    const auth=useSelector((state:RootState)=>state.homeAuth.homeAuth);
    const [showPageTransition,setShowPageTransition]=useState<boolean>(false);
    useEffect(()=>{
        setShowPageTransition(true);
    },[]);



    return(
        !auth?(
            <Transition show={showPageTransition} enter='transition-opacity duration-1000' enterFrom='opacity-0' enterTo='opacity-100'>
                <LoginScreen />
            </Transition>
        ):(
            <Transition show={showPageTransition} enter='transition-opacity duration-1000' enterFrom='opacity-0' enterTo='opacity-100'>
                <RegisterScreen/>
            </Transition>
        )
    )

}

export default Authentication;