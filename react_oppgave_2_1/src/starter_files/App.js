/**
 * 
 * Funksjoner du kan trenge i App.js
 * 
 */

const getService = (slug) => {
  // Lag en funksjon som kan brukes for å hente en tjeneste fra listen i data mappen
}

const createService = (data) => {
  // Lag en funksjon som kan brukes for å lagre en tjeneste i listen i data mappen
}

export default function App() {
  // TODO: Legg til om nødvendig logikk her
  return (
    <>
      <nav>
        <h1 data-testid="logo">
          <a data-testid="logo_link" href="#">
            Tjenesteweb
          </a>
        </h1>
        <ul data-testid="nav">
          <li data-testid="nav_services">
            <a data-testid="services_link" href="#">
              Tjenester
            </a>
          </li>
          <li data-testid="nav_new">
            <a data-testid="create_link" href="#">
              Ny
            </a>
          </li>
        </ul>
      </nav>
      <section data-testid="hero">
        <div>
          <cite data-testid="cite">
            «Vi tilbyr alle tjenester til alle mennesker over alt. Rett og slett
            best på tjenester.»
          </cite>
          <span>CEO, Tjenesteweb</span>
        </div>
        <div data-testid="circles">Sirkler</div>
      </section>
      {/* TODO: Oppsett for React Router kommer her */}
      <footer data-testid="footer">
        <p>Tjenesteweb AS, 2022</p>
        <p>99 00 00 00, mail@tjenesteweb.no</p>
      </footer>
    </>
  )
}
