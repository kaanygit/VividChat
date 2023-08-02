"use client"
import {  useEffect, useState } from "react";
import { LoginScreen } from "../export";
import {RegisterScreen} from '../export'
import { Transition } from "@headlessui/react";

const Authentication:React.FC=()=>{
    const [auth,setAuth]=useState<string|null>(localStorage.getItem('authPageSwitch'));
    const [showPageTransition,setShowPageTransition]=useState<boolean>(false);
    useEffect(()=>{
        setAuth(localStorage.getItem("authPageSwitch"));
        setShowPageTransition(true);
        console.log(localStorage.getItem("authPageSwitch"));
    },[localStorage.getItem("authPageSwitch")]);

    return(
        auth=="false"?(
            <Transition show={showPageTransition} enter='transition-opacity duration-1000' enterFrom='opacity-0' enterTo='opacity-100'>
                <LoginScreen/>
            </Transition>
        ):(
            <Transition show={showPageTransition} enter='transition-opacity duration-1000' enterFrom='opacity-0' enterTo='opacity-100'>
                <RegisterScreen/>
            </Transition>
        )
    )

}

export default Authentication;