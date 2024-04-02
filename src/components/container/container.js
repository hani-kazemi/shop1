import React, { useState } from "react";
import axios from "axios";


export default function Container() {
  const data = [
    {
      id: 1,
      name: "HAVIT HV-G92 gamepad",
      price: "160$",
      score: 5,
      image: "../pics/nav/game.png",
      discount: "-40%",
    },
    {
      id: 2,
      name: "AK-900Wired keyboared",
      price: "1160$",
      score: 4,
      image: "../pics/nav/keyboared.png",
      discount: "-35%",
    },
    {
      id: 3,
      name: "IPs lCD Gaming monitor",
      price: "370$",
      score: 5,
      image: "../pics/nav/tv.png",
      discount: "-30%",
    },
    {
      id: 4,
      name: "S-serios Comfort Chair",
      price: "400$",
      score: 3,
      image: "../pics/nav/chair.png",
      discount: "-25%",
    },
  ];

  const Data2 = [
    {id:1 , name:"The north coat" , price:"260$" , score:65 , image:"../pics/content/coat.png"},
    {id:2 , name:"Gucci duffle bag" , price:"960$" , score:65, image:"../pics/content/bag.png"},
    {id:3 , name:"RGB liquid CPU cooler" , price:"160$" , score:65, image:"../pics/content/cpu cooler.png"},
    {id:4 , name:"Small BookSelf" , price:"360$" , score:65, image:"../pics/content/book.png"},
  ];

  const Data3 =[
    {id:1, name:"Breed Dry Dog Food" , price:"$100" , score:35 , image:"../pics/content/Dog food.png" ,kind:""},
    {id:2, name:"canon EOS DSLR camera" , price:"$360" , score:95 , image:"../pics/content/camera.png" ,kind: ""},
    {id:3, name:"asus FHD Gamin laptop" , price:"$700" , score:325 , image:"../pics/content/lap top.png" , kind: ""},
    {id:4, name:"curology product set" , price:"$500" , score:145 , image:"../pics/content/coat.png", kind:""},
    {id:5, name:"Kid Electronic car" , price:"$960" , score:65 , image:"../pics/content/car.png" , kind:"knew"},
    {id:6, name:"jr.Zoom Soccer Cleats" , price:"$1160" , score:35 , image:"../pics/content/shoes.png", kind:""},
    {id:7, name:"GP11 Shooter USB Gamepad" , price:"$660" , score:55 , image:"../pics/content/gamepad.png", kind:"knew"},
    {id:8, name:"ًQuitted satin Jacket" , price:"$660" , score:55 , image:"../pics/content/jacket.png" , kind: ""},
  ];
  // const [Name, setName] = useState([])

  // const getData = async() => {
  //   await axios.get(
  //     ""
  //   )
  //   .then((res) => {
  //     console.log(res)
  //     setName(res.data);
  //   })
  // }

  return (
    <div className="m-8">
      <div className="text-red-600 ml-28 mt-10 pt-10 font-bold flex flex-row gap-2">
        <div className="w-5 h-8 bg-red-600 rounded"></div>
        <p>today's</p>
      </div>

      <div className="flex flex-row gap-5 ml-24 mr-6 font-bold text-2xl p-5 justify-between items-center">
        <p>Flash sales</p>
        <div className="flex flex-row gap-4 -ml-96">
          <div className="flex flex-col">
            <p className="text-sm font-thin">days</p>
            <p>03 :</p>
          </div>
          <div className="flex flex-col">
          <p className="text-sm font-thin">hours</p>
          <p>23 :</p>
          </div>
          <div className="flex flex-col">
          <p className="text-sm font-thin">minuts</p>
            <p>19 :</p>
          </div>
          <div className="flex flex-col">
          <p className="text-sm font-thin">seconde</p>
            <p>56</p>
          </div>
        </div>
        <div className="flex flex-row gap-1 mr-20">
              <img className="bg-gray-300 rounded-full p-1" src="../pics/nav/bx-left-arrow-alt.svg"/>
              <img className="bg-gray-300 rounded-full p-1"  src="../pics/nav/bx-right-arrow-alt.svg"/>
            </div>
      </div>

      <div className="flex flex-row gap-5 justify-center">
        {data.map((i) => {
          return (
            <div className="m-8">
              <div className="flex relative">
                <img className="bg-gray-200 p-10 w-60 h-44" src={i.image} />
                <button className="absolute  top-2  left-2 border-2 w-10 border-red-600 rounded bg-red-600 text-white text-xs">
                  {i.discount}
                </button>
              </div>

              <h1 className="pt-5 m-1">{i.name}</h1>
              <p className="font-bold text-red-600 m-1">{i.price}</p>
              <div className="flex text-yellow-400">
                {Array.from({ length: i.score }).map((_, index) => (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z"></path>
                  </svg>
                ))}
                {Array.from({ length: 5 - i.score }).map((_, index) => (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="m6.516 14.323-1.49 6.452a.998.998 0 0 0 1.529 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082a1 1 0 0 0-.59-1.74l-5.701-.454-2.467-5.461a.998.998 0 0 0-1.822 0L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.214 4.107zm2.853-4.326a.998.998 0 0 0 .832-.586L12 5.43l1.799 3.981a.998.998 0 0 0 .832.586l3.972.315-3.271 2.944c-.284.256-.397.65-.293 1.018l1.253 4.385-3.736-2.491a.995.995 0 0 0-1.109 0l-3.904 2.603 1.05-4.546a1 1 0 0 0-.276-.94l-3.038-2.962 4.09-.326z"></path>
                  </svg>
                ))}
              </div>
            </div>
          );
        })}
      </div>
      <div className="w-full text-center m-5">
        <button className="p-2 w-48 border-red-600 rounded bg-red-600 text-white h-12 ">View All Products</button>
      </div>
      <div className="border-2 border-gray-300 m-14"></div>

      <div>
        <div className="text-red-600 ml-28 mt-10 pt-10 font-bold flex flex-row gap-2">
          <div className="w-5 h-8 bg-red-600 rounded"></div>
          <p>Categories</p>
        </div>
        <div className="font-bold text-left text-lg m-8 ml-28 flex flex-row justify-between mb-12">
            <p>Browse By Category </p>
            <div className="flex flex-row gap-1 mr-20">
              <img className="bg-gray-300 rounded-full p-1" src="../pics/nav/bx-left-arrow-alt.svg"/>
              <img className="bg-gray-300 rounded-full p-1"  src="../pics/nav/bx-right-arrow-alt.svg"/>
            </div>
        </div>
        <div className="flex flex-row gap-14 justify-center">
          <div className="border-2 w-40 h-36 border-gray-300 cursor-pointer rounded relative  hover:bg-red-500">
            <div className="absolute top-10 left-14">
              <img className="w-12 h-12" src="../pics/nav/bx-mobile-alt.svg"/>
              <p className="text-sm">phones</p>
            </div>
          </div>
          <div className="border-2 w-40 h-36 border-gray-300 rounded relative cursor-pointer hover:bg-red-500 ">
            <div className="absolute top-10 left-14">
              <img className="w-12 h-12" src="../pics/nav/bx-laptop.svg"/>
              <p className="text-sm">computer</p>
            </div>
          </div>
          <div className="border-2 w-40 h-36 border-gray-300 rounded relative cursor-pointer hover:bg-red-500 ">
            <div className="absolute top-10 left-14">
              <img className="w-12 h-12" src="../pics/nav/bxs-watch-alt.svg"/>
              <p className="text-sm">smart watch</p>
            </div>
          </div>
          <div className=" border-2 w-40 h-36 border-gray-300 rounded cursor-pointer relative hover:bg-red-500">
            <div className="absolute top-10 left-14">
              <img className="w-12 h-12" src="../pics/nav/bx-camera.svg"/>
              <p className="text-sm">camera</p>
            </div>
          </div>
          <div className="border-2 w-40 h-36 border-gray-300 rounded relative cursor-pointer hover:bg-red-500 ">
            <div className="absolute top-10 left-14">
              <img className="h-12 w-12" src="../pics/nav/bx-headphone.svg"/>
              <p className="text-sm">Headephone</p>
            </div>
          </div>
          <div className="border-2 w-40 h-36 border-gray-300 rounded relative cursor-pointer hover:bg-red-500 ">
            <div className="absolute top-10 left-14">
              <img className="w-12 h-12" src="../pics/nav/bx-game.svg"/>
              <p className="text-sm">gaming</p>
            </div>
          </div>
        
        </div>
        <div className="border-2 border-gray-300 m-14"></div>
        
        <div>
          <div className="text-red-600 ml-28 mt-10 pt-10 font-bold flex flex-row gap-2">
            <div className="w-5 h-8 bg-red-600 rounded"></div>
            <p>Categories</p>
          </div>

          <div className="text-left text-lg m-8 ml-28 flex flex-row justify-between mb-12">
            <p className="font-bold text-xl">Best selling products </p>
            <button className="border-red-600 bg-red-600 text-white w-32 h-10 rounded mr-20">view All</button>
          </div>

          <div className="flex flex-row gap-6 w-full justify-center">
            {Data2.map((i) => {
              return(
                <div className="m-8">
                  <div className="relative">
                    <img className="bg-gray-200 p-10 w-60 h-44" src={i.image}/>
                    <div className="absolute top-4 right-4 px-1 bg-white rounded-full"><img className="w-4 h-6" src="../pics/nav/heart.svg"/></div>
                    <h4 className="mt-5 text-lg">{i.name}</h4>
                    <p className="font-bold text-red-600">{i.price}</p>
                  </div>
                  
                </div>
              )
            })}
          </div>
          <div className="flex justify-center mt-20" >
            <img src="../pics/content/wall paper.png"/>
          </div>
        </div>

        <div className="text-red-600 ml-28 mt-10 pt-10 font-bold flex flex-row gap-2">
          <div className="w-5 h-8 bg-red-600 rounded"></div>
          <p>Our products</p>
        </div>
        <div className="font-bold text-left text-lg m-8 ml-28 flex flex-row justify-between mb-12">
            <p className="text-2xl">Explore Our Products </p>
            <div className="flex flex-row gap-1 mr-20">
              <img className="bg-gray-300 rounded-full p-1" src="../pics/nav/bx-left-arrow-alt.svg"/>
              <img className="bg-gray-300 rounded-full p-1"  src="../pics/nav/bx-right-arrow-alt.svg"/>
            </div>
        </div>

        <div className="flex flex-row justify-center gap-5">
          <div className="grid grid-cols-4">
          {Data3.map((i) => {
            return(
              <div className="m-8 relative">
                <div className="bg-gray-200 w-60 h-52 flex justify-center p-8">
                  <img src={i.image}/>
                  {
                    i.kind &&  <button className="absolute left-5 top-3 border-green-500 border-2 bg-green-500 rounded text-white">{i.kind}</button>
                  }
                 
                </div>
                <div className="bg-white absolute top-4 right-4 rounded-full px-1"><img className="w-4 h-6" src="../pics/nav/heart.svg"/></div>
                <div>
                  <h4 className="mt-5 text-start text-lg">{i.name}</h4>
                  <p className="text-red-600 font-bold mt-2">{i.price}</p>
                </div>
              </div>
            )
          
          })} 
          </div>
          
        </div>
        <div className="flex justify-center"><button className="m-8 border-2 border-red-600 bg-red-600 w-48 h-12 text-white rounded">View All Products</button></div>

        <div className="text-red-600 ml-28 mt-10 pt-10 font-bold flex flex-row gap-2">
          <div className="w-5 h-8 bg-red-600 rounded"></div>
          <p>Featured</p>
        </div>
        <div className="font-bold text-left m-8 ml-28 flex flex-row justify-between mb-12 text-2xl">
            <p>New Arrival</p>
        </div>

        <div className="flex flex-row justify-center gap-20">
            <div>
              <img src="../pics/content/playstation.png"/>
            </div>
            <div>
              <div className="mb-8">
                <img src="../pics/content/woman.png"/>
              </div>
              <div className="flex flex-row gap-8">
                <img src="../pics/content/speaker.png"/>
                <img src="../pics/content/perfum.png"/>
              </div>
            </div>
        </div>

        <div className="flex flex-row gap-48 justify-center my-28">

          <div className="flex flex-col gap-7">
            <div className=" bg-gray-400 w-20 h-20 rounded-full p-3"><img className="bg-black w-14 h-14 p-3 rounded-full" src="../pics/content/icon-delivery.svg"/></div>
            <div>
              <h4 className="font-bold -ml-16">FREE AND FAST DELIVERY</h4>
              <p className="text-xs -ml-16">Free delivery for all orders over $140</p>
            </div>
          </div>

          <div className="flex flex-col gap-7" >
            <div className="bg-gray-400 w-20 h-20 rounded-full p-3" ><img className="bg-black w-14 h-14 p-3 rounded-full" src="../pics/content/Icon-Customer service.svg"/></div>
            <div>
              <h4 className="font-bold -ml-16">24/7 CUSTOMER SERVISE</h4>
              <p className="text-xs -ml-16">Friendly 24/7 Customer support</p>
            </div>
          </div>

          <div className="flex flex-col gap-7">
            <div className="bg-gray-400 w-20 h-20 rounded-full p-3" ><img className="bg-black w-14 h-14 p-3 rounded-full" src="../pics/content/Icon-secure.svg"/></div>
            <div>
              <h4 className="font-bold -ml-16">MONEY BACK GUARANTEE</h4>
              <p className="text-xs -ml-16">we reurn money within 30 days</p>
            </div>
          </div>
          
        </div>
        <div className="flex flex-row justify-end mr-10">
            <img className="bg-gray-300 rounded-full p-1 rotate-90"  src="../pics/nav/bx-left-arrow-alt.svg"/>
        </div>
      </div>

    </div>
  );
}
