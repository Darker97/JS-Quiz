import * as UI from 'UI'
import * as person from 'Person'

/* -------------------------- */
start()

/* -------------------------- */
var Workingobjekt = UI.view()
var User
/* -------------------------- */

function start () {
  document.body.appendChild(Workingobjekt)
  User = person(Phase1(), 0)
  Phase2()
  Phase3()
  Phase4()
}

/**
 * Login and Username
 */
function Phase1 () {
  Workingobjekt.UI.appendChild(UI.label('Welckome to the Game, please enter your username:'))
  const input = UI.input('UserName')
  Workingobjekt.UI.appendChild(input)

  input.addactionlistener('pressed', function () {
    return input.value
  })
}

/**
 * Main Menu and Scoreboard
 */
function Phase2 () {

}

/**
 * The Game itself
 */

function Phase3 () {

}

/**
 * Game Over
 * Return to Phase 2 or 3 for a new try
 */
function Phase4 () {

}
