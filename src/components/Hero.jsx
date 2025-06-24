import React, { useState } from "react";

export default function Hero() {
  const [open, setOpen] = useState(false);

  return (
    <div>
        <div className="relative h-screen w-full overflow-hidden">
            {/* Vídeo de fundo */}
           
            {/* Overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40"></div>
            {/* Conteúdo central */}
            {/* <div className="relative z-10 flex flex-col items-start justify-center h-full px-8">
            <h1 className="text-white text-5xl md:text-6xl font-serif font-semibold mb-6 mt-24">
                <br />
            </h1>
            <p className="text-white text-lg md:text-xl max-w-xl">
                
            </p>
            </div> */}
        </div>
    </div>
  );
}