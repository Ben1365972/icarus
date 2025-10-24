import './App.css'

function Impressum() {
  return (
    <div className="app">
      <section className="hero" style={{ minHeight: '30vh' }}>
        <div className="container">
          <h1 className="hero-title">Impressum</h1>
        </div>
      </section>

      <section className="about">
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'left' }}>
            <h2>Angaben gemäß § 5 TMG</h2>
            <p>
              <strong>[Ihr Name/Firmenname]</strong><br />
              [Straße und Hausnummer]<br />
              [PLZ und Ort]<br />
              Deutschland
            </p>

            <h2 style={{ marginTop: '2rem' }}>Kontakt</h2>
            <p>
              Telefon: [Ihre Telefonnummer]<br />
              E-Mail: [Ihre E-Mail-Adresse]
            </p>

            <h2 style={{ marginTop: '2rem' }}>Vertreten durch</h2>
            <p>
              [Name des/der Vertretungsberechtigten]
            </p>

            <h2 style={{ marginTop: '2rem' }}>Registereintrag</h2>
            <p>
              Eintragung im Handelsregister<br />
              Registergericht: [Ort des Registergerichts]<br />
              Registernummer: [Ihre Registernummer]
            </p>

            <h2 style={{ marginTop: '2rem' }}>Umsatzsteuer-ID</h2>
            <p>
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
              [Ihre USt-IdNr.]
            </p>

            <h2 style={{ marginTop: '2rem' }}>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
            <p>
              [Name und Anschrift des Verantwortlichen]
            </p>

            <h2 style={{ marginTop: '2rem' }}>EU-Streitschlichtung</h2>
            <p>
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
              <br />
              <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer"
                 style={{ color: '#a8d0ff' }}>
                https://ec.europa.eu/consumers/odr/
              </a>
              <br />
              Unsere E-Mail-Adresse finden Sie oben im Impressum.
            </p>

            <h2 style={{ marginTop: '2rem' }}>
              Verbraucherstreitbeilegung/Universalschlichtungsstelle
            </h2>
            <p>
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>

            <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid rgba(168, 208, 255, 0.2)' }}>
              <a href="#/" style={{ color: '#a8d0ff', textDecoration: 'none' }}>
                ← Zurück zur Startseite
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Impressum
