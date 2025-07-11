import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Projetos.css";

const imagens = [
  {
    src: "/galeria/image17.png",
    descricao: "Projeto 1: Iluminação residencial moderna.",
  },
  {
    src: "/galeria/ape3.jpg",
    descricao: "Projeto 2: Projeto de iluminação para apartamento compacto.",
  },
  {
    src: "/galeria/br1.jpg",
    descricao: "Projeto 3: Iluminação decorativa para área externa.",
  },
  {
    src: "/galeria/easy2.jpg",
    descricao: "Projeto 4: Consultoria para iluminação eficiente.",
  },
  {
    src: "/galeria/entrada-lume.jpg",
    descricao: "Projeto 5: Projeto de iluminação para entrada principal.",
  },
  {
    src: "/galeria/mudra.jpg",
    descricao: "Projeto Mudrá: Iluminação artística em espaço cultural.",
  },
  {
    src: "/galeria/pendente.jpg",
    descricao: "Projeto 7: Uso de pendentes para ambientação elegante.",
  },
  {
    src: "/galeria/post.jpg",
    descricao: "Projeto 8: Iluminação para área de trabalho.",
  },
  {
    src: "/galeria/s1.jpg",
    descricao: "Projeto 9: Iluminação inteligente residencial.",
  },
  {
    src: "/galeria/saf1.jpg",
    descricao: "Projeto 10: Projeto para fachada de edifício.",
  },
  {
    src: "/galeria/stand3.png",
    descricao: "Projeto 11: Design de stand para eventos.",
  },
  {
    src: "/galeria/bait2.jpg",
    descricao: "Projeto 12: Consultoria em iluminação comercial.",
  },
];

export default function ProjetosPreview() {
  const [projetoSelecionado, setProjetoSelecionado] = useState(null);

  function abrirModal(index) {
    setProjetoSelecionado(imagens[index]);
  }

  function fecharModal() {
    setProjetoSelecionado(null);
  }

  return (
    <section className="projetos-galeria">
      <h2>PROJETOS</h2>
      <div className="mosaico">
        {imagens.slice(0, 4).map((item, i) => (
          <div
            className="mosaico-item"
            key={i}
            style={{ cursor: "pointer" }}
            onClick={() => abrirModal(i)}
          >
            <img src={item.src} alt={`Projeto ${i + 1}`} />
          </div>
        ))}
      </div>

      <div className="ver-mais-container">
        <Link to="/projetos" className="ver-mais-botao">
          Ver mais
        </Link>
      </div>

      {projetoSelecionado && (
        <div
          className="modal"
          onClick={fecharModal}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0,0,0,0.7)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
          }}
        >
          <div
            className="modal-conteudo"
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundColor: "white",
              padding: 20,
              borderRadius: 8,
              maxWidth: "90vw",
              maxHeight: "90vh",
              overflowY: "auto",
              textAlign: "center",
            }}
          >
            <img
              src={projetoSelecionado.src}
              alt="Projeto ampliado"
              style={{ width: "100%", maxHeight: "60vh", borderRadius: 8 }}
            />
            <p style={{ marginTop: 12 }}>{projetoSelecionado.descricao}</p>
            <button
              onClick={fecharModal}
              style={{
                marginTop: 16,
                padding: "4px 12px",
                cursor: "pointer",
              }}
            >
              X
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
