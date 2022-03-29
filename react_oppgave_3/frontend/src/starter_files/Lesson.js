export default function Lesson() {
  // TODO: Add nøvendig logikk
  return (
    <div>
      <div>
        <h3 data-testid="course_title">
          <a href="#">Kurstittel</a>
        </h3>
        <span data-testid="course_category">
          Kategori: <span>Kurskategori</span>
        </span>
      </div>
      <h2 data-testid="lesson_title">Leksjonstittel</h2>
      <p data-testid="lesson_preAmble">Leksjon Ingress</p>
      {/* TODO: Liste opp tekster */}
      <p data-testid="lesson_text">Leksjon tekst 1</p>
      <section data-testid="comments">
        <h4>Kommentarer (Antall kommentarer)</h4>
        <form data-testid="comment_form" noValidate>
          <label htmlFor="name">
            <span>Navn*</span>
            <input data-testid="form_name" type="text" name="name" id="name" />
          </label>
          <label htmlFor="comment">
            <span>Legg til kommentar*</span>
            <textarea
              data-testid="form_textarea"
              type="text"
              name="comment"
              id="comment"
              cols="30"
            />
          </label>
          <button data-testid="form_submit" type="submit">
            Legg til kommentar
          </button>
          {/* TODO: Vise ved feil */}
          <p data-testid="form_error">Fyll ut alle felter med *</p>
          {/* TODO: Vise ved suksess */}
          <p data-testid="form_success">Skjema sendt</p>
        </form>
        {/* TODO: Liste opp kommentarer */}
        <ul data-testid="comments_list">
          <li>
            <h5>Kommentar 1 - Avsender</h5>
            <p data-testid="user_comment">Kommentar 1 - Tekst</p>
          </li>
        </ul>
      </section>
    </div>
  )
}
