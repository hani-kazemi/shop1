import React from 'react'

export default function Contact() {
  return (
    <div>
        <div>
            <div className="w-full h-[900px] m-8">
                <div className="flex flex-row gap-1 ml-24 mt-16">
                    <p className="text-gray-400 hover:text-black cursor-pointer">Home</p><span>/</span>
                    <p className="text-gray-400 hover:text-black cursor-pointer">contact</p>
                </div>

                <div className="flex flex-row items-start gap-10">
                    <div className="m-16 p-7 w-80 shadow-lg">
                        <div className="flex flex-row gap-4 items-center mb-7">
                            <img className="w-8 h-8" src="../pics/checkout/icons-phone.svg"/>
                            <p className="font-bold">Call to us</p>
                        </div>
                        <div className="flex flex-col gap-5 border-b-2 w-56 pb-4 border-gray-400">
                            <p>we are available 24/7,7 days a week.</p>
                            <p>phone: +8801611112222</p>
                        </div>
                        <div className="flex flex-row gap-4 items-center mt-7" >
                            <img className="w-8 h-8" src="../pics/checkout/icons-phone.svg"/>
                            <p className="font-bold">write to us</p>
                        </div>

                        <div className="flex flex-col gap-4 mt-7">
                            <p>Fill out our forn and we will contact<br/> you within 24 hours.</p>
                            <p>Emails : customer@exclusive.com</p>
                            <p>Emails : support@exclusive.com</p>
                        </div>
                    </div>
                    
                    <div className="flex flex-col gap-6 shadow-lg p-10 mt-24">
                        <div className="flex flex-row gap-5">
                            <input type="text" placeholder="your Name " className="w-64 h-10 outline-none p-4 border-2 border-gray-200 rounded bg-slate-200" />
                            <input type="text" placeholder="your Email" className="w-64 h-10 outline-none p-4 border-2 border-gray-200 rounded bg-slate-200" />
                            <input type="text" placeholder="your phone" className="w-64 h-10 outline-none p-4 border-2 border-gray-200 rounded bg-slate-200" />
                        </div>
                        <div>
                            <input type="text" placeholder="your massege" className="w-full h-48 bg-gray-200 outline-none p-2 rounded"/>
                        </div>
                        <div className="flex flex-row justify-end">
                            <button className="w-40 h-12 bg-red-500 rounded text-white">send Massage</button>
                        </div>
                    </div>
                    
                </div>
                    
            </div>

        </div>
    </div>
  )
}
