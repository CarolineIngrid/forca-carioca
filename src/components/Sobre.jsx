import "./Sobre.css";

const Sobre = () => {
  return (
    <section className="sobre-section" id="sobre">
      <div className="sobre-container">
        <div className="sobre-img-wrapper">
          <img
            src="/sobre/para.jpg" 
            alt="Trabalhador em marcenaria"
            className="sobre-img"
          />
        </div>
        <div className="sobre-content">
          <h1 className="sobre-title text-2xl md:text-4xl">SOBRE NÓS</h1>
          <div className="sobre-divider"></div>
          <p className="sobre-text">
            Referência em soluções de iluminação e consultoria para construções e condomínios no Rio de Janeiro.
          </p>
          <p className="sobre-text">
           Com uma equipe experiente e comprometida, entregamos projetos com agilidade, precisão e responsabilidade, sempre buscando inovação e eficiência para nossos clientes.
          </p>
          <a
            href="https://wa.me/5512991526876"
            target="_blank"
            rel="noopener noreferrer"
            className="sobre-btn"
          >
            ENTRE EM CONTATO
          </a>
        </div>
      </div>
    </section>
  );
};

export default Sobre;