// TODO: Denne egner seg for /tjenester/en-eller-annen-tjeneste

export default function Service() {
  return (
    <>
      <nav>
        <h1 data-testid="logo">
          <a data-testid="logo_link">Tjenesteweb</a>
        </h1>
        <ul data-testid="nav">
          <li data-testid="nav_services">
            <a data-testid="services_link">Tjenester</a>
          </li>
          <li data-testid="nav_new">
            <a data-testid="create_link">Ny</a>
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
      <div>
        <main>
          <h2 data-testid="service_title">Title</h2>
          <section>
            {/* TODO: Bytte ut med riktig dynamisk verdi */}
            <span data-testid="service_slogan">"Slogan"</span>
            <span>CEO, Tjenesteweb</span>
          </section>
          <section>
            {/* TODO: Bytte ut med riktig dynamisk verdi */}
            <p data-testid="service_preamble">PreAmble</p>
            {/* TODO: Bytte ut med riktig dynamisk verdi */}
            <h3 data-testid="service_content_title">InitialContent Tittel</h3>
            {/* TODO: Bytte ut med riktig dynamisk verdi */}
            <p data-testid="service_content_text">InitialContent Text</p>
            <article data-testid="service_text">
              {/* Her kommer tekst fra "text" laget i Ny */}
            </article>
          </section>
        </main>
        <aside>
          {/* TODO: Bytte ut Farge med riktig dynamisk verdi */}
          <div data-testid="service_box" data-color="Farge">
            Boks design
          </div>
        </aside>
      </div>
      <footer data-testid="footer">
        <p>Tjenesteweb AS, 2022</p>
        <p>99 00 00 00, mail@tjenesteweb.no</p>
      </footer>
    </>
  )
}
