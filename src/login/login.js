import React from 'react'

export default function Login() {
  return (
    <div>
        <div className="flex flex-row w-full h-screen mb-36 my-10 max-96 justify-between">
            <div>
                <img src="../pics/login/Side Image.png" className='w-[800px]'/>
            </div>

            <div className="flex flex-col gap-4 mt-52 mr-52">
                <h2 className=" text-4xl">Log in to Exclosive</h2>
                <p className="text-xs">Enter your details below</p>
                <div>
                    <input className="border-b-2 border-gray-300 w-80 mt-6" placeholder="Email or Phone Number"></input>
                </div>
                <div>
                    <input className="border-b-2 border-gray-300 w-80 mt-4"  placeholder="password"></input>
                </div>

                <div className="flex flex-row gap-20 my-8">
                    <button className="bg-red-500 w-28 h-10 p-2 text-white rounded">login</button>
                    <button className="text-red-500">forget password?</button>
                </div>
            </div>
        </div>
    </div>
  )
}
