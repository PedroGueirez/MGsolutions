import React, { useState } from "react";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";

function Footer() {
  return (
    <div className=" bg-slate-950 p-8 grid md:grid-cols-3 gap-8 text-white p pb-8">
      <div>
        <h1 className=" w-full text-3xl font-mono ml-2">MGsolutions</h1>
        <p className="py-4 ml-2">
          Um sitio onde todas as necessidades podem ser satisfeitas
        </p>
        <div className=" ml-2 flex justify-between sm: w-[70%] my-4 ">
          <FaFacebookSquare size={25} />
          <FaInstagram size={25} />
          <FaWhatsapp size={25} />
          <FaTelegram size={25} />
        </div>
      </div>

      <div className="md:col-span-2 flex justify-between">
        <div>
          <h6 className="py-1 font-mono text-xl text-gray-400 ">Serviços</h6>
          <ul>
            <li className="py-2 text-sm relative  hover:after:absolute hover:after:left-0 hover:after:bottom-0 hover:after:w-full hover:after:h-[4px] hover:after:bg-sky-700">
              Telecomunicações
            </li>
            <li className="py-2 text-sm relative  hover:after:absolute hover:after:left-0 hover:after:bottom-0 hover:after:w-full hover:after:h-[4px] hover:after:bg-sky-700">
              Energia e Eletricidade
            </li>
            <li className="py-2 text-sm relative  hover:after:absolute hover:after:left-0 hover:after:bottom-0 hover:after:w-full hover:after:h-[4px] hover:after:bg-sky-700">
              Sistemas de Alarmes e Segurança
            </li>
            <li className="py-2 text-sm relative  hover:after:absolute hover:after:left-0 hover:after:bottom-0 hover:after:w-full hover:after:h-[4px] hover:after:bg-sky-700">
              Casas Inteligentes
            </li>
            <li className="py-2 text-sm relative  hover:after:absolute hover:after:left-0 hover:after:bottom-0 hover:after:w-full hover:after:h-[4px] hover:after:bg-sky-700">
              Planos e Pacotes
            </li>
            <li className="py-2 text-sm relative  hover:after:absolute hover:after:left-0 hover:after:bottom-0 hover:after:w-full hover:after:h-[4px] hover:after:bg-sky-700">
              Instalações e Manuntenções
            </li>
          </ul>
        </div>
        <div>
          <h6 className="py-1 font-mono text-xl text-gray-400">
            Suporte ao Cliente
          </h6>
          <ul>
            <li className="py-2 text-sm relative  hover:after:absolute hover:after:left-0 hover:after:bottom-0 hover:after:w-full hover:after:h-[4px] hover:after:bg-slate-700">Central de Atendimento</li>
            <li className="py-2 text-sm relative  hover:after:absolute hover:after:left-0 hover:after:bottom-0 hover:after:w-full hover:after:h-[4px] hover:after:bg-slate-700">Perguntas Frequentes (FAQ)</li>
            <li className="py-2 text-sm relative  hover:after:absolute hover:after:left-0 hover:after:bottom-0 hover:after:w-full hover:after:h-[4px] hover:after:bg-sky-700">Politicas de Privacidade</li>
            <li className="py-2 text-sm relative  hover:after:absolute hover:after:left-0 hover:after:bottom-0 hover:after:w-full hover:after:h-[4px] hover:after:bg-sky-700">Garantias e Reembolsos</li>
          </ul>
        </div>

        <div>
          <h6 className="py-1 font-mono text-xl text-gray-400">
            Institucional
          </h6>
          <ul>
            <li className="py-2 text-sm relative  hover:after:absolute hover:after:left-0 hover:after:bottom-0 hover:after:w-full hover:after:h-[4px] hover:after:bg-slate-700">Sobre Nós</li>
            <li className="py-2 text-sm relative  hover:after:absolute hover:after:left-0 hover:after:bottom-0 hover:after:w-full hover:after:h-[4px] hover:after:bg-slate-700">Nossa Missão e Visão</li>
            <li className="py-2 text-sm relative  hover:after:absolute hover:after:left-0 hover:after:bottom-0 hover:after:w-full hover:after:h-[4px] hover:after:bg-slate-700">Equipa</li>
            <li className="py-2 text-sm relative  hover:after:absolute hover:after:left-0 hover:after:bottom-0 hover:after:w-full hover:after:h-[4px] hover:after:bg-slate-700">Parceiros</li>
          </ul>
        </div>

        <div>
          <h6 className="py-1 font-mono text-xl text-gray-400">Legal</h6>
          <ul>
            <li className="py-2 text-sm relative  hover:after:absolute hover:after:left-0 hover:after:bottom-0 hover:after:w-full hover:after:h-[4px] hover:after:bg-slate-700">Contratos e Termos de Serviços</li>
            <li className="py-2 text-sm relative  hover:after:absolute hover:after:left-0 hover:after:bottom-0 hover:after:w-full hover:after:h-[4px] hover:after:bg-slate-700">Politica de Cookies</li>
            <li className="py-2 text-sm relative  hover:after:absolute hover:after:left-0 hover:after:bottom-0 hover:after:w-full hover:after:h-[4px] hover:after:bg-slate-700">Direitos do Consumidor</li>
            <li className="py-2 text-sm relative  hover:after:absolute hover:after:left-0 hover:after:bottom-0 hover:after:w-full hover:after:h-[4px] hover:after:bg-slate-700">Regulamentos e Certificações</li>
          </ul>
        </div>
        
      </div>
    </div>
  );
}

export default Footer;
