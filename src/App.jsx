import './App.css'
import Header from "./components/Header";
import Hero from "./components/Hero";
import Sobre from "./components/Sobre";
import ProjetosPreview from './components/ProjetosPreview';
import Citacao from "./components/Citacao";
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Header />
      <Sobre />
      <Citacao />
      <ProjetosPreview />
      <Footer />
    </>
  )
}