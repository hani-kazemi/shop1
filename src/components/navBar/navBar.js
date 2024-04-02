import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../layout/layout'
import SignUp from '../sign up/sign up'
import { useState } from 'react'
import About from '../about/about'
import Contact from '../contact/contact'

export default function NavBar() {

    const [DropDown , setDropDown] = useState(false);
    const setShowFunction = () => {
        setDropDown(!DropDown);
    }


  return (
    <div className="border-b-2 border-gray-300">
        <Layout/>
        <nav className="w-full h-10 flex flex-row justify-around mx-8 mt-8 mb-2">

        <div className="font-bold text-xl"><p>exclusive</p></div>
            
            <ul className="flex flex-row w-96 justify-center gap-14 text-lg">

                <li className='hover:border-b-2 border-gray-300'>
                    <Link to="/">Home</Link>
                </li>
                <li className='hover:border-b-2 border-gray-300'>
                    <Link to="./contact">contact</Link>
                </li>
                <li className='hover:border-b-2 border-gray-300'>
                    <Link to="./about">about</Link>
                </li>
                <li className='hover:border-b-2 border-gray-300' >
                    <Link to="./sign up">sing up</Link>
                </li>
            </ul>
            <div className="flex flex-row w-72 gap-6 mr-40">
                <div>
                    <form className="flex flex-row relative">
                    <input className="text-xs w-52 -ml-8 text-gray-700 bg-gray-200 p-2 rounded" type="search" placeholder="what are you looking for? "/>
                        <button type="submit" className="flex absolute right-1 top-2">
                            <img src="/pics/nav/icons-search.svg" className="w-5 h-5"/>
                        </button>
                    </form>
                </div>
                <div className="relative flex flex-row justify-start gap-4">
                    <button><img src="/pics/nav/heart.svg" className="w-5 h-5"/></button>
                    <button><img src="/pics/nav/basket.svg" className="w-6 h-6"/></button>
                    <button onClick={setShowFunction}><img src="../pics/nav/person.svg" className="w-6 h-5 hover:bg-red-500 rounded-full"/></button>
                    <ul className={`absolute top-10 right-0 bg-gray-600 bg-opacity-50 backdrop-blur-lg text-white flex flex-col w-60 ${DropDown ? `h-44 p-4` : `h-0 p-0`} transition-all gap-2 rounded  bg-gray-300`}>
                        <li className={`${DropDown ? `flex`:`hidden`}`}>manage by account</li>
                        <li className={`${DropDown ? `flex`:`hidden`}`}>my order</li>
                        <li className={`${DropDown ? `flex`:`hidden`}`}>my cancellations</li>
                        <li className={`${DropDown ? `flex`:`hidden`}`}>my reviews</li>
                        <li className={`${DropDown ? `flex`:`hidden`}`}>Logout</li>
                    </ul>
                </div>
            </div>

        </nav>
    </div>
  )
}