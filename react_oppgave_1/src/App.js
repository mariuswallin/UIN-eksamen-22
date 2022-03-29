import { useState } from 'react'

export default function App() {
  // TODO: Gjør nødvendige endringer slik at 'Chocolate' vise i tittel når applikasjonen starter
  const [flavour, setFlavour] = useState('')
  // TODO: Gjør nødvendige endringer slik at bakgrunnen på isen er chocolate når applikasjonen starter
  const [css, setCss] = useState('')

  // TODO: Trigg funksjonen under ved endring i select
  const handleFlavourChange = (event) => {
    const { value } = event.target
    // TODO: Gjør nødvendig endring slik at tittel blir oppdatert med verdien valgt i select
    setFlavour('')

    // #### DO NOT CHANGE -- Ikke gjør endringer på koden under
    const cssFlavour = getComputedStyle(
      document.documentElement
    ).getPropertyValue(`--${value}`)
    const cssBackground = getComputedStyle(
      document.documentElement
    ).getPropertyValue(`--bg-${value}`)
    document.documentElement.style.setProperty('--flavour', `${cssFlavour}`)
    document.documentElement.style.setProperty('--bg', `${cssBackground}`)
    setCss(value)
    // #### DO NOT CHANGE END
  }

  // TODO: Gjør om til komponenter. HINT: Se på testid navnene som matcher krav til komponenter
  return (
    <div className="layout" data-testid="layout">
      <section id="options" data-testid="options">
        {/* TODO: Skal vise oppdatert tittel. Nå er den hardkodet */}
        <h1 data-testid="title">Her kommer tittel</h1>
        {/* TODO: Håndtere endringer i dropdown */}
        <div
          className="option"
          data-testid="flavours"
          id="flavours"
        >
          <label htmlFor="flavour">
            <select defaultValue="chocolate" id="flavour" data-testid="flavour">
              {/* TODO: Lag statisk liste med verdiene under. Bruk .map og key. Alle verdiene i option må være med */}
              <option data-testid="option" value="strawberry">
                Jordbær
              </option>
              <option data-testid="option" value="banana">
                Banan
              </option>
              <option data-testid="option" value="lime">
                Lime
              </option>
              <option data-testid="option" value="blueberry">
                Blåbær
              </option>
              <option data-testid="option" value="chocolate">
                Sjokolade
              </option>
            </select>
          </label>
        </div>
      </section>
      <main>
        <div className="ice-cream" data-testid="ice-cream">
          <div className="stick" />
          <div className="vanilla" />
          <div
            data-testid="ice-cream-flavour"
            className="flavour"
            data-css={css}
          />
        </div>
      </main>
    </div>
  )
}
