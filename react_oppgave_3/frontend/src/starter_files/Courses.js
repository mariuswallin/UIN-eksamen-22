export default function Courses() {
  // TODO: Add nøvendig logikk

  return (
    <>
      <header>
        <h2 data-testid="title">Alle kurs</h2>
        <label htmlFor="filter">
          <span>Velg kategori:</span>
          <select id="filter" name="filter" data-testid="filter">
            <option value="">Alle</option>
            {/* TODO: Legg til flere kategorier - sjekk mappen data */}
          </select>
        </label>
      </header>
      <section data-testid="courses">
        {/* TODO: Vis alle kurs */}
        <article data-testid="course_wrapper">
          <span>[Kurskategori]</span>
          <h3 data-testid="courses_title">
            <a href="#">Kurstittel 1</a>
          </h3>
          <p data-testid="courses_description">Kursbeskrivelse 1</p>
          <a data-testid="courses_url" href="#">
            Til kurs
          </a>
        </article>
        {/* TODO: Vis hvis ingen kurs / ingen kurs på en gitt kategori */}
        <p data-testid="empty">Ingen kurs</p>
      </section>
    </>
  )
}
