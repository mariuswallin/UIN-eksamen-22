export default function App() {
  // TODO: Add nøvendig logikk

  return (
    <div data-testid="layout">
      <nav>
        <h1 data-testid="logo">
          <a href="#">Mikro LMS</a>
        </h1>
        <ul data-testid="nav">
          <li data-testid="nav_courses">
            <a href="#">Kurs</a>
          </li>
          <li data-testid="nav_new">
            <a href="#">Nytt kurs</a>
          </li>
        </ul>
      </nav>
      <main className="h-full">
        {/* TODO: Oppsett for React Router kommer her */}
      </main>
      <footer data-testid="footer">
        <p>Mikro LMS AS, 2022</p>
        <p>99 00 00 00, mail@lms.no</p>
      </footer>
    </div>
  )
}
