import React from "react";
import "./ProjetosOusados.css";

const ProjetosOusados = () => (
  <div className="projetos-ousados-container">
    <div className="imagem-ousada">
      <img
        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
        alt="Projeto ousado"
      />
    </div>
    <div className="quadros-ousados">
      <div className="quadro-azul">
        {/* Conteúdo do quadro azul */}
      </div>
      <div className="quadro-branco">
        <span>
          Fazemos seus projetos mais ousados se tornarem realidade
        </span>
      </div>
    </div>
  </div>
);

export default ProjetosOusados;