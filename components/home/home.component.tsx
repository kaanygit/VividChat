import { Transition } from "@headlessui/react"


const Home=()=>{
    return(
        <Transition show={showPageTransition} enter='transition-opacity duration-1000' enterFrom='opacity-0' enterTo='opacity-100'>
            {!session?(
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
            <main className="flex flex-row h-screen items-center justify-center px-24 w-full">
                <div className="flex-1 w-full h-full p-16 justify-center items-center text-center ">
                <div className="flex pb-5">
                    <span className="flex-1 flex justify-center items-center"><span className="pr-4">Create Room </span><BsCameraVideo/></span>
                    <span className="flex-1 flex justify-center items-center relative"><input className="w-3/4 flex pr-12 " /><BiKey className="top-1 bottom-0  right-14 absolute justify-center items-center text-center"/></span>
                    <span className="flex-1 flex justify-center items-center" onClick={handleCamera}><span className="pr-4">{!showCam?"Open":"Close"} Camera</span><CiCamera/></span>
                </div>
                <div >
                    <video className="bg-gray-300  justify-center items-center  text-center flex w-full " width={1000} height={500} autoPlay playsInline ref={videoRef}></video>
                </div>
                </div>
            </main>
            )}
            <ToastContainer/>
            </Transition>
    )
}