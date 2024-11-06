import React, {useState} from "react";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";


function Footer(){

    return (
        
        <div className=" bg-slate-950 p-8 grid md:grid-cols-3 gap-8 text-white p pb-8">
            <div>
                <h1 className=" w-full text-3xl font-mono ml-2">MGsolutions</h1>
                <p className="py-4 ml-2">Um sitio onde todas as necessidades podem ser satisfeitas</p>
                <div className=" ml-2 flex justify-between sm: w-[70%] my-4 "> 
                     <FaFacebookSquare size={25}/>
                     <FaInstagram size={25}/>
                     <FaWhatsapp size={25}/>
                     <FaTelegram size={25}/>
                </div>
            </div>
            
            <div className="md:col-span-2 flex justify-between">
                <div>
                    <h6 className="py-1 font-mono text-xl text-gray-400 ">Serviços</h6>
                    <ul>
                        <li className="py-2 text-sm">Telecomunicações</li>
                        <li className="py-2 text-sm">Energia e Eletricidade</li>
                        <li className="py-2 text-sm">Sistemas de Alarmes e Segurança</li>
                        <li className="py-2 text-sm">Casas Inteligentes</li>
                        <li className="py-2 text-sm">Planos e Pacotes</li>
                        <li className="py-2 text-sm">Instalações e Manuntenções</li>
                    </ul>
                </div>
                <div>
                    <h6 className="py-1 font-mono text-xl text-gray-400">Suporte ao Cliente</h6>
                    <ul>
                        <li className="py-2 text-sm">Central de Atendimento</li>
                        <li className="py-2 text-sm">Perguntas Frequentes (FAQ)</li>
                        <li className="py-2 text-sm">Politicas de Privacidade</li>
                        <li className="py-2 text-sm">Garantias e Reembolsos</li>
                    </ul>
                </div>

                <div>
                    <h6 className="py-1 font-mono text-xl text-gray-400">Institucional</h6>
                    <ul>
                        <li className="py-2 text-sm">Sobre Nós</li>
                        <li className="py-2 text-sm">Nossa Missão e Visão</li>
                        <li className="py-2 text-sm">Equipa</li>
                        <li className="py-2 text-sm">Parceiros</li>
                    </ul>
                </div>

                <div>
                    <h6 className="py-1 font-mono text-xl text-gray-400">Legal</h6>
                    <ul>
                        <li className="py-2 text-sm">Contratos e Termos de Serviços</li>
                        <li className="py-2 text-sm">Politica de Cookies</li>
                        <li className="py-2 text-sm">Direitos do Consumidor</li>
                        <li className="py-2 text-sm">Regulamentos e Certificações</li>
                    </ul>
                </div>

            </div>
        </div>
        
        
        

    )
}

export default Footer;