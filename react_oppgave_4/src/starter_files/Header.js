// TODO: Nødvendig props
// TODO: Dynamisk verdi må byttes ut

export default function Header() {
  // TODO: Legge til nødvendig logikk. Hvis nødvendig.

  return (
    <header className="mt-6 p-4">
      <h1 data-testid="title" className="font-base text-lg">
        <span
          data-testid="points"
          className="border border-slate-200 px-4 py-2 font-bold"
        >
          Dynamisk verdi
        </span>
        poeng (<span data-testid="total">Dynamisk verdi</span>)
      </h1>
    </header>
  )
}
