import { Link } from "react-router-dom";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="home">
      {/* HERO */}
      <header className="hero">
        <img
          src="images/iteration-1-images/home-banner.png"
          alt="Pizza Banner"
        />

        <div className="hero-content">
          <p className="hero-title">Teknolojik yemekler</p>
          <p className="hero-subtitle">fırsatı kaçırma</p>

          <h1>
            KOD ACIKTIRIR
            <br />
            PIZZA, DOYURUR
          </h1>

          <Link to="/order">
            <button type="button" className="primary-btn">
              ACIKTIM
            </button>
          </Link>
        </div>
      </header>

      {/* CATEGORY BAR */}
      <nav className="category-bar">
        <ul className="category-list">
          <li>
            <img src="images/iteration-2-images/icons/1.svg" alt="YENİ! Kore" />
            YENİ! Kore
          </li>
          <li>
            <img src="images/iteration-2-images/icons/2.svg" alt="Pizza" />
            Pizza
          </li>
          <li>
            <img src="images/iteration-2-images/icons/3.svg" alt="Burger" />
            Burger
          </li>
          <li>
            <img
              src="images/iteration-2-images/icons/4.svg"
              alt="Kızartmalar"
            />
            Kızartmalar
          </li>
          <li>
            <img src="images/iteration-2-images/icons/5.svg" alt="Fast Food" />
            Fast Food
          </li>
          <li>
            <img
              src="images/iteration-2-images/icons/6.svg"
              alt="Gazlı İçecek"
            />
            Gazlı İçecek
          </li>
        </ul>
      </nav>

      {/* PROMO SECTION */}
      <main>
        <section className="promo-section">
          <div className="promo-grid">
            <article className="promo-card pizza">
              <div className="promo-content">
                <h2>
                  Özel <br /> Lezzetus
                </h2>
                <p>Position: Absolute Acı Burger</p>

                <Link to="/order">
                  <button type="button">SİPARİŞ VER</button>
                </Link>
              </div>

              <img
                src="images/iteration-2-images/cta/kart-1.png"
                alt="Pizza"
              />
            </article>

            <div className="promo-right">
              <article className="promo-card burger">
                <div className="promo-content">
                  <h3>Hackathlon Burger Menü</h3>

                  <Link to="/order">
                    <button type="button">SİPARİŞ VER</button>
                  </Link>
                </div>
              </article>

              <article className="promo-card courier">
                <div className="promo-content">
                  <p>
                    <span>Çoooook</span> hızlı
                    <br />
                    npm gibi kurye
                  </p>

                  <Link to="/order">
                    <button type="button">SİPARİŞ VER</button>
                  </Link>
                </div>
              </article>
            </div>
          </div>
        </section>
      </main>

      {/* POPULAR SECTION */}
      <section className="popular-section">
        <p className="popular-subtitle">en çok paketlenen menüler</p>
        <h2 className="popular-title">Acıktıran Kodlara Doyuran Lezzetler</h2>

        <ul className="popular-list">
          <li className="popular-item">
            <img src="images/iteration-2-images/icons/1.svg" alt="Ramen" />
            <span>Ramen</span>
          </li>

          <li className="popular-item active">
            <img src="images/iteration-2-images/icons/2.svg" alt="Pizza" />
            <span>Pizza</span>
          </li>

          <li className="popular-item">
            <img src="images/iteration-2-images/icons/3.svg" alt="Burger" />
            <span>Burger</span>
          </li>

          <li className="popular-item">
            <img
              src="images/iteration-2-images/icons/4.svg"
              alt="French fries"
            />
            <span>French fries</span>
          </li>

          <li className="popular-item">
            <img
              src="images/iteration-2-images/icons/5.svg"
              alt="Fast food"
            />
            <span>Fast food</span>
          </li>

          <li className="popular-item">
            <img
              src="images/iteration-2-images/icons/6.svg"
              alt="Soft drinks"
            />
            <span>Soft drinks</span>
          </li>
        </ul>
      </section>

      {/* PRODUCTS SECTION */}
      <section className="products-section">
        <div className="products-grid">
          <article className="product-card">
            <img
              src="images/iteration-2-images/pictures/food-1.png"
              alt="Terminal Pizza"
            />
            <h3>Terminal Pizza</h3>
            <div className="product-info">
              <span className="rating">4.9</span>
              <span className="count">(200)</span>
              <span className="price">60₺</span>
            </div>
          </article>

          <article className="product-card">
            <img
              src="images/iteration-2-images/pictures/food-2.png"
              alt="Position Absolute Acı Pizza"
            />
            <h3>Position Absolute Acı Pizza</h3>
            <div className="product-info">
              <span className="rating">4.9</span>
              <span className="count">(200)</span>
              <span className="price">60₺</span>
            </div>
          </article>

          <article className="product-card">
            <img
              src="images/iteration-2-images/pictures/food-3.png"
              alt="useEffect Tavuklu Burger"
            />
            <h3>useEffect Tavuklu Burger</h3>
            <div className="product-info">
              <span className="rating">4.9</span>
              <span className="count">(200)</span>
              <span className="price">60₺</span>
            </div>
          </article>
        </div>
      </section>

      {/* FOOTER 
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-left">
            <h3>Teknolojik Yemekler</h3>

            <ul className="footer-info">
              <li>
                <img
                  src="images/iteration-2-images/footer/icons/icon-1.png"
                  alt="Location"
                />
                <span>341 Londonderry Road, İstanbul Türkiye</span>
              </li>
              <li>
                <img
                  src="images/iteration-2-images/footer/icons/icon-2.png"
                  alt="Email"
                />
                <span>aciktim@teknolojikyemekler.com</span>
              </li>
              <li>
                <img
                  src="images/iteration-2-images/footer/icons/icon-3.png"
                  alt="Phone"
                />
                <span>+90 216 123 45 67</span>
              </li>
            </ul>
          </div>

          <div className="footer-menu">
            <h4>Hot Menu</h4>
            <ul>
              <li>Terminal Pizza</li>
              <li>5 Kişilik Hackathlon Pizza</li>
              <li>useEffect Tavuklu Pizza</li>
              <li>Beyaz Console Frosty</li>
              <li>Testler Geçti Mutlu Burger</li>
              <li>Position Absolute Acı Burger</li>
            </ul>
          </div>

          <div className="footer-instagram">
            <h4>Instagram</h4>
            <div className="insta-grid">
              <img
                src="images/iteration-2-images/footer/insta/li-0.png"
                alt=""
              />
              <img
                src="images/iteration-2-images/footer/insta/li-1.png"
                alt=""
              />
              <img
                src="images/iteration-2-images/footer/insta/li-2.png"
                alt=""
              />
              <img
                src="images/iteration-2-images/footer/insta/li-3.png"
                alt=""
              />
              <img
                src="images/iteration-2-images/footer/insta/li-4.png"
                alt=""
              />
              <img
                src="images/iteration-2-images/footer/insta/li-5.png"
                alt=""
              />
            </div>
          </div>
        </div>

        <hr className="footer-line" />

        <div className="footer-bottom">
          <p>© 2023 Teknolojik Yemekler.</p>
          <i className="fa-brands fa-twitter" style={{ color: "#ffffff" }}></i> 
          
        </div>
      </footer>*/}
      <Footer />
    </div>
    
  );

}

