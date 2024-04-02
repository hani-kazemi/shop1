import React from 'react'

export default function Checkout() {
  return (
    <div>
        <div className="w-full h-[900px] m-8 ml-32">
            <div className="flex flex-row gap-2">
                <p className="text-gray-400 cursor-pointer hover:text-black">Account</p><span className="text-gray-400">/</span>
                <p className="text-gray-400 cursor-pointer hover:text-black">My Acoount</p><span className="text-gray-400">/</span>
                <p className="text-gray-400 cursor-pointer hover:text-black">Product</p><span className="text-gray-400">/</span>
                <p className="text-gray-400 cursor-pointer hover:text-black">View Cart</p><span className="text-gray-400">/</span>
                <p className="text-gray-400 cursor-pointer hover:text-black">Checkout</p>
            </div>

            <h2 className="text-3xl m-10 -ml-1">Billing Details</h2>
            <div className="flex flex-row gap-80">
                <div>
                    <form action="">
                        <div className="flex flex-col w-[130%] gap-3 my-5">
                            <lable className="text-gray-400">First Name</lable>
                            <input type="text" className="border-2 outline-none bg-gray-300 h-11 rounded cursor-pointer p-2" />
                        </div>
                        <div className="flex flex-col w-[130%] gap-3 my-5">
                            <lable className="text-gray-400" >Company name</lable>
                            <input type="text" className="border-2 outline-none  bg-gray-300 h-11 rounded cursor-pointer p-2" />
                        </div>
                        <div className="flex flex-col w-[130%] gap-3 my-5">
                            <lable className="text-gray-400">Street address</lable>
                            <input type="text" className="border-2 outline-none  bg-gray-300 h-11 rounded cursor-pointer p-2" />
                        </div>
                        <div className="flex flex-col w-[130%] gap-3 my-5">
                            <lable className="text-gray-400" >Apartment, floor, etc.(optional)</lable>
                            <input type="text" className="border-2 outline-none  bg-gray-300 h-11 rounded cursor-pointer p-2" />
                        </div>
                        <div className="flex flex-col w-[130%] gap-3 my-5">
                            <lable className="text-gray-400" >Town/city</lable>
                            <input type="text" className="border-2 outline-none  bg-gray-300 h-11 rounded cursor-pointer p-2" />
                        </div>
                        <div className="flex flex-col w-[130%] gap-3 my-5">
                            <lable className="text-gray-400" >Phone Number</lable>
                            <input type="text" className="border-2 outline-none  bg-gray-300 h-11 rounded cursor-pointer p-2" />
                        </div>
                        <div className="flex flex-col w-[130%] gap-3 my-5">
                            <lable className="text-gray-400" >Email Address</lable>
                            <input type="text" className="border-2 outline-none  bg-gray-300 h-11 rounded cursor-pointer p-2" />
                        </div>
                        <div className="flex flex-row gap-3 items-center">
                            <input type="checkbox" id="checkout" className=" w-4 h-4"/>
                            <lable for="checkout">Save this information for faster check-out next time</lable>
                        </div>
                    </form>
                </div>

                <div className="my-16 flex flex-col gap-7">
                    <div className="flex flex-row gap-56" >
                        <div className="flex flex-row gap-3">
                            <img className="w-8 h-8" src="../pics/content/gamepad.png"/>
                            <p>LCD Monitor</p>
                        </div>
                        <p>$650</p>
                    </div>
                    
                    <div className="flex flex-row gap-56" >
                        <div className="flex flex-row gap-3">
                            <img className="w-8 h-8" src="../pics/nav/tv.png"/>
                            <p>LCD Monitor</p>
                        </div>
                        <p className="-ml-2">$1100</p>
                    </div>
                    <div className="flex flex-row gap-72 border-b-2 border-gray-400 pb-5">
                        <p>subtotal:</p>
                        <p>$1750</p>
                    </div>
                    <div className="flex flex-row gap-72 border-b-2 border-gray-400 pb-5">
                        <p>shipping:</p>
                        <p className="ml-3">Free</p>
                    </div>
                    <div className="flex flex-row gap-72 pb-5">
                        <p>total:</p>
                        <p className="ml-8">$1750</p>
                    </div>

                    <div className="flex flex-row justify-between">
                        <div className="flex flex-row gap-2" >
                            <input type="radio" name="choose"/>
                            <p>Bank</p>
                        </div>
                        <div className="flex flex-row gap-2 w-10 h-6 mr-32">
                            <img src="../pics/checkout/Bkash.png"/>
                            <img src="../pics/checkout/Visa.png"/>
                            <img src="../pics/checkout/Mastercard.png"/>
                            <img src="../pics/checkout/Nagad.png" />
                        </div>
                    </div>

                    <div className="flex flex-row gap-2">
                        <input type="radio" name="choose"/>
                        <p>Cash on Delivery</p>
                    </div>
                    <div className="flex flex-row gap-5">
                        <button className=" text-start border-2 border-black px-5 text-gray-400 w-72 h-12 rounded">coupon Code</button>
                        <button className="border-2 border-red-500 p-2 rounded bg-red-500 text-white">Apply coupon</button>
                    </div>

                    <button className="border-2 border-red-500 p-3 rounded w-40 px-4 bg-red-500 text-white">Place order</button>
                </div>
            </div>
        </div>
    </div>
  )
}
