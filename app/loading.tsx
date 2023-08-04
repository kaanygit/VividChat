
const LoadingHome:React.FC=()=>{
    return(
        <main className="flex h-full items-center justify-center px-24 py-36 w-full">
            <div className="flex items-center justify-center min-h-full p-5 bg-gray-100 min-w-screen">
                <div className="flex space-x-2 animate-pulse">
                    <div className="w-3 h-3 bg-blue-2 rounded-full"></div>
                    <div className="w-3 h-3 bg-blue-2 rounded-full"></div>
                    <div className="w-3 h-3 bg-blue-2 rounded-full"></div>
                </div>
            </div>
        </main>
    )
}
export default LoadingHome;