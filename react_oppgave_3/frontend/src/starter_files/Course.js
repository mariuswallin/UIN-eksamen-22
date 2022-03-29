export default function Course() {
  // TODO: Add nøvendig logikk

  return (
    <div>
      <aside>
        <h3>Leksjoner</h3>
        <ul data-testid="lessons">
          {/* TODO: Vis alle leksjoner til kurset */}
          <li>
            <a data-testid="lesson_url" data-slug="Dynamisk verdi" href="#">
              Leksjonstittel
            </a>
          </li>
        </ul>
      </aside>
      <section>
        {/* TODO: START - Vis kun om vi er på /kurs/kurs-slug ikke når vi er på /kurs/kurs-slug/leksjons-slug */}
        <h2 data-testid="course_title">Kurstittel</h2>
        <p data-testid="course_description">Kursbeskrivelse</p>
        {/* TODO: SLUTT */}
        {/* TODO: Vis leksjonens innhold her. HINT: Sjekk React Router Outlet */}
      </section>
      <aside data-testid="enrollments">
        <h3>Deltakere</h3>
        <ul data-testid="course_enrollments">
          {/* TODO: Vis alle deltakere (se mappen data) */}
          <li>Navn på bruker</li>
        </ul>
      </aside>
    </div>
  )
}
