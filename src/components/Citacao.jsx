import "./Citacao.css";

export default function Citacao() {
  return (
    <div className="depoimento-bg">
      <div className="depoimento-content">
        <blockquote>
            "Na Força Carioca, acreditamos que cada projeto é uma oportunidade de
            iluminar ideias e transformar espaços. Nossa paixão é criar soluções
            inovadoras, com agilidade e responsabilidade, sempre ao lado dos
            nossos clientes."
          <br />
          <span>— Equipe Força Carioca</span>
        </blockquote>
      </div>
      <div className="wave-bottom">
        <svg
          viewBox="0 0 1440 100"
          width="100%"
          height="100"
          preserveAspectRatio="none"
        >
          <path
            fill="#fff"
            d="M0,40 C480,140 960,0 1440,40 L1440,100 L0,100 Z"
          />
        </svg>
      </div>
    </div>
  );
}