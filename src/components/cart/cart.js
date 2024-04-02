import React from 'react'

export default function Cart() {
  return (
    <div className="m-8 h-[900px] w-full" >
        <div>
            <p className="mx-24 text-gray-400">Home / <span className="text-black">cart</span></p>
        </div>
        <div>
            <div className="flex flex-row justify-between px-10 items-center w-[75%] ml-28 mt-16 h-14 shadow-md border-2 rounded">
                <p>Product</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Subtotal</p>
            </div>
            <div className="flex flex-row justify-between px-10 items-center w-[75%] ml-28 mt-16 h-14 shadow-md border-2 rounded">
                
                <div className="flex flex-row gap-2">
                    <img className="w-16 h-8" src="../pics/nav/tv.png"/>
                    <p>LCD monitor</p>
                </div>
                <p className="-ml-32">$650</p>
                <input type="number" placeholder="0" className="w-10 h-5 border-black border-2 rounded"/>
                <p>$650</p>
            </div>

            <div className="flex flex-row justify-between px-10 items-center w-[75%] ml-28 mt-16 h-14 shadow-md border-2 rounded">
                
                <div className="flex flex-row gap-2">
                    <img className="w-16 h-8" src="../pics/content/gamepad.png"/>
                    <p>LCD monitor</p>
                </div>
                <p className="-ml-32">$650</p>
                <input type="number" placeholder="0"  className="w-10 h-5 border-black border-2 rounded"/>
                <p>$650</p>
            </div>    
        </div>
        
        <div className="flex flex-row justify-between mt-6">
            <button className="border-2 ml-28 border-gray-500 px-10 py-2 rounded">return To shop</button>
            <button className="border-2 mr-[18%] border-gray-500 px-8 py-2 rounded" >update cart</button>
        </div>


        <div className="flex flex-row gap-[25%] mx-28 mt-10">
            <div className="flex gap-6 h-12">
                <button className="border-2 text-start w-64 border-gray-950 p-2 rounded text-gray-400">coupon code</button>
                <button className="border-2 text-white bg-red-500 border-red-500 px-6 rounded">apply coupon</button>
            </div>
            <div className="border-black border-2 flex flex-col gap-4 w-96 rounded p-3 mb-10">
                <h3 className="text-xl">cart total</h3>
                <div className="flex flex-row justify-between border-b-2 p-2">
                    <p>subtotal:</p>
                    <p>$1750</p>
                </div>
                <div className="flex flex-row justify-between border-b-2 p-2">
                    <p>shipping:</p>
                    <p>Free</p>
                </div>
                <div className="flex flex-row justify-between border-b-2 p-2">
                    <p>total:</p>
                    <p>$1750</p>
                </div>
                <button className="border-2-red bg-red-500 p-2 mb-3 text-white w-52 ml-16 rounded">procees to checkout</button>
            </div>
        </div>
    </div>
  )
}
