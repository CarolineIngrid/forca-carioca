import './App.css'
import Header from "./components/Header";
import Hero from "./components/Hero";
import Sobre from "./components/Sobre";
import Projetos from './components/Projetos';
import ProjetosOusados from './components/ProjetosOusados';
import Citacao from "./components/Citacao";
import Footer from './components/Footer';

function App() {

  return (
    <>
      <Header />
      <Sobre/>
      {/* <Hero/> */}
      <Citacao />
      <Projetos />
      {/* <ProjetosOusados /> */}
      <Footer />
      
      
    </>
  )
}

export default App
