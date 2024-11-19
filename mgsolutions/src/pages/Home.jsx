import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBoltLightning } from "react-icons/fa6";
import { IoHomeSharp } from "react-icons/io5";
import { MdPhonelink } from "react-icons/md";
import img1 from '../assets/img_A95ChxH1_0.jpeg';
import img2 from '../assets/img2-eletricidade.jpeg';

function Home() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const images = [img1, img2];

    // Função para ir para a próxima imagem
    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    };

    // Função para voltar para a imagem anterior
    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + images.length) % images.length);
    };

    // Efeito para avançar o slide automaticamente a cada 3 segundos
    useEffect(() => {
        const interval = setInterval(nextSlide, 4000); // Avançar a cada 3000ms (3 segundos)

        // Limpar o intervalo quando o componente for desmontado
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div className="flex h-full w-auto m-20">

                {/* Coluna da esquerda com links */}
                <div className="w-2/5 bg-white shadow- rounded-lg p-6 mr-4 ">
                    <h1 className="text-3xl mb-3">Olá,</h1>
                    <h2 className="text-4xl font-serif mb-12">Em que podemos ajudar hoje?</h2>

                    <ul className="pl-1 space-y-10">
                        <li className="text-xl flex items-center">
                            <MdPhonelink className="mr-5" />
                            <Link to="/telecomunicacoes" className="text-black border-b border-gray-600">
                                Telecomunicações
                            </Link>
                        </li>
                        <li className="text-xl flex items-center">
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

                {/* Carrossel de imagens */}
                <div className="relative w-3/5 rounded-lg p-6 ">
                    <div className=" h-96 overflow-hidden ">
                        {/* Item 1 */}
                        <div className={`transition-all duration-700 ease-in-out ${currentSlide === 0 ? 'block' : 'hidden'}`}>
                            <img src={img1} className="w-full h-full object-cover" alt="Imagem 1" />
                        </div>
                        {/* Item 2 */}
                        <div className={`transition-all duration-700 ease-in-out ${currentSlide === 1 ? 'block' : 'hidden'}`}>
                            <img src={img2} className="w-full h-full object-cover" alt="Imagem 2" />
                        </div>
                    </div>

                    {/* Indicadores do carrossel */}
                    <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                        <button onClick={() => setCurrentSlide(0)} className={`w-3 h-3 rounded-full ${currentSlide === 0 ? 'bg-blue-500' : 'bg-gray-600'}`} aria-label="Slide 1"></button>
                        <button onClick={() => setCurrentSlide(1)} className={`w-3 h-3 rounded-full ${currentSlide === 1 ? 'bg-blue-500' : 'bg-gray-600'}`} aria-label="Slide 2"></button>
                    </div>

                    {/* Controles de navegação */}
                    <button onClick={prevSlide} type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none">
                        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
                            </svg>
                            <span className="sr-only">Previous</span>
                        </span>
                    </button>
                    <button onClick={nextSlide} type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none">
                        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                            </svg>
                            <span className="sr-only">Next</span>
                        </span>
                    </button>
                </div>
            </div>
        </>
    );
}

export default Home;
