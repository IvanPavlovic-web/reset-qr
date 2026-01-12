import { useState } from "react";
import LiquidEther from "./LiquidEther";
import "../App.css";

export default function HomePage() {
  const [activeSection, setActiveSection] = useState("hero");
  const [menuCategory, setMenuCategory] = useState(null);

  // Menu podaci - REORGANIZOVANO sa novim kategorijama
  const menuData = {
    kafe: [
      { name: "Kafa", price: "2.00 BAM", description: "Kom" },
      { name: "Ness classic", price: "2.00 BAM", description: "Kom" },
      { name: "Ness vanilla", price: "2.00 BAM", description: "Kom" },
      { name: "Ness čokolada", price: "2.00 BAM", description: "Kom" },
      { name: "Ness Irish", price: "2.00 BAM", description: "Kom" },
      { name: "Jacobs Milka", price: "2.00 BAM", description: "Kom" },
      { name: "Čaj", price: "2.00 BAM", description: "Kom" },
    ],
    toplo: [
      { name: "Čaj", price: "2.00 BAM", description: "Kom" },
      { name: "Cedevita narandža", price: "2.00 BAM", description: "Kom" },
      { name: "Cedevita limun", price: "2.00 BAM", description: "Kom" },
    ],
    hladno: [
      { name: "Voda Vivia", price: "2.00 BAM", description: "Kom" },
      { name: "Kisela Vitinka", price: "2.00 BAM", description: "0.25l" },
      { name: "Kisela narandža", price: "2.50 BAM", description: "0.25l" },
      { name: "Kisela kruška", price: "2.50 BAM", description: "0.25l" },
      { name: "Kisela limeta", price: "2.50 BAM", description: "0.25l" },
      { name: "Vitaminka jabuka", price: "3.00 BAM", description: "0.20l" },
      { name: "Vitaminka borovnica", price: "3.00 BAM", description: "0.20l" },
      { name: "Vitaminka višnja", price: "3.00 BAM", description: "0.20l" },
      { name: "Vitaminka kruška", price: "3.00 BAM", description: "0.20l" },
      { name: "Vitaminka breskva", price: "3.00 BAM", description: "0.20l" },
      { name: "Vitaminka jagoda", price: "3.00 BAM", description: "0.20l" },
      { name: "Vitaminka narandža", price: "3.00 BAM", description: "0.20l" },
      { name: "Ledeni čaj brusnica", price: "3.00 BAM", description: "0.20l" },
      { name: "Limunada", price: "2.00 BAM", description: "0.20l" },
      { name: "Cijeđena narandža", price: "3.00 BAM", description: "0.20l" },
      { name: "Orangina", price: "3.50 BAM", description: "0.25l" },
      { name: "Koka kola", price: "3.00 BAM", description: "0.25l" },
      { name: "Fanta", price: "3.00 BAM", description: "0.25l" },
      { name: "Šveps tonik", price: "3.00 BAM", description: "0.25l" },
      { name: "Šveps biter lemon", price: "3.00 BAM", description: "0.25l" },
      { name: "Šveps mandarina", price: "3.00 BAM", description: "0.25l" },
      { name: "Kokta", price: "3.00 BAM", description: "0.25l" },
      { name: "Nektar", price: "3.00 BAM", description: "0.33l" },
      { name: "Nektar limun", price: "3.50 BAM", description: "0.33l" },
      { name: "Red Bull", price: "6.00 BAM", description: "0.25l" },
    ],
    piva: [
      { name: "Lav", price: "3.50 BAM", description: "0.33l" },
      { name: "Hajeken", price: "4.00 BAM", description: "0.33l" },
      { name: "Korona", price: "6.00 BAM", description: "0.33l" },
      { name: "Tuborg", price: "3.50 BAM", description: "0.33l" },
      { name: "Tuborg (veliki)", price: "3.00 BAM", description: "0.50l" },
      { name: "Carlsberg", price: "3.50 BAM", description: "0.33l" },
      { name: "Somersby", price: "4.00 BAM", description: "0.33l" },
      { name: "Bavaria", price: "3.50 BAM", description: "0.25l" },
    ],
    rakije: [
      { name: "Šamar rakija", price: "3.50 BAM", description: "0.03l" },
      { name: "Baba Višnja", price: "3.00 BAM", description: "0.03l" },
      { name: "Viljamovka", price: "2.50 BAM", description: "0.03l" },
      { name: "Gorki list", price: "2.50 BAM", description: "0.03l" },
      { name: "Rakija dunja", price: "3.00 BAM", description: "0.03l" },
      { name: "Rakija kajsija", price: "3.00 BAM", description: "0.03l" },
      { name: "Vinjak", price: "2.50 BAM", description: "0.33l" },
    ],
    viski: [
      { name: "Jameson", price: "4.00 BAM", description: "0.03l" },
      { name: "Džek", price: "6.00 BAM", description: "0.03l" },
      { name: "Chivas", price: "5.00 BAM", description: "0.03l" },
      { name: "Ballantines", price: "4.00 BAM", description: "0.03l" },
      { name: "Johnnie Walker", price: "4.00 BAM", description: "0.03l" },
    ],
    ostalo_alkoholno: [
      { name: "Konjak", price: "2.50 BAM", description: "0.03l" },
      { name: "Jeger", price: "3.50 BAM", description: "0.03l" },
      { name: "Džin", price: "3.00 BAM", description: "0.03l" },
      { name: "Tekila", price: "3.00 BAM", description: "0.03l" },
      { name: "Štok", price: "2.50 BAM", description: "0.03l" },
      { name: "Votka Smirnof", price: "3.00 BAM", description: "0.03l" },
      { name: "Bijelo vino", price: "3.00 BAM", description: "0.10l" },
      { name: "Crveno vino", price: "3.00 BAM", description: "0.10l" },
    ],
  };

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
    kafe: "Kafe i Topli Napitci",
    toplo: "Topli Napitci",
    hladno: "Bezalkoholna Pića",
    piva: "Piva",
    rakije: "Rakije",
    viski: "Viski",
    ostalo_alkoholno: "Ostalo Alkoholno",
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
            <h1 className="logo">Reset Coffee</h1>
            <p className="tagline">Dobrodošli u najbolje mjesto za druženje</p>
            <button className="menu-btn" onClick={showCategories}>
              Pogledaj meni
            </button>
          </div>
        </div>
      )}

      {/* Categories Section - PROŠIRENO */}
      {activeSection === "categories" && (
        <div className="menu-section categories-section">
          <button className="back-btn" onClick={showHero}>
            ← Nazad
          </button>
          <h2 className="menu-title">Meni</h2>

          <div className="category-grid">
            <div className="category-card" onClick={() => showMenu("kafe")}>
              <div className="category-icon coffee-icon"></div>
              <div className="category-content">
                <h3 className="category-title">Kafe</h3>
                <p>Espresso, Ness, Jacobs i više</p>
              </div>
            </div>

            <div className="category-card" onClick={() => showMenu("toplo")}>
              <div className="category-icon hot-icon"></div>
              <div className="category-content">
                <h3 className="category-title">Topli napitci</h3>
                <p>Čajevi i Cedevite</p>
              </div>
            </div>

            <div className="category-card" onClick={() => showMenu("hladno")}>
              <div className="category-icon cold-icon"></div>
              <div className="category-content">
                <h3 className="category-title">Bezalkoholna pića</h3>
                <p>Sokovi, kisela voda, osveženja</p>
              </div>
            </div>

            <div className="category-card" onClick={() => showMenu("piva")}>
              <div className="category-icon beer-icon"></div>
              <div className="category-content">
                <h3 className="category-title">Piva</h3>
                <p>Lokalna i internacionalna piva</p>
              </div>
            </div>

            <div className="category-card" onClick={() => showMenu("rakije")}>
              <div className="category-icon rakija-icon"></div>
              <div className="category-content">
                <h3 className="category-title">Rakije</h3>
                <p>Domaće i voćne rakije</p>
              </div>
            </div>

            <div className="category-card" onClick={() => showMenu("viski")}>
              <div className="category-icon viski-icon"></div>
              <div className="category-content">
                <h3 className="category-title">Viski</h3>
                <p>Irski, škotski, bourbon</p>
              </div>
            </div>

            <div
              className="category-card"
              onClick={() => showMenu("ostalo_alkoholno")}
            >
              <div className="category-icon cocktail-icon"></div>
              <div className="category-content">
                <h3 className="category-title">Ostalo alkoholno</h3>
                <p>Votka, džin, vino, tequila</p>
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
          <h2 className="menu-title">{categoryTitles[menuCategory]}</h2>

          <div className="menu-items">
            {menuData[menuCategory].map((item, index) => (
              <div key={index} className="menu-item">
                <div className="item-header">
                  <h3 className="item-name">{item.name}</h3>
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
