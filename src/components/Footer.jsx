import React from "react";
import { FaInstagram, FaWhatsapp, FaFacebookF } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer w-full py-8 bg-[#045E8A] text-white flex flex-col items-center">
      <div className="text-center text-sm">
        © {new Date().getFullYear()} Força Carioca. Todos os direitos reservados.
      </div>
      <div className="mt-2 text-xs opacity-80 flex gap-4">
        <a
          href="https://www.instagram.com/fcariocailuminacao"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram size={20} className="text-white hover:text-orange-400 transition" />
        </a>
        <a
          href="https://wa.me/+552122414556"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
        >
          <FaWhatsapp size={20} className="text-white hover:text-orange-400 transition" />
        </a>
        <a
          href="https://www.facebook.com/fcariocailuminacao"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <FaFacebookF size={20} className="text-white hover:text-orange-400 transition" />
        </a>
      </div>

      <div className="text-xs text-right opacity-80 pt-2">
        <a
          href="https://wa.me/5512991526876"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-orange-400 transition"
        >
          Desenvolvido por Ingrid Caroline
        </a>
      </div>
    </footer>
  );
}