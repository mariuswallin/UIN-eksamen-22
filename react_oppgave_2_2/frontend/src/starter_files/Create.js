import { hexColors } from '../../../../react_oppgave_2_del_1/src/data/services'

// TODO: Denne egner seg for /ny

export default function Create() {
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
      <main>
        <h2 data-testid="title">Ny tjeneste</h2>
        {/* TODO: Gjør det mulig å sende skjema med alt av verdier */}
        <form data-testid="form" noValidate>
          <label htmlFor="title">
            <span>Tittel*</span>
            <input
              data-testid="form_title"
              type="text"
              name="title"
              id="title"
            />
          </label>
          <label htmlFor="slug">
            <span>Slug*</span>
            <input data-testid="form_slug" type="text" name="slug" id="slug" />
          </label>
          <label htmlFor="preAmble">
            <span>Ingress*</span>
            <input
              data-testid="form_preAmble"
              type="text"
              name="preAmble"
              id="preAmble"
            />
          </label>
          <label htmlFor="slogan">
            <span>Slogan*</span>
            <input
              data-testid="form_slogan"
              type="text"
              name="slogan"
              id="slogan"
            />
          </label>
          <label htmlFor="box">
            <span>Farge på boks*</span>
            <select data-testid="form_box" name="box" id="box">
              <option disabled value="">
                Velg hex-farge
              </option>
              {hexColors.map((hex) => (
                <option key={hex} value={hex}>
                  {hex}
                </option>
              ))}
            </select>
          </label>
          <button data-testid="form_submit" type="submit">
            Lag tjeneste
          </button>
          {/* TODO: Vis riktig p avhengig av tilstanden */}
          <p data-testid="form_error">Fyll ut alle felter med *</p>
          <p data-testid="form_success">Skjema sendt</p>
        </form>
      </main>
      <footer data-testid="footer">
        <p>Tjenesteweb AS, 2022</p>
        <p>99 00 00 00, mail@tjenesteweb.no</p>
      </footer>
    </>
  )
}
