import React from "react";

export default function Wishlist() {
  const Data5 = [
    {
      id: 1,
      name: "Gucci duffle bag",
      price: "$960",
      image: "../pics/content/bag.png",
      discount: "-35%",
    },
    {
      id: 2,
      name: "RGB liquid CPU Cooler",
      price: "$1960",
      image: "../pics/content/cpu cooler.png",
    },
    {
      id: 3,
      name: "Gp11 Shooter USB Gamepad",
      price: "$550",
      image: "../pics/content/gamepad.png",
    },
    {
      id: 4,
      name: "Quilted satin Jacket",
      price: "$750",
      image: "../pics/content/jacket.png",
    },
  ];
  const Data6 = [
    {id:1 , name:"ASUS FHD Gaming Laptp", price:"$960", image:"../pics/content/lap top.png" , discount: "-35%"},
    {id:2 , name:"LCD Gaming Monitor", price:"$1160", image:"../pics/nav/tv.png" },
    {id:3 , name:"HAVA HV-G92 Gamepad", price:"$560", image:"../pics/content/gamepad.png" , kind:"knew"},
    {id:4 , name:"AK-900 Wired Keyboared", price:"$200", image:"../pics/nav/keyboared.png" },
  ]
  return (
    <div className="w-full h-auto m-8">
      <div>
        <div className="flex flex-row justify-between m-16 mx-40">
          <p>Wishlist(4)</p>
          <button className="border-gray-700 hover:bg-black hover:text-white mr-40 border-2 p-2 px-8 rounded">
            Move All to Bag
          </button>
        </div>
      </div>

      <div className="flex flex-row justify-start gap-12 mx-40 relative">
        {Data5.map((i) => {
          return (
            <div>
              <img className="bg-gray-200 p-16 w-80 h-64" src={i.image} />
              <div className="flex flex-row cursor-pointer gap-3 justify-center items-center bg-black text-white">
                <svg 
                  width="24"
                  height="24"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11 27C11.5523 27 12 26.5523 12 26C12 25.4477 11.5523 25 11 25C10.4477 25 10 25.4477 10 26C10 26.5523 10.4477 27 11 27Z"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M25 27C25.5523 27 26 26.5523 26 26C26 25.4477 25.5523 25 25 25C24.4477 25 24 25.4477 24 26C24 26.5523 24.4477 27 25 27Z"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M3 5H7L10 22H26"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10 16.6667H25.59C25.7056 16.6667 25.8177 16.6267 25.9072 16.5535C25.9966 16.4802 26.0579 16.3782 26.0806 16.2648L27.8806 7.26479C27.8951 7.19222 27.8934 7.11733 27.8755 7.04552C27.8575 6.97371 27.8239 6.90678 27.7769 6.84956C27.73 6.79234 27.6709 6.74625 27.604 6.71462C27.5371 6.68299 27.464 6.66661 27.39 6.66666H8"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <button className="font-bold h-8">
                  add to cart
                </button>
              </div>
              {i.discount && (
                <button className=" absolute top-4 left-4 w-14 h-6 border border-red-500 bg-red-500 rounded font-bold text-white">
                  {i.discount}
                </button>
              )}

              <div className="mt-6 mb-28">
                <h3 className="text-xl mb-2">{i.name}</h3>
                <p className="font-bold text-lg text-red-500">{i.price}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div>
        <div className="flex flex-row justify-between m-16 mx-40">
            <div className="flex flex-row gap-2 justify-center items-center">
                <div className="w-5 h-10 border border-red-500 bg-red-500 rounded"></div>
                <p className="text-xl">just for you</p>
            </div> 
            <button className="border-gray-700 hover:bg-black hover:text-white mr-40 border-2 p-2 px-8 rounded">
                see All
            </button>
        </div>
        
        <div className="flex flex-row justify-start gap-12 mx-40 mb-72">
        {Data6.map((i) => {
          return (
            <div className="relative">
              <img className="bg-gray-200 p-16 w-80 h-64" src={i.image} />
              <div className="flex flex-row cursor-pointer gap-3 justify-center items-center bg-black text-white">
                <svg 
                  width="24"
                  height="24"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11 27C11.5523 27 12 26.5523 12 26C12 25.4477 11.5523 25 11 25C10.4477 25 10 25.4477 10 26C10 26.5523 10.4477 27 11 27Z"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M25 27C25.5523 27 26 26.5523 26 26C26 25.4477 25.5523 25 25 25C24.4477 25 24 25.4477 24 26C24 26.5523 24.4477 27 25 27Z"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M3 5H7L10 22H26"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10 16.6667H25.59C25.7056 16.6667 25.8177 16.6267 25.9072 16.5535C25.9966 16.4802 26.0579 16.3782 26.0806 16.2648L27.8806 7.26479C27.8951 7.19222 27.8934 7.11733 27.8755 7.04552C27.8575 6.97371 27.8239 6.90678 27.7769 6.84956C27.73 6.79234 27.6709 6.74625 27.604 6.71462C27.5371 6.68299 27.464 6.66661 27.39 6.66666H8"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <button className="font-bold h-8">
                  add to cart
                </button>
              </div>
              {i.discount && (
                <button className=" absolute top-4 left-4 w-14 h-6 border border-red-500 bg-red-500 rounded font-bold text-white">
                  {i.discount}
                </button>
              )}

              {i.kind === "knew" && (
                <button className="absolute top-4 left-4 w-14 h-6 border border-green-500 bg-green-500 rounded font-bold text-white">
                    {i.kind}
                </button>
                )
              }

              <div className="mt-6">
                <h3 className="text-xl mb-2">{i.name}</h3>
                <p className="font-bold text-lg text-red-500">{i.price}</p>
              </div>
            </div>
          );
        })}

      </div>
    </div>
    </div>
  );
}
