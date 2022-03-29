export default function SignUp() {
  // TODO: Legg til logikk for å håntere form, navigasjon, input, validering m.m
  // TODO: Styling m.m

  return (
    <section data-testid="sign_up">
      <h2 data-testid="title">Ny bruker</h2>
      <form data-testid="form" noValidate>
        <label htmlFor="name">
          <span>Navn*</span>
          <input data-testid="form_name" type="text" name="name" id="name" />
        </label>
        <label htmlFor="email">
          <span>Epost*</span>
          <input
            data-testid="form_email"
            type="email"
            name="email"
            id="email"
          />
        </label>
        <label htmlFor="admin">
          <input
            data-testid="form_admin"
            type="checkbox"
            name="admin"
            id="admin"
          />
          <span>Admin</span>
        </label>
        <button data-testid="form_submit" type="submit">
          Lag ny bruker
        </button>
        {/* TODO: Bruk ved error */}
        <p data-testid="form_error">Fyll ut alle felter med *</p>
        {/* TODO: Bruk ved suksess */}
        <p data-testid="form_success">Skjema sendt</p>
      </form>
    </section>
  )
}
