import React from 'react'

export default function Footer() {
  return (
    <div>
        <div className="bg-black text-white h-96 flex flex-row justify-center gap-8">
            <div className="m-12 flex flex-col gap-6 py-8">
                <h2 className="font-bold">Exclusive</h2>
                <p>subscribe</p>
                <p className="text-xs">Get 10% off your first order</p>
                <div className="flex flex-row relative">
                    <input className="bg-black h-8 rounded w-44 border-2 border-white text-sm p-4" type="email" placeholder="Enter your email"></input> 
                    <img className="absolute left-36 top-2" src="../pics/content/arrow.svg" />
                </div> 
            </div>


            <div className="flex flex-col gap-4 py-8 m-12">
                <h2 className="font-bold">support</h2>
                <p className="">lll bijoy sarani, Dhaka,<br/> DH 1515, Bangladesh.</p>
                <p>exclusive@gmail.com</p>
                <p>+88015-88888-9999</p>
            </div>


            <div className="flex flex-col gap-4 py-8 m-12">
                <h4 className="font-bold">Account</h4>
                <p>My account</p>
                <p>Login/Register</p>
                <p>Cart</p>
                <p>whishlist</p>
                <p>shop</p>
            </div>

            <div className="flex flex-col gap-4 py-8 m-12" >
                <h4 className="font-bold">Quick Link</h4>
                <p>privacy policy</p>
                <p>Term Of Use</p>
                <p>FAQ</p>
                <p>Cantact</p>
            </div>

            <div className="flex flex-col gap-4 py-8 m-12" >
                <h4 className="font-bold">Download App</h4>
                <p className="text-xs">save s3 with App New User Only</p>
                <div className="flex flex-row">
                    <img className="w-20 h-20" src="../pics/content/Qrcode 1.png"/>
                    <div className="flex flex-col" >
                        <div className="-mt-7">
                            <img className="w-28 h-24" src="../pics/content/Google_Play-Badge-Logo.wine.svg"/>
                            <img className="w-28 h-24 -mt-12" src="../pics/content/app-store-.png"/>
                        </div>
                        <div className="flex flex-row justify-between -ml-20 -mt-4">
                            <img className="w-4 h-4" src="../pics/footer/Vector.svg"/>
                            <img className="w-4 h-4" src="../pics/footer/Group.svg"/>
                            <img className="w-4 h-4" src="../pics/footer/Group (1).svg"/>
                            <img className="w-4 h-4" src="../pics/footer/Icon-Linkedin.svg"/>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <hr/>
        <div className="text-center bg-black text-gray-700 p-5">
            <p>@ copyright  Rimle  2022  All  right  reserved</p>
        </div>
    </div>
  )
}
