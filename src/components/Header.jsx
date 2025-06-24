import React from "react";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Vídeo de fundo */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/video/closet.mp4" // coloque seu vídeo na pasta public
        autoPlay
        loop
        muted
      />
      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40"></div>
      {/* Navbar */}
      <Navbar />
      {/* Conteúdo central */}
      <div className="relative z-10 flex flex-col items-start justify-center h-full px-8">
        <h1 className="text-white text-4xl md:text-6xl font-serif font-semibold mb-6 mt-24">
          SOLUÇÕES EM <br />ILUMINAÇÕES
        </h1>
        <p className="text-white text-base md:text-xl max-w-xl">
          Bem Vindo(a) ao Força Carioca, seja criativo conosco. <br />Desenhe seu projeto do zero.
        </p>
      </div>
    </div>
  );
}