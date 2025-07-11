import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 10);
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function scrollToSobre() {
    const section = document.getElementById("sobre");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }

  function handleSobreClick() {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        scrollToSobre();
      }, 300);
    } else {
      scrollToSobre();
    }
    setOpen(false); // fecha menu mobile se aberto
  }

  function handleLogoClick() {
    if (location.pathname !== "/") {
      navigate("/");
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setOpen(false);
  }

  function handleProjetosClick() {
    if (location.pathname !== "/projetos") {
      navigate("/projetos");
    }
    setOpen(false);
  }

  return (
    <nav
      className={`fixed top-0 left-0 w-full flex items-center justify-center px-8 py-6 z-20 transition-colors duration-300
        ${scrolled ? "bg-white shadow text-black" : "bg-transparent text-white"}
      `}
    >
      {/* Logo centralizado */}
      <span
        className="tracking-widest text-lg font-light cursor-pointer"
        onClick={handleLogoClick}
      >
        FORÇA CARIOCA
      </span>

      {/* Menu direito - Desktop */}
      <div
        className={`hidden md:flex text-sm items-center gap-8 absolute right-8 top-1/2 -translate-y-1/2 ${
          scrolled ? "text-black" : "text-white"
        }`}
      >
        <button
          type="button"
          className="cursor-pointer bg-transparent border-none outline-none"
          onClick={handleSobreClick}
        >
          SOBRE
        </button>
        <button
          type="button"
          className="cursor-pointer bg-transparent border-none outline-none"
          onClick={handleProjetosClick}
        >
          PROJETOS
        </button>
      </div>

      {/* Toggle - Mobile */}
      <button
        type="button"
        className={`md:hidden text-2xl absolute right-8 top-1/2 -translate-y-1/2 ${
          scrolled ? "text-black" : "text-white"
        }`}
        onClick={() => setOpen(!open)}
        aria-label="Open menu"
      >
        &#9776;
      </button>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden absolute top-full right-0 w-full bg-black bg-opacity-90 flex flex-col items-end py-4 gap-4 z-20 pr-8">
          <button
            type="button"
            className="cursor-pointer bg-transparent border-none outline-none text-white text-base"
            onClick={handleSobreClick}
          >
            SOBRE
          </button>
          <button
            type="button"
            className="cursor-pointer bg-transparent border-none outline-none text-white text-base"
            onClick={handleProjetosClick}
          >
            PROJETOS
          </button>
        </div>
      )}
    </nav>
  );
}
