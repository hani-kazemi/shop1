import React from "react";

export default function About() {

  const Data4=[
    {id:1 ,name:"Tom cruise" , job:"founder & chaireman", image:"../pics/about/tom.png"},
    {id:2 ,name:"Emma watson" , job:"managing Director", image:"../pics/about/emma.png"},
    {id:3 ,name:"Will smith" , job:"Product Desingner", image:"../pics/about/will.png"},
  ];


  return (
    <div>
      <div className="w-full h-auto m-8">
        <div className="flex flex-row gap-1 text-gray-300 mx-40 mt-16">
          <p className="hover:text-black cursor-pointer">Home</p>
          <span>/</span>
          <p className="hover:text-black cursor-pointer">About</p>
        </div>

        <div className="flex flex-row justify-between">
          <div className="w-[33%] ml-40">
            <h2 className="text-4xl font-medium mt-32 mb-8 text-justify">
              Our Story
            </h2>
            <p>
              Launced in 2015, Exclusive is South Asia’s premier online shopping
              makterplace with an active presense in Bangladesh. Supported by
              wide range of tailored marketing, data and service solutions,
              Exclusive has 10,500 sallers and 300 brands and serves 3 millioons
              customers across the region.
            </p>
            <p>
              Exclusive has more than 1 Million products to offer, growing at a
              very fast. Exclusive offers a diverse assotment in categories
              ranging from consumer.
            </p>
          </div>
          <img src="../pics/about/Side Image.png" />
        </div>

        <div className="flex flex-row justify-center gap-28 mt-28">
          <div className="border-2 flex flex-col gap-2 justify-center items-center border-gray-300 w-72 h-64 rounded ">
            <div className="w-20 h-20 bg-gray-300 rounded-full flex justify-center items-center">
              <div className="bg-black w-14 h-14 rounded-full p-3">
                <img src="../pics/about/Group.svg" />
              </div>
            </div>
                <span className="font-bold text-3xl">
                    10.5K
                </span>
                <span className="text-sm">sallers active our site</span>
            </div>

          <div className="border-2 flex flex-col gap-2 justify-center items-center border-gray-300 w-72 h-64 rounded bg-red-500">
            <div className="w-20 h-20 bg-gray-300 rounded-full flex justify-center items-center">
              <div className="bg-white w-14 h-14 rounded-full p-3">
                <img src="../pics/about/Icon-Sale.svg" />
              </div>
            </div>
              <span className="font-bold text-3xl text-white">
                  33K
              </span>
              <span className="text-sm text-white">mopnthy products sale</span>
          </div>
          
          <div className="border-2 border-gray-300 w-72 h-64 rounded flex flex-col gap-2 justify-center items-center">
            <div className="w-20 h-20 bg-gray-300 rounded-full flex justify-center items-center">
              <div className="bg-black w-14 h-14 rounded-full p-3 flex justify-center items-center">
                <img src="../pics/about/Vector.svg" />
              </div>
            </div>
            <span className="font-bold text-3xl text-black">
                    45.5K
                </span>
                <span className="text-sm text-black">customers active in our site</span>
          </div>

          <div className="border-2 border-gray-300 w-72 h-64 rounded gap-2 flex flex-col items-center justify-center">
            <div className="bg-gray-300 w-20 h-20 rounded-full flex justify-center items-center ">
              <div className="w-14 h-14 bg-black rounded-full p-3 ">
                <img src="../pics/about/Group (1).svg"/>
              </div>
            </div>
            <span className="font-bold text-3xl text-black">
                    25K
                </span>
                <span className="text-sm text-black">Anual gross sale in our site</span>
          </div>
        </div>

        <div className="flex flex-row justify-around m-64">
          {Data4.map((i) => {
            return(
              <div className="m-8">
                <div className="w-80 h-96 flex bg-gray-200 justify-center pt-5">
                  <img src={i.image}/>
                </div>

                <div>
                  <h3 className="text-4xl font-bold mt-8">{i.name}</h3>
                  <p className="text-xl">{i.job}</p>
                </div>
              </div>
            )
          })}
        </div>

       <div>
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
       </div>
      </div>
    </div>
  );
}
