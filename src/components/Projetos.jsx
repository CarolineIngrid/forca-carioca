
import "./Projetos.css";

const imagens = [
    "/galeria/image17.png",
  "/galeria/ape3.jpg",
  "/galeria/br1.jpg",
  "/galeria/easy2.jpg",
  "/galeria/entrada-lume.jpg",
  "/galeria/mudra.jpg",
  "/galeria/pendente.jpg",
  "/galeria/post.jpg",
  "/galeria/s1.jpg",
  "/galeria/saf1.jpg",
  "/galeria/stand3.png",
  "/galeria/bait2.jpg",
];

export default function Projetos() {
  return (
    <section className="projetos-galeria">
      <h2>PROJETOS</h2>
      <div className="mosaico">
        {imagens.map((src, i) => (
          <div className="mosaico-item" key={i}>
            <img src={src} alt={`Projeto ${i + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
}