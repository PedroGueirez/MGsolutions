import React from "react";
import { Link } from "react-router-dom";
import { FaBoltLightning } from "react-icons/fa6";
import { IoHomeSharp } from "react-icons/io5";
import { MdPhonelink } from "react-icons/md";
import img1 from '../assets/img_A95ChxH1_0.jpeg'


function Home() {
    return (
        <>
            <div className="flex  h-full w-full m-20  ">

                <div className="w-2/5 bg-white shadow- rounded-lg p-6 mr-4 border-2 border-blue-500 pl-10">
                    <h1 className="text-3xl  mb-3">Olá,</h1>

                    <h2 className="text-4xl font-serif  mb-12">Em que podemos ajudar hoje?</h2>

                    <ul className=" pl-1 space-y-10">
                        <li className=" text-xl  flex items-center ">
                            <MdPhonelink className="mr-5" />
                            <Link to="/telecomunicacoes" className="text-black border-b border-gray-600">
                                Telecomunicações
                            </Link>
                        </li>
                        <li className="text-xl  flex items-center ">
                            <FaBoltLightning className="mr-5" />
                            <Link to="/energia" className="text-black border-b border-gray-600">
                                Energia
                            </Link>
                        </li>
                        <li className="text-xl flex items-center">
                            <IoHomeSharp className="mr-5" />
                            <Link to="/inteligentes" className="text-black border-b border-gray-600">
                                Inteligentes
                            </Link>
                        </li>

                    </ul>
                </div>

        <div className="w-3/5 bg-white shadow-md rounded-lg p-6 border-2 border-blue-500">
             <div className="flex justify-center">
                <img 
                    src={img1} 
                    alt="Imagem Telecomunicações" 
                    className="w-full max-h-96 object-contain" // Limite de altura com object-fit
             />
    </div>
</div>

            </div>


        </>
    );
}


export default Home