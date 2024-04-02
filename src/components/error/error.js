import React from 'react'

export default function Error() {
  return (
    <div>
        <div className="w-full h-screen m-8">
            <div className="flex flex-row gap-1 text-gray-300 ml-28">
                <p className="hover:text-black">Home</p><span>/</span>
                <p className="text-black">Error 404</p>
            </div>
            <div className="flex flex-col items-center justify-center mt-32">
                <h2 className="font-bold text-8xl pb-10">404 Not Found</h2>
                <p className="pb-20">your visited page not found.you may go home page.</p>
                <button className="border-red-500 bg-red-500 p-4 w-52 text-white rounded">Back to home Page</button>
            </div>
        </div>
    </div>
  )
}
