// TODO: Nødvendig props

export default function Game() {
  // TODO: Legge til nødvendig logikk. Hvis nødvendig.

  return (
    <div data-testid="game" className="grid grid-cols-4 gap-6">
      {/* TODO: Må skrive ut antall knapper et spill skal vise */}
      {/* TODO: Må bruke riktig komponent og sende data som props */}
      
      {/* TODO: Kun vise denne knappen når en runde er ferdig */}
      <button
        className="col-span-4 w-full rounded-xl border-2 border-emerald-100 p-8 text-lg font-bold text-emerald-500 shadow-lg shadow-emerald-100"
        type="button"
        data-testid="next"
      >
        Neste runde
      </button>
    </div>
  )
}
