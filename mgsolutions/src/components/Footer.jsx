import React, { useState } from "react";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";

function Footer() {
  return (
    <div className=" bg-slate-950 p-8 lg:flex justify-around gap-8  text-white p pb-8">
      <div>
        <h1 className=" w-full text-3xl font-mono ml-2 ">MGsolutions</h1>
        <p className="py-4 ml-2">
          Um sitio onde todas as necessidades podem ser satisfeitas
        </p>
        <div className=" ml-2 flex justify-between sm: w-[40%] my-4 ">
          <FaFacebookSquare size={25} />
          <FaInstagram size={25} />
          <FaWhatsapp size={25} />
          <FaTelegram size={25} />
        </div>
      </div>

      <div className=" md:grid md:grid-cols-4 sm:grid gap-8 ssm:grid ssm:gap-8">
        <div >
          <h6 className="py-1 font-mono text-xl text-gray-400 ">Serviços</h6>
          <ul>
            <li className="py-2 text-sm relative  hover:after:absolute hover:after:left-0 hover:after:bottom-0 hover:after:w-full hover:after:h-[2px] hover:after:bg-slate-300">
              Telecomunicações
            </li>
            <li className="py-2 text-sm relative  hover:after:absolute hover:after:left-0 hover:after:bottom-0 hover:after:w-full hover:after:h-[2px] hover:after:bg-slate-300">
              Energia e Eletricidade
            </li>
            <li className="py-2 text-sm relative  hover:after:absolute hover:after:left-0 hover:after:bottom-0 hover:after:w-full hover:after:h-[2px] hover:after:bg-slate-300">
              Sistemas de Alarmes e Segurança
            </li>
            <li className="py-2 text-sm relative  hover:after:absolute hover:after:left-0 hover:after:bottom-0 hover:after:w-full hover:after:h-[2px] hover:after:bg-slate-300">
              Casas Inteligentes
            </li>
            <li className="py-2 text-sm relative  hover:after:absolute hover:after:left-0 hover:after:bottom-0 hover:after:w-full hover:after:h-[2px] hover:after:bg-slate-300">
              Planos e Pacotes
            </li>
            <li className="py-2 text-sm relative  hover:after:absolute hover:after:left-0 hover:after:bottom-0 hover:after:w-full hover:after:h-[2px] hover:after:bg-slate-300">
              Instalações e Manuntenções
            </li>
          </ul>
        </div>
        <div>
          <h6 className="py-1 font-mono text-xl text-gray-400">
            Suporte 
          </h6>
          <ul>
            <li className="py-2 text-sm relative  hover:after:absolute hover:after:left-0 hover:after:bottom-0 hover:after:w-full hover:after:h-[2px] hover:after:bg-slate-300">Central de Atendimento</li>
            <li className="py-2 text-sm relative  hover:after:absolute hover:after:left-0 hover:after:bottom-0 hover:after:w-full hover:after:h-[2px] hover:after:bg-slate-300">Perguntas Frequentes (FAQ)</li>
            <li className="py-2 text-sm relative  hover:after:absolute hover:after:left-0 hover:after:bottom-0 hover:after:w-full hover:after:h-[2px] hover:after:bg-slate-300">Politicas de Privacidade</li>
            <li className="py-2 text-sm relative  hover:after:absolute hover:after:left-0 hover:after:bottom-0 hover:after:w-full hover:after:h-[2px] hover:after:bg-slate-300">Garantias e Reembolsos</li>
          </ul>
        </div>

        <div>
          <h6 className="py-1 font-mono text-xl text-gray-400">
            Institucional
          </h6>
          <ul>
            <li className="py-2 text-sm relative  hover:after:absolute hover:after:left-0 hover:after:bottom-0 hover:after:w-full hover:after:h-[2px] hover:after:bg-slate-300">Sobre Nós</li>
            <li className="py-2 text-sm relative  hover:after:absolute hover:after:left-0 hover:after:bottom-0 hover:after:w-full hover:after:h-[2px] hover:after:bg-slate-300">Nossa Missão e Visão</li>
            <li className="py-2 text-sm relative  hover:after:absolute hover:after:left-0 hover:after:bottom-0 hover:after:w-full hover:after:h-[2px] hover:after:bg-slate-300">Equipa</li>
            <li className="py-2 text-sm relative  hover:after:absolute hover:after:left-0 hover:after:bottom-0 hover:after:w-full hover:after:h-[2px] hover:after:bg-slate-300">Parceiros</li>
          </ul>
        </div>

        <div>
          <h6 className="py-1 font-mono text-xl text-gray-400">Legal</h6>
          <ul>
            <li className="py-2 text-sm relative  hover:after:absolute hover:after:left-0 hover:after:bottom-0 hover:after:w-full hover:after:h-[2px] hover:after:bg-slate-300">Contratos e Termos de Serviços</li>
            <li className="py-2 text-sm relative  hover:after:absolute hover:after:left-0 hover:after:bottom-0 hover:after:w-full hover:after:h-[2px] hover:after:bg-slate-300">Politica de Cookies</li>
            <li className="py-2 text-sm relative  hover:after:absolute hover:after:left-0 hover:after:bottom-0 hover:after:w-full hover:after:h-[2px] hover:after:bg-slate-300">Direitos do Consumidor</li>
            <li className="py-2 text-sm relative  hover:after:absolute hover:after:left-0 hover:after:bottom-0 hover:after:w-full hover:after:h-[2px] hover:after:bg-slate-300">Regulamentos e Certificações</li>
          </ul>
        </div>
        
      </div>
    </div>
  );
}

export default Footer;
