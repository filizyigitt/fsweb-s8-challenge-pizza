export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* SOL BLOK */}
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

        {/* ORTA BLOK */}
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

        {/* SAĞ BLOK */}
        <div className="footer-instagram">
          <h4>Instagram</h4>

          <div className="insta-grid">
            <img src="images/iteration-2-images/footer/insta/li-0.png" alt="" />
            <img src="images/iteration-2-images/footer/insta/li-1.png" alt="" />
            <img src="images/iteration-2-images/footer/insta/li-2.png" alt="" />
            <img src="images/iteration-2-images/footer/insta/li-3.png" alt="" />
            <img src="images/iteration-2-images/footer/insta/li-4.png" alt="" />
            <img src="images/iteration-2-images/footer/insta/li-5.png" alt="" />
          </div>
        </div>
      </div>

      <hr className="footer-line" />

      <div className="footer-bottom">
        <p>© 2023 Teknolojik Yemekler.</p>

        {/* FontAwesome kullanıyorsan görünür; kullanmıyorsan istersen kaldır */}
        <i className="fa-brands fa-twitter" style={{ color: "#ffffff" }} />
      </div>
    </footer>
  );
}
