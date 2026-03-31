import { useEffect } from 'react'

export default function App() {
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.16 }
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <style>{`
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body {
          margin: 0;
          font-family: 'Segoe UI', Arial, sans-serif;
          background: #f3f1eb;
          color: #171717;
        }

        a { color: inherit; }

        .page {
          overflow-x: hidden;
        }

        .topbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 50;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 24px 42px;
          background: rgba(243, 241, 235, 0.74);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(0,0,0,0.05);
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 14px;
          font-size: 14px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
        }

        .brand-mark {
          width: 38px;
          height: 38px;
          background: #e6c34d;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
          font-size: 24px;
          color: #fff;
        }

        .nav {
          display: flex;
          gap: 28px;
          align-items: center;
          font-size: 13px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
        }

        .nav a {
          text-decoration: none;
          position: relative;
        }

        .nav a::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -6px;
          width: 0;
          height: 2px;
          background: #e6c34d;
          transition: width 0.25s ease;
        }

        .nav a:hover::after {
          width: 100%;
        }

        .hero {
          min-height: 100vh;
          padding: 130px 48px 70px;
          display: grid;
          grid-template-columns: 0.95fr 1.25fr;
          gap: 42px;
          align-items: center;
          max-width: 1400px;
          margin: 0 auto;
        }

        .hero-copy {
          max-width: 430px;
        }

        .eyebrow {
          display: inline-block;
          margin-bottom: 18px;
          padding: 8px 12px;
          background: rgba(230,195,77,0.18);
          color: #8b6b00;
          font-size: 12px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }

        .hero h1 {
          margin: 0 0 22px;
          font-size: clamp(44px, 6vw, 86px);
          line-height: 0.95;
          letter-spacing: -0.04em;
          text-transform: uppercase;
        }

        .hero p {
          margin: 0 0 28px;
          font-size: 18px;
          line-height: 1.8;
          color: #4c4c4c;
        }

        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-bottom: 24px;
        }

        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 52px;
          padding: 0 22px;
          text-decoration: none;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          font-size: 12px;
          border: 1px solid #171717;
          transition: transform 0.25s ease, background 0.25s ease, color 0.25s ease, border-color 0.25s ease;
        }

        .btn:hover {
          transform: translateY(-2px);
        }

        .btn-primary {
          background: #e6c34d;
          border-color: #e6c34d;
          color: #171717;
        }

        .btn-primary:hover {
          background: #d7b33e;
          border-color: #d7b33e;
        }

        .btn-secondary {
          background: transparent;
        }

        .btn-secondary:hover {
          background: #171717;
          color: #fff;
        }

        .hero-note {
          font-size: 14px;
          color: #666;
          letter-spacing: 0.02em;
        }

        .hero-visual {
          position: relative;
          min-height: 620px;
        }

        .hero-image {
          position: absolute;
          inset: 0 0 0 0;
          background-image: url('https://images.unsplash.com/photo-1545249390-6bdfa286032f?auto=format&fit=crop&w=1400&q=80');
          background-size: cover;
          background-position: center;
          box-shadow: 0 24px 60px rgba(0,0,0,0.16);
        }

        .hero-overlay-box {
          position: absolute;
          top: 36px;
          left: 36px;
          width: 160px;
          height: 160px;
          background: rgba(230,195,77,0.96);
          z-index: 2;
        }

        .hero-overlay-title {
          position: absolute;
          left: 130px;
          top: 110px;
          z-index: 3;
          max-width: 340px;
          font-size: clamp(34px, 4vw, 72px);
          line-height: 0.95;
          letter-spacing: -0.05em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.84);
          font-weight: 700;
        }

        .hero-badge {
          position: absolute;
          right: 24px;
          bottom: 24px;
          z-index: 4;
          background: rgba(255,255,255,0.9);
          padding: 14px 16px;
          width: 150px;
          font-size: 11px;
          text-transform: uppercase;
          line-height: 1.5;
          box-shadow: 0 8px 24px rgba(0,0,0,0.14);
        }

        .section {
          max-width: 1280px;
          margin: 0 auto;
          padding: 80px 48px;
        }

        .section-title {
          margin: 0 0 18px;
          font-size: clamp(26px, 4vw, 46px);
          line-height: 1.05;
          text-transform: uppercase;
          letter-spacing: -0.03em;
        }

        .section-lead {
          margin: 0;
          max-width: 980px;
          font-size: 22px;
          line-height: 1.8;
          color: #383838;
        }

        .showcase {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 34px;
          align-items: center;
          margin-top: 46px;
        }

        .showcase.reverse {
          grid-template-columns: 0.9fr 1.1fr;
        }

        .showcase-image-wrap {
          position: relative;
        }

        .showcase-image {
          width: 100%;
          height: 520px;
          object-fit: cover;
          display: block;
          box-shadow: 0 20px 54px rgba(0,0,0,0.12);
        }

        .floating-card {
          position: absolute;
          right: -34px;
          bottom: 28px;
          width: 260px;
          background: #e6c34d;
          padding: 28px 24px;
          box-shadow: 0 16px 34px rgba(0,0,0,0.16);
        }

        .floating-card .small {
          margin-bottom: 8px;
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.14em;
        }

        .floating-card .big {
          margin: 0 0 10px;
          font-size: 38px;
          line-height: 0.94;
          text-transform: uppercase;
        }

        .floating-card .link {
          font-size: 13px;
          text-transform: uppercase;
          letter-spacing: 0.12em;
        }

        .text-card {
          padding: 22px 4px;
        }

        .text-card h3 {
          margin: 0 0 16px;
          font-size: 34px;
          text-transform: uppercase;
          letter-spacing: -0.03em;
          line-height: 1.04;
        }

        .text-card p {
          margin: 0 0 18px;
          font-size: 17px;
          line-height: 1.9;
          color: #444;
        }

        .feature-strip {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-top: 36px;
        }

        .feature-box {
          padding: 28px;
          background: #fff;
          border-top: 4px solid #e6c34d;
          box-shadow: 0 10px 28px rgba(0,0,0,0.08);
        }

        .feature-box h4 {
          margin: 0 0 12px;
          text-transform: uppercase;
          font-size: 18px;
          letter-spacing: 0.04em;
        }

        .feature-box p {
          margin: 0;
          line-height: 1.8;
          color: #4b4b4b;
        }

        .animals-grid {
          margin-top: 40px;
          display: grid;
          grid-template-columns: 0.85fr 1.15fr;
          gap: 28px;
          align-items: stretch;
        }

        .animals-grid img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .stack {
          display: grid;
          grid-template-rows: 1fr 1fr;
          gap: 28px;
        }

        .cta {
          margin-top: 60px;
          padding: 56px 42px;
          background: #171717;
          color: white;
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 24px;
          align-items: center;
        }

        .cta h3 {
          margin: 0 0 12px;
          font-size: 42px;
          line-height: 0.98;
          text-transform: uppercase;
          letter-spacing: -0.04em;
        }

        h1, h2 {
          color: #111827;
        }

        .cta p {
          margin: 0;
          font-size: 17px;
          line-height: 1.8;
          color: rgba(255,255,255,0.8);
          max-width: 760px;
        }

        .footer {
          display: flex;
          justify-content: space-between;
          gap: 18px;
          align-items: center;
          padding: 28px 48px 44px;
          font-size: 13px;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: #5e5e5e;
        }

        .reveal {
          opacity: 0;
          transform: translateY(44px);
          transition: opacity 0.85s ease, transform 0.85s ease;
        }

        .reveal.visible {
          opacity: 1;
          transform: translateY(0);
        }

        @media (max-width: 1120px) {
          .hero,
          .showcase,
          .showcase.reverse,
          .animals-grid,
          .cta,
          .feature-strip {
            grid-template-columns: 1fr;
          }

          .hero {
            min-height: auto;
          }

          .hero-visual {
            min-height: 520px;
          }

          .floating-card {
            right: 18px;
            bottom: 18px;
          }
        }

        @media (max-width: 760px) {
          .topbar,
          .section,
          .footer,
          .hero {
            padding-left: 20px;
            padding-right: 20px;
          }

          .topbar {
            flex-direction: column;
            gap: 16px;
            align-items: flex-start;
          }

          .nav {
            gap: 14px;
            flex-wrap: wrap;
          }

          .hero {
            padding-top: 160px;
          }

          .hero h1 {
            font-size: 44px;
          }

          .hero-visual {
            min-height: 380px;
          }

          .hero-overlay-box {
            width: 100px;
            height: 100px;
            top: 16px;
            left: 16px;
          }

          .hero-overlay-title {
            left: 60px;
            top: 70px;
            max-width: 220px;
            font-size: 34px;
          }

          .hero-badge {
            width: 120px;
            font-size: 10px;
          }

          .showcase-image {
            height: 320px;
          }

          .floating-card {
            position: relative;
            right: auto;
            bottom: auto;
            width: auto;
            margin-top: 18px;
          }

          .cta h3 {
            font-size: 30px;
          }

          .footer {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>

      <div className="page">
        <header className="topbar">
          <div className="brand">
            <div className="brand-mark">P</div>
            <div>Pet & Plant Store</div>
          </div>
          <nav className="nav">
            <a href="#about">About</a>
            <a href="#benefits">Benefits</a>
            <a href="#gallery">Gallery</a>
            <a href="#visit">Visit</a>
          </nav>
        </header>

        <section className="hero reveal">
          <div className="hero-copy">
            <div className="eyebrow">Presentation landing</div>
            <h1>Pet<br />Plant<br />Style</h1>
            <p>
              Магазин, де товари для домашніх улюбленців і рослин подані красиво, сучасно
              і зручно. Тут приємно обирати, легко надихатися та хочеться повертатися знову.
            </p>
            <div className="hero-actions">
              <a href="https://example.com" target="_blank" rel="noreferrer" className="btn btn-primary">
                Перейти до Pet & Plant Store
              </a>
              <a href="#about" className="btn btn-secondary">
                Дивитися далі
              </a>
            </div>
            <div className="hero-note">Естетика, зручність, атмосфера та натхнення в одному просторі.</div>
          </div>

          <div className="hero-visual">
            <div className="hero-image"></div>
            <div className="hero-overlay-box"></div>
            <div className="hero-overlay-title">The art of care</div>
            <div className="hero-badge">Goods for pets and plants / curated with style</div>
          </div>
        </section>

        <section id="about" className="section reveal">
          <h2 className="section-title">Сайт, який продає не лише товари, а й враження</h2>
          <p className="section-lead">
            Pet & Plant Store створений як візуально привабливий простір для покупок. Він поєднує
            затишну атмосферу, чисту подачу товарів і зручну навігацію, щоб користувач міг не просто
            знайти потрібне, а отримати приємний досвід від самого процесу вибору.
          </p>

          <div className="showcase reveal">
            <div className="showcase-image-wrap">
              <img
                className="showcase-image"
                src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=1200&q=80"
                alt="Товари для собак"
              />
              <div className="floating-card">
                <div className="small">Collection</div>
                <div className="big">Pet comfort</div>
                <div className="link">View selection →</div>
              </div>
            </div>
            <div className="text-card">
              <h3>Турбота про улюбленців у стильній подачі</h3>
              <p>
                Від кормів та іграшок до аксесуарів і засобів догляду — усе представлено так,
                щоб покупець одразу бачив цінність, настрій і якість. Великі зображення, виразні
                акценти та чиста композиція роблять сайт переконливим і сучасним.
              </p>
              <p>
                Це не просто каталог, а привабливий простір, який формує довіру до бренду і
                спонукає перейти до покупки.
              </p>
            </div>
          </div>
        </section>

        <section id="benefits" className="section reveal">
          <h2 className="section-title">Чому цей сайт запам’ятовується</h2>
          <div className="feature-strip">
            <div className="feature-box reveal">
              <h4>Візуальна естетика</h4>
              <p>
                Великі фото, акуратні блоки та преміальні кольорові акценти створюють відчуття
                сучасного бренду.
              </p>
            </div>
            <div className="feature-box reveal">
              <h4>Легка навігація</h4>
              <p>
                Користувач швидко переходить від натхнення до вибору товару без зайвих дій
                і перевантаження інформацією.
              </p>
            </div>
            <div className="feature-box reveal">
              <h4>Емоція покупки</h4>
              <p>
                Атмосфера сайту працює як реклама: вона не тільки показує товар, а й викликає
                бажання придбати його саме тут.
              </p>
            </div>
          </div>

          <div className="showcase reverse reveal" style={{ marginTop: '54px' }}>
            <div className="text-card">
              <h3>Рослини як частина красивого щоденного простору</h3>
              <p>
                Pet & Plant Store також представляє товари для рослин: горщики, ґрунти, добрива,
                декор і все, що допомагає перетворити догляд за рослинами на приємний ритуал.
              </p>
              <p>
                Спокійна палітра, чисті композиції і продуманий ритм сторінки створюють відчуття
                преміального онлайн-магазину, в який хочеться повернутися.
              </p>
            </div>
            <div className="showcase-image-wrap">
              <img
                className="showcase-image"
                src="https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=1200&q=80"
                alt="Рослини в інтер'єрі"
              />
              <div className="floating-card" style={{ left: '-34px', right: 'auto', bottom: '34px' }}>
                <div className="small">Portfolio</div>
                <div className="big">Green mood</div>
                <div className="link">Explore style →</div>
              </div>
            </div>
          </div>
        </section>

        <section id="gallery" className="section reveal">
          <h2 className="section-title">Галерея атмосфери</h2>
          <p className="section-lead">
            Якісні фото, м’які переходи та акцентні блоки формують дорогий і впізнаваний образ
            бренду. Саме такий підхід робить сайт не просто зручним, а по-справжньому привабливим.
          </p>

          <div className="animals-grid">
            <img
              className="reveal"
              src="https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=1200&q=80"
              alt="Собака"
            />
            <div className="stack">
              <img
                className="reveal"
                src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=1200&q=80"
                alt="Кіт"
              />
              <img
                className="reveal"
                src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1200&q=80"
                alt="Рослини"
              />
            </div>
          </div>

          <div className="cta reveal" id="visit">
            <div>
              <h3>Готові відкрити Pet & Plant Store?</h3>
              <p>
                Перейдіть до Pet & Plant Store, щоб переглянути каталог товарів, підібрати
                необхідне для улюбленців і рослин та оформити замовлення онлайн.
              </p>
            </div>
            <a href="https://example.com" target="_blank" rel="noreferrer" className="btn btn-primary">
              Відкрити магазин
            </a>
          </div>
        </section>

        <footer className="footer">
          <div>Pet & Plant Store</div>
          <div>Офіційна промо-сторінка Pet & Plant Store / 2026</div>
        </footer>
      </div>
    </>
  )
}
