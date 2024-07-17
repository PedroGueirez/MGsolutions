import React, { useState } from "react";
import { TfiClose } from "react-icons/tfi";
import { TfiAlignRight } from "react-icons/tfi";

function Navbar(){

    const [toggle, setToggle] = useState(false);

    function openMenu(){
        setToggle(true);
    }

    function closeMenu(){
        setToggle(false);
    }

    return(
        <>
        <div className="flex items-center justify-between p-8 md:flex-row">
            <div>
                <a href="#" className="text-white font-mono text-3xl ml-2 flex items-center ">
                MGsolutions </a>
                </div>
            <div className="space-x-10">
             <div className="ssm:hidden md:block space-x-1">
                <a href="#" className="text-white hover:bg-sky-700 rounded-full px-3 py-2 text-xl">Telecomunicações</a>
                <a href="#" className="text-white hover:bg-sky-700 rounded-full px-3 py-2 text-xl">Eletricidade</a>
                <a href="#" className="text-white hover:bg-sky-700 rounded-full px-3 py-2 text-xl">Inteligentes</a>
                <a href="#" className="text-white hover:bg-sky-700 rounded-full px-3 py-2 text-xl">Contact</a>
             </div>
             <div className="ssm:block md:hidden">
                {toggle ? (
                       <TfiClose onClick={closeMenu} size={30} className="text-white cursor-pointer" />
                ):(   <TfiAlignRight onClick={openMenu} size={30} className="text-white cursor-pointer" />)}
             
             </div>
            </div>    
        </div>

        <div className="ssm:block md:hidden">
            {toggle ? (
                <div className="flex justify-between ml-10 my-10 pb-10 ">
               <ul className="border-r-2 border-gray-700 pr-10  ">
                    <li className="text-white text-xl mb-5 border-b border-grat-700 pb-1 hover:bg-sky-700  ">Telecomunicações</li>
                    <li className="text-white text-xl mb-5 border-b border-grat-700 pb-1 hover:bg-sky-700 ">Eletricidade</li>
                    <li className="text-white text-xl mb-5 border-b border-grat-700 pb-1 hover:bg-sky-700 ">Inteligentes</li>
                    <li className="text-white text-xl mb-5 border-b border-grat-700 pb-1 hover:bg-sky-700 ">Contacto</li>
               </ul>
            </div>
            ):(
                <div></div>

            )}
            
        </div>
       </>
    )
}

export default Navbar;