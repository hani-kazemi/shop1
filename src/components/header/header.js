import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className="flex flex-row justify-evenly">
        <div className="border-r-2">
            <ul className="flex flex-col gap-4 mt-8 mx-8 mr-32">
                <li>
                  <Link to="/">Woman's fashion</Link>
                </li>
                <li>
                  <Link to="/">Men's fashion</Link>
                </li>
                <li>
                  <Link to="/">Electronis</Link>
                </li>
                <li>
                  <Link to="/">Home & lifestyle</Link>
                </li>
                <li>
                  <Link to="/">Medicine</Link>
                </li>
                <li>
                  <Link to="/">Sport & outdoor</Link>
                  </li>
                <li>
                  <Link to="/">Baby's & toys </Link>
                </li>
                <li>
                  <Link to="/">Geroceries & pets</Link>
                </li>
                <li>
                  <Link to="/">Health & beauty</Link>
                </li>
            </ul>
        </div>

        <div className="m-8 -ml-16 mr-32">
            <img src="../pics/nav/header.pic.png"/>
        </div>
    </div>
  )
}
