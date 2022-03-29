/* eslint-disable no-plusplus */
import { useEffect, useState } from 'react'
// TODO: createGame har en TODO som må ferdigstilles
import { createGame } from './starter_files/start'

export default function App() {
  const [game, setGame] = useState(null)

  // TODO: Legge til nødvendig logikk. Hvis nødvendig.

  useEffect(() => {
    // TODO: 0 må byttes ut med noe dynamisk
    setGame(createGame(0))
  }, [])

  return <h1>Sjekk starter_files</h1>
}
