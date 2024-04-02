import React from 'react'

export default function SignUp() {
  return (
    <div>
        <div className="flex flex-row w-full h-screen mb-36 my-10 max-96 justify-between">
            <div>
                <img src="../pics/login/Side Image.png" className='w-[800px]'/>
            </div>

            <div className="flex flex-col gap-4 mt-52 mr-52">
                <h2 className=" text-4xl">Creat an account</h2>
                <p className="text-xs">Enter your details below</p>
                <div>
                    <input className="border-b-2 border-gray-300 w-80 mt-6" type="text" placeholder="Name"></input>
                </div>
                <div>
                    <input className="border-b-2 border-gray-300 w-80 mt-6" type="email" placeholder="Email or Phone Number"></input>
                </div>
                <div>
                    <input className="border-b-2 border-gray-300 w-80 mt-4" type="password"  placeholder="password"></input>
                </div>

                <div className="flex flex-col gap-6 my-8">
                    <button className="bg-red-500 w-80 h-10 p-2 text-white rounded">Create Account</button>
                    <div className="flex justify-center rounded gap-2 border-2 p-3 border-gray-500">
                        <img src="../pics/login/Icon-Google.svg"/>
                        <button>sign up with google</button>
                    </div>
                    <div className="flex flex-row justify-around text-sm">
                        <p>already have account?</p>
                        <p className="hover:border-b-2 font-semibold border-gray-800">login</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
