import * as UI from './UI.js'
import * as person from './Person.js'

/* -------------------------- */
var Workingobjekt = UI.view()
var User
/* -------------------------- */

/* -------------------------- */
start()
/* -------------------------- */

function start () {
  document.body.innerHTML = ''
  document.body.appendChild(Workingobjekt)
  Phase1()
}

/**
 * Login and Username
 */
function Phase1 () {
  Workingobjekt.appendChild(UI.label('Welckome to the Game, please enter your username:'))
  const input = UI.input('UserName')
  const button = UI.button('Enter')

  Workingobjekt.appendChild(input)
  Workingobjekt.appendChild(button)
  button.addEventListener('click', function () {
    User = new person.Person(input.value, 0)
    Phase2()
  })
  input.addEventListener('submit', function () {
    User = new person.Person(input.value, 0)
    Phase2()
  })
}

/**
 * Main Menu and Scoreboard
 */
function Phase2 () {
  Workingobjekt.innerHTML = ''
  Workingobjekt.appendChild(UI.headline('Main Menu'))
  Workingobjekt.appendChild(UI.headline('Hello ' + User.name))
  Workingobjekt.appendChild(UI.label('Welcome to the game :D \n Lets start the quiz!'))

  let button = UI.button('New Game')
  Workingobjekt.appendChild(button)

  Workingobjekt.appendChild(UI.line())

  Workingobjekt.appendChild(UI.scoreboard())

  button.addEventListener('click', function () {
    Phase3()
  })
}

/**
 * The Game itself
 */

function Phase3 () {
  Workingobjekt.innerHTML = ''
}

/**
 * Game Over
 * Return to Phase 2 or 3 for a new try
 */
function Phase4 () {
}
