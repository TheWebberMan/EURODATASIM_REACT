'use client'

import { useState } from "react";

export default function Home() {

  /*const modal = document.querySelector('#modal');
        const openModal = document.querySelector('.open-modal');
        const closeModal = document.querySelector('.close-modal');

        openModal.addEventListener('click', () => {
          modal.showModal(); })

          closeModal.addEventListener('click', () => {
            modal.close(); }) */

            const [modal, setModal] = useState(false);

          

            console.log(modal)


  return (
    <main className="min-h-screen flex flex-col flex-wrap overflow-hidden max-w-[1800px] m-auto">
      <section className="section1 flex justify-end flex-wrap items-center bg-[#FFFFFF] sm:h-[35em] w-full relative sm:mb-0 mb-10">
        <img src="https://i.ibb.co/s2TdyfZ/eurodatasim-Iphone-Blackcropped.png" alt="Iphone Black" className="h-[500px] w-fit absolute left-0 top-28 z-10 -translate-x-32 hidden sm:block"/> 
      <div className="flex flex-col gap-7 justify-end lg:mr-32 sm:p-5">
        <h1 className="sm:text-[55px] text-[50px] max-w-[90%] sm:m-0 m-auto">Welcome to EURODATASIM</h1>
        <p className="sm:max-w-[45em] max-w-[90%] m-auto">Your gateway to seamless connectivity. We specialize in cutting-edge eSIM cards, revolutionizing how you stay connected globally.
                                    With EURODATASIM, embrace the freedom of traveling without borders, effortlessly switching between carriers and data plans, all within a single device.
                                    Whether you're a frequent traveler, digital nomad, or simply seeking hassle-free connectivity, our eSIM solutions cater to your needs. Say goodbye to physical SIM cards and hello to unparalleled convenience.
                                    Explore our range of eSIM cards today and unlock a world of limitless possibilities with EURODATASIM.
          </p>
      </div>
      </section>
      <section className="section2 flex flex-wrap justify-center bg-[#E9E9E9] sm:h-auto w-full relative">
      <div className="flex flex-col gap-7 justify-center p-5 sm:p-0 text-center ">
        <h2 className=" m-auto">We <span className="sm:text-[65px] sm:font-light font-medium">revolutionize</span> the business</h2>
        <p className="sm:max-w-[45em] max-w-[90%] m-auto">We revolutionize the business with EURODATASIM eSIM cards. Unlike traditional SIM cards, our eSIM technology eliminates the need for physical cards, offering unparalleled convenience.
        Say goodbye to swapping cards or being tied to a single carrier. With EURODATASIM, enjoy seamless global connectivity, effortlessly switch between networks, and manage multiple numbers on a single device.
        Experience the freedom of travel without borders and the flexibility to choose the best data plans anywhere, anytime.
        EURODATASIM eSIM cards: the smart choice for modern connectivity, empowering your digital lifestyle.
          </p>
      </div>

<div className="flex w-full justify-center gap-10 flex-wrap my-14">
  
  <div className=" bg-white w-[378px] h-[730px] flex flex-col gap-4 p-8 rounded-lg items-center">

   <div className="text-center">
    <div className="bg-slate-500 rounded-[16px] w-fit m-auto text-center py-1 px-5 ">
     <p className="text-white font-bold text-[16px]">100 Mb before <span className="block font-light text-[14px]">more speed, same price</span></p>
    </div>
    <h2 className=" m-auto font-extrabold text-[40px] mt-2">300 Megabit</h2>
   </div>
<div>
   <div className="grid grid-cols-2 grid-rows-2 gap-x-1 max-h-[70px]">
    <p className="text-right col-span-1 row-span-2 text-[50px] font-extrabold">29</p>
    <p className="max-h-[20px] mt-4 font-extrabold">'00</p>
    <p className="max-h-[25px] font-extrabold">€/month</p>
   </div>
   <p className="-translate-y-[10px]">Without permanency</p>
   </div>

   <div className="w-[250px] min-h-[48px] h-[48px] text-center bg-slate-500 rounded-md flex items-center justify-center">
    <p className="text-white font-medium">View plan</p>
   </div>

   <div className="flex flex-col gap-5">
    <div className="flex gap-4">
      <img className="h-[40px]" src="https://i.ibb.co/mFCNmVN/2876882.png" alt="" />
      <p className="w-fit font-bold">300 MB optic fiber <span className="block font-normal">Symmetrical</span></p>
    </div>

    <div className="flex gap-4">
      <img className="h-[40px]" src="https://i.ibb.co/hZkSnJb/purepng-com-black-phonephoneconversationwire-communicationtelephonecablestransmissionblack-142152658.png" alt="" />
      <p className="w-fit font-bold">Landline Telephony <span className="block font-normal">with calls for 2,4 cent/min</span></p>
    </div>

    <div className="flex gap-4">
      <img className="h-[40px]" src="https://i.ibb.co/6HfbS6X/House-4.png" alt="" />
       <div className="flex flex-col">
        <p className="w-fit font-bold">Registration + Installation</p>
        <div className="bg-[#ccf1d2] w-fit py-[3px] px-[6px] rounded-lg font-bold text-[#1dae3a]">Offer</div>
        <p className="font-bold">Free <span className="font-normal line-through text-[#aaa]">150€</span></p>
       </div>
    </div>

    <div className="w-[130px] h-[1px] bg-[#aaa] m-auto mt-5"></div>
   <div className="text-center">
    <p className=" text-[#aaa] font-medium">Do you want mobile phone?</p>
    <a href=""><p className=" font-bold text-[#11abc2]">Configure your plan and saves</p></a>
   </div>
  </div>
   
 </div>
 
 <div className=" bg-white w-[378px] h-[730px] flex flex-col gap-4 p-8 rounded-lg items-center">

   <div className="text-center">
    <div className="bg-slate-500 rounded-[16px] w-fit m-auto text-center py-1 px-5 ">
     <p className="text-white font-bold text-[16px]">100 Mb before <span className="block font-light text-[14px]">more speed, same price</span></p>
    </div>
    <h2 className=" m-auto font-extrabold text-[40px] mt-2">300 Megabit</h2>
   </div>
<div>
   <div className="grid grid-cols-2 grid-rows-2 gap-x-1 max-h-[70px]">
    <p className="text-right col-span-1 row-span-2 text-[50px] font-extrabold">29</p>
    <p className="max-h-[20px] mt-4 font-extrabold">'00</p>
    <p className="max-h-[25px] font-extrabold">€/month</p>
   </div>
   <p className="-translate-y-[10px]">Without permanency</p>
   </div>

   <div className="w-[250px] min-h-[48px] h-[48px] text-center bg-slate-500 rounded-md flex items-center justify-center">
    <p className="text-white font-medium">View plan</p>
   </div>

   <div className="flex flex-col gap-5">
    <div className="flex gap-4">
      <img className="h-[40px]" src="https://i.ibb.co/mFCNmVN/2876882.png" alt="" />
      <p className="w-fit font-bold">300 MB optic fiber <span className="block font-normal">Symmetrical</span></p>
    </div>

    <div className="flex gap-4">
      <img className="h-[40px]" src="https://i.ibb.co/hZkSnJb/purepng-com-black-phonephoneconversationwire-communicationtelephonecablestransmissionblack-142152658.png" alt="" />
      <p className="w-fit font-bold">Landline Telephony <span className="block font-normal">with calls for 2,4 cent/min</span></p>
    </div>

    <div className="flex gap-4">
      <img className="h-[40px]" src="https://i.ibb.co/6HfbS6X/House-4.png" alt="" />
       <div className="flex flex-col">
        <p className="w-fit font-bold">Registration + Installation</p>
        <div className="bg-[#ccf1d2] w-fit py-[3px] px-[6px] rounded-lg font-bold text-[#1dae3a]">Offer</div>
        <p className="font-bold">Free <span className="font-normal line-through text-[#aaa]">150€</span></p>
       </div>
    </div>

    <div className="w-[130px] h-[1px] bg-[#aaa] m-auto mt-5"></div>
   <div className="text-center">
    <p className=" text-[#aaa] font-medium">Do you want mobile phone?</p>
    <a href=""><p className=" font-bold text-[#11abc2]">Configure your plan and saves</p></a>
   </div>
  </div>
   
 </div>

 <div className=" bg-white w-[378px] h-[730px] flex flex-col gap-4 p-8 rounded-lg items-center">

   <div className="text-center">
    <div className="bg-slate-500 rounded-[16px] w-fit m-auto text-center py-1 px-5 ">
     <p className="text-white font-bold text-[16px]">100 Mb before <span className="block font-light text-[14px]">more speed, same price</span></p>
    </div>
    <h2 className=" m-auto font-extrabold text-[40px] mt-2">300 Megabit</h2>
   </div>
  <div>
   <div className="grid grid-cols-2 grid-rows-2 gap-x-1 max-h-[70px]">
    <p className="text-right col-span-1 row-span-2 text-[50px] font-extrabold">29</p>
    <p className="max-h-[20px] mt-4 font-extrabold">'00</p>
    <p className="max-h-[25px] font-extrabold">€/month</p>
   </div>
   <p className="-translate-y-[10px]">Without permanency</p>
   </div>

   <div className="w-[250px] min-h-[48px] h-[48px] text-center bg-slate-500 rounded-md flex items-center justify-center">
    <p className="text-white font-medium">View plan</p>
   </div>

   <div className="flex flex-col gap-5">
    <div className="flex gap-4">
      <img className="h-[40px]" src="https://i.ibb.co/mFCNmVN/2876882.png" alt="" />
      <p className="w-fit font-bold">300 MB optic fiber <span className="block font-normal">Symmetrical</span></p>
    </div>

    <div className="flex gap-4">
      <img className="h-[40px]" src="https://i.ibb.co/hZkSnJb/purepng-com-black-phonephoneconversationwire-communicationtelephonecablestransmissionblack-142152658.png" alt="" />
      <p className="w-fit font-bold">Landline Telephony <span className="block font-normal">with calls for 2,4 cent/min</span></p>
    </div>

    <div className="flex gap-4">
      <img className="h-[40px]" src="https://i.ibb.co/6HfbS6X/House-4.png" alt="" />
       <div className="flex flex-col">
        <p className="w-fit font-bold">Registration + Installation</p>
        <div className="bg-[#ccf1d2] w-fit py-[3px] px-[6px] rounded-lg font-bold text-[#1dae3a]">Offer</div>
        <p className="font-bold">Free <span className="font-normal line-through text-[#aaa]">150€</span></p>
       </div>
    </div>

    <div className="w-[130px] h-[1px] bg-[#aaa] m-auto mt-5"></div>
   <div className="text-center">
    <p className=" text-[#aaa] font-medium">Do you want mobile phone?</p>
    <a href=""><p className=" font-bold text-[#11abc2]">Configure your plan and saves</p></a>
   </div>
  </div>

 </div>


</div>

      </section>
      <section className="section2 flex flex-wrap justify-start items-center bg-gradient-to-b from-[#FBF6F5] bg-[#FDF0ED] sm:h-[35em] w-full relative">
       <img src="https://i.ibb.co/qJFgXTJ/eurodatasim-sim-card-cropped.png" alt="" className="h-[500px] w-fit absolute right-0 bottom-0 -rotate-90  hidden sm:block" />
      <div className="flex flex-col gap-7 justify-end sm:ml-32 p-5 sm:p-0">
        <h3>Experts in our services</h3>
        <p className="max-w-[45em]">Count on EURODATASIM, experts in our services, for seamless connectivity.
          Within our operating hours of 10-18 on weekdays and promptly on weekends, receive a QR code within an hour. Scan it and instantly connect your phone anywhere.
          Choose from our packages: 200GB or 400GB data, with an additional 16GB in Zone 1 countries. Say farewell to data limits and hello to limitless possibilities.
          Whether you're traveling or at home, EURODATASIM ensures you're always connected.
          Experience the ease and reliability of EURODATASIM, your ultimate solution for global connectivity.
          </p>
          
          <button onClick={() => setModal(true)} className="bg-[#E9E9E9] w-fit p-3 rounded-md text-[#939191] font-bold hover:scale-110 transition-all">What countries is zone 1?</button>

      {
        modal && (
    <div className="fixed inset-0 m-auto p-3 rounded-md w-fit h-fit z-50 border-[#E9E9E9] border bg-[#F7F7F7] bg-opacity-95">
      <h3 className="underline underline-offset-4 decoration-2 text-center">Zone 1 includes:</h3>
      <p className="font-bold mb-1 text-center">Portugal - France - Italy - Germany - United Kingdom</p>
      <p className="font-bold mb-1 text-center">Belgium - Netherlands - Luxembourg - Switzerland</p>
      <p className="font-bold mb-1 text-center">Ireland - Greece - Denmark - Sweden - Finland - Austria</p>
      <p className="font-bold text-center">Norway - Iceland - Andorra - Monaco - Liechtenstein</p>
      <div className="flex justify-center">
      <button onClick={() => setModal(false)} className="bg-[#E9E9E9] font-bold w-fit p-2 rounded-md hover:scale-110 transition-all mt-4">Close</button>
      </div>
     </div>
     
        )
      }

      

      </div>
      </section>
      <section className="section2 flex flex-wrap justify-end items-center bg-[#CACACA] sm:h-[35em] w-full relative">
      <img src="https://i.ibb.co/bJ1Lkrt/Iphone-headphones-eurodatasim.png" alt="" className="h-[500px] w-fit absolute ml-5 translate-y-24 left-0 bottom-0 -translate-x-40 hidden sm:block" />
      <div className="flex flex-col gap-7 justify-end sm:mr-32 p-5 sm:p-0">
        <h3>A safe connection - everytime</h3>
        <p className="max-w-[45em]">A safe connection - every time. EURODATASIM offers unparalleled reliability with our eSIM cards.
        Experience connectivity wherever you go, without compromising on security. Our eSIM technology ensures a stable and dependable connection, eliminating the risk of lost signals or dropped calls.
        Trust in EURODATASIM to keep you connected, whether you're traveling abroad or in your hometown. With our commitment to quality and reliability, you can rest assured that your connection is always secure.
        Say goodbye to connectivity worries and hello to peace of mind with EURODATASIM eSIM cards.
        Stay connected with confidence, wherever life takes you.
          </p>
      </div>
      </section>
      <footer className="w-full h-[5em] bg-[#FFFFFF] relative"> 
      
      <div className="w-full h-fit absolute flex justify-center bg-[#FFFFFF] bottom-0">
      <p className="">Copyright - EURODATASIM [2024] </p>
      </div>
      </footer>

      

    </main>
  );
}

