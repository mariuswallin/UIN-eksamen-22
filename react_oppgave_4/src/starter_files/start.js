/* eslint-disable no-plusplus */
/**
 *
 * Hjelpefunksjoner brukt til å lage knapper
 *
 */

const levels = [
  {
    squares: 1,
    colors: ['green'],
  },
  {
    squares: 8,
    colors: ['green', 'grey'],
  },
  {
    squares: 8,
    colors: ['green', 'grey', 'blue', 'purple', 'red'],
  },
]

const green = { point: 1, color: 'green' }
const red = { point: -1, color: 'red' }
const blue = { point: 2, color: 'blue' }
const purple = { point: 4, color: 'purple' }
const grey = { point: 0, color: 'grey' }

const random = (limit) => Math.floor(Math.random() * limit)

const createButton = (color) => {
  switch (color) {
    case 'green':
      return green
    case 'grey':
      return grey
    case 'red':
      return red
    case 'purple':
      return purple
    case 'blue':
      return blue
    default:
      break
  }
}

// TODO: Ferdigstill funksjonen under for å sjekke om kravene for Nivå 3 er oppfylt
/**
 *
 * At det er minst en knapp som gir poeng
 * At det er minst en rød knapp
 *
 */

const validGame = () => true

export const createGame = (currentLevel) => {
  let level = currentLevel
  if (currentLevel >= 2) {
    level = 2
  }
  const { squares } = levels[level]
  const { colors } = levels[level]
  const buttons = []
  for (let i = 0; i < squares; i++) {
    const button = createButton(colors[random(colors.length)])
    buttons.push(button)
  }
  const total = buttons.reduce((agg, item) => {
    if (item.point > 0) {
      return agg + item.point
    }
    return agg
  }, 0)

  if (level < 2) {
    return { buttons, total }
  }

  if (validGame()) {
    return { buttons, total }
  }
  return createGame(level)
}
