import { useState, useEffect } from "react";
import LiquidEther from "./LiquidEther";
import "../App.css";

export default function HomePage() {
  const [activeSection, setActiveSection] = useState("hero");
  const [menuCategory, setMenuCategory] = useState(null);

  // Menu podaci
  const menuData = {
    kafe: [
      {
        name: "Espresso",
        price: "150 RSD",
        description: "Klasičan italijanski espresso",
      },
      {
        name: "Cappuccino",
        price: "200 RSD",
        description: "Espresso sa penušavim mlekom",
      },
      {
        name: "Latte",
        price: "220 RSD",
        description: "Kremasta kafa sa mlekom",
      },
      {
        name: "Americano",
        price: "180 RSD",
        description: "Espresso sa toplom vodom",
      },
      {
        name: "Macchiato",
        price: "190 RSD",
        description: "Espresso sa kapljom mleka",
      },
    ],
    topla: [
      {
        name: "Crni Čaj",
        price: "150 RSD",
        description: "Tradicionalni crni čaj",
      },
      {
        name: "Zeleni Čaj",
        price: "150 RSD",
        description: "Osvežavajući zeleni čaj",
      },
      {
        name: "Voćni Čaj",
        price: "170 RSD",
        description: "Mešavina voćnih čajeva",
      },
      {
        name: "Topla Čokolada",
        price: "250 RSD",
        description: "Bogata topla čokolada sa šlagom",
      },
    ],
    hladna: [
      { name: "Coca Cola", price: "180 RSD", description: "0.33L" },
      { name: "Fanta", price: "180 RSD", description: "0.33L" },
      { name: "Sprite", price: "180 RSD", description: "0.33L" },
      {
        name: "Ceđeni Sok",
        price: "220 RSD",
        description: "Pomorandža ili grejp",
      },
      {
        name: "Ledena Kafa",
        price: "280 RSD",
        description: "Hladna kafa sa ledom i mlekom",
      },
    ],
    piva: [
      { name: "Lav Premium", price: "200 RSD", description: "0.33L" },
      { name: "Zaječarsko", price: "180 RSD", description: "0.33L" },
      { name: "Heineken", price: "250 RSD", description: "0.33L" },
      { name: "Corona", price: "300 RSD", description: "0.33L" },
      { name: "Točeno Pivo", price: "220 RSD", description: "0.5L" },
    ],
  };

  // Animacija teksta
  useEffect(() => {
    const animateBlurText = (
      elementId,
      text,
      animateBy = "words",
      delay = 100,
      direction = "top"
    ) => {
      const element = document.getElementById(elementId);
      if (!element) return;

      const segments = animateBy === "words" ? text.split(" ") : text.split("");

      element.innerHTML = "";

      segments.forEach((segment, index) => {
        const span = document.createElement("span");
        span.textContent = segment;
        span.className = animateBy === "words" ? "tagline-word" : "logo-char";
        span.style.transitionDelay = `${index * delay}ms`;

        element.appendChild(span);

        if (animateBy === "words" && index < segments.length - 1) {
          element.appendChild(document.createTextNode(" "));
        }
      });

      setTimeout(() => {
        const spans = element.querySelectorAll("span");
        spans.forEach((span, index) => {
          setTimeout(() => {
            span.style.transition =
              "all 0.7s cubic-bezier(0.34, 1.56, 0.64, 1)";

            span.style.filter = "blur(5px)";
            span.style.opacity = "0.5";
            span.style.transform =
              direction === "top" ? "translateY(5px)" : "translateY(-5px)";

            setTimeout(() => {
              span.style.filter = "blur(0px)";
              span.style.opacity = "1";
              span.style.transform = "translateY(0)";
            }, 350);
          }, index * delay);
        });
      }, 100);
    };

    if (activeSection === "hero") {
      setTimeout(() => {
        animateBlurText("logo", "Reset", "chars", 100, "top");
      }, 500);

      setTimeout(() => {
        animateBlurText(
          "tagline",
          "Tvoj trenutak za pauzu",
          "words",
          150,
          "bottom"
        );
      }, 800);
    }
  }, [activeSection]);

  const showCategories = () => {
    setActiveSection("categories");
  };

  const showHero = () => {
    setActiveSection("hero");
    setMenuCategory(null);
  };

  const showMenu = (category) => {
    setActiveSection("menu-items");
    setMenuCategory(category);
  };

  const categoryTitles = {
    kafe: "Kafe",
    topla: "Topla Pića",
    hladna: "Hladna Pića",
    piva: "Piva",
  };

  return (
    <div className="app-container">
      {/* Liquid Ether Background samo na hero sekciji */}
      {activeSection === "hero" && (
        <div className="liquid-background">
          <LiquidEther
            colors={["#8b5a2b", "#d4a574", "#a67c52"]}
            mouseForce={15}
            cursorSize={80}
            resolution={0.7}
            autoDemo={true}
            autoSpeed={0.3}
          />
        </div>
      )}

      {/* Hero Section */}
      {activeSection === "hero" && (
        <div className="hero">
          <div className="hero-content">
            <h1 className="logo serif" id="logo"></h1>
            <p className="tagline" id="tagline"></p>
            <button className="menu-btn" onClick={showCategories}>
              Pogledaj Meni
            </button>
          </div>
        </div>
      )}

      {/* Categories Section */}
      {activeSection === "categories" && (
        <div className="menu-section categories-section">
          <button className="back-btn" onClick={showHero}>
            ← Nazad
          </button>
          <h2 className="serif menu-title">Naš Meni</h2>

          <div className="category-grid">
            <div className="category-card" onClick={() => showMenu("kafe")}>
              <div className="category-icon coffee-icon"></div>
              <div className="category-content">
                <h3 className="category-title serif">Kafe</h3>
                <p>Espresso, Cappuccino i više</p>
              </div>
            </div>

            <div className="category-card" onClick={() => showMenu("topla")}>
              <div className="category-icon hot-icon"></div>
              <div className="category-content">
                <h3 className="category-title serif">Topla Pića</h3>
                <p>Čajevi i topla čokolada</p>
              </div>
            </div>

            <div className="category-card" onClick={() => showMenu("hladna")}>
              <div className="category-icon cold-icon"></div>
              <div className="category-content">
                <h3 className="category-title serif">Hladna Pića</h3>
                <p>Sokovi i osveženja</p>
              </div>
            </div>

            <div className="category-card" onClick={() => showMenu("piva")}>
              <div className="category-icon beer-icon"></div>
              <div className="category-content">
                <h3 className="category-title serif">Piva</h3>
                <p>Domaća i uvozna piva</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Menu Items Section */}
      {activeSection === "menu-items" && menuCategory && (
        <div className="menu-section items-section">
          <button
            className="back-btn"
            onClick={() => setActiveSection("categories")}
          >
            ← Nazad na kategorije
          </button>
          <h2 className="serif menu-title">{categoryTitles[menuCategory]}</h2>

          <div className="menu-items">
            {menuData[menuCategory].map((item, index) => (
              <div key={index} className="menu-item">
                <div className="item-header">
                  <h3 className="item-name serif">{item.name}</h3>
                  <span className="item-price">{item.price}</span>
                </div>
                <p className="item-description">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
