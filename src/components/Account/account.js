import React from 'react'

export default function Account() {
  return (
    <div>
        <div className="w-full h-[900px] m-8">
            <div className="flex flex-row justify-between mx-24 text-xs">
                <div className="flex flex-row gap-1 text-gray-400 cursor-pointer">
                    <p className="hover:text-black">Home</p><span>/</span>
                    <p className="hover:text-black" >My Account</p>
                </div>
                <div className="flex flex-row mr-40">
                    <p>Welcome!</p><span className="text-red-500">Md Rimel</span>
                </div>
            </div>
                
                <div className="flex flex-row gap-60 m-24">
                    <div className="text-sm">
                        <dl>
                            <dt className="font-bold">Manage My Account</dt>
                            <dd className="ml-10 cursor-pointer mt-2 text-gray-400 hover:text-red-500">My profile</dd>
                            <dd className="ml-10 cursor-pointer mt-2 text-gray-400 hover:text-red-500" >Address Book</dd>
                            <dd className="ml-10 cursor-pointer mt-2 text-gray-400 hover:text-red-500" >My payment option</dd>
                        </dl>
                        <dl>
                            <dt className="font-bold mt-6">My Order</dt>
                            <dd className="ml-10 cursor-pointer mt-2 text-gray-400 hover:text-red-500">My Returns</dd>
                            <dd className="ml-10 cursor-pointer mt-2 text-gray-400 hover:text-red-500" >My cancellation</dd>
                        </dl>
                        <dl>
                            <dt className="font-bold mt-6">My Wishlist</dt>
                        </dl>
                    </div>

                    <div className="shadow-md p-10">
                        <p className="text-red-500">Edit your profile</p>
                        
                        <div className="flex flex-row gap-20">
                            <div className="flex flex-col gap-2 mt-5">
                                <lable className="text-sm">First Name</lable>
                                <input type="text" placeholder="Md" className="w-80 bg-gray-200 h-10 rounded outline-none p-3"></input>
                            </div>
                            <div className="flex flex-col gap-2 mt-5">
                                <lable className="text-sm">Last Name</lable>
                                <input type="text" placeholder="Rimel" className="w-80 bg-gray-200 h-10 rounded outline-none p-3"></input>
                            </div>
                        </div>

                        <div className="flex flex-row gap-20">
                            <div className="flex flex-col gap-2 mt-5">
                                <lable className="text-sm">Email</lable>
                                <input type="text" placeholder="Rimelll@gmail.com" className="w-80 bg-gray-200 h-10 rounded outline-none p-3"></input>
                            </div>
                            <div className="flex flex-col gap-2 mt-5">
                                <lable className="text-sm">Address</lable>
                                <input type="text" placeholder="Kingstone, 5236, united state" className="w-80 bg-gray-200 h-10 rounded outline-none p-3"></input>
                            </div>
                        </div>

                        <div>
                        <div className="flex flex-col gap-2 mt-5">
                                <lable className="text-sm">Password changes</lable>
                                <input type="text" placeholder="Current password" className="w-full bg-gray-200 h-10 rounded outline-none p-3"></input>
                                <input type="password" placeholder="New password" className="w-full bg-gray-200 h-10 rounded outline-none p-3"></input>
                                <input type="password" placeholder="Confirm password" className="w-full bg-gray-200 h-10 rounded outline-none p-3"></input>
                        </div>

                        <div className="mt-9 flex flex-row gap-5 justify-end">
                            <button>Cancel</button>
                            <button className="bg-red-500 w-48 p-3 rounded border-red-500 text-white">Save Changes</button>
                        </div>
                        </div>
                    </div>

                </div>   
        </div>
    </div>
  )
}
