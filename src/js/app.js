import * as UI from './UI.js'
import * as person from './Person.js'
import * as connect from './data_Connection.js'

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
  let points = 0
  let questionObjekt = new Object()
  questionObjekt.nextURL = 'http://vhost3.lnu.se:20080/question/1'
  while (true) {
    // reset Page
    Workingobjekt.innerHTML = ''
    // Get next question
    questionObjekt = connect.GET(questionObjekt.nextURL)

    questionObjekt = questionObjekt.resolve

    setTimeout(function () {
      console.log(questionObjekt.toString)
      if ('answers' in questionObjekt !== true) {
        Workingobjekt.appendChild(UI.label(questionObjekt.question))
        let input = UI.input('Your answer')
        Workingobjekt.appendChild(input)

        input.addEventListener('submit', function () {
          let answer = connect.POST(input.value, questionObjekt.nextURL)
          if (answer.message === 'Correct answer!') {
            // TODO: add Timer - add left time
          }
        })
      } else {
        let input = UI.multipleChoice(questionObjekt.question, questionObjekt.alternatives)

        Workingobjekt.appendChild(input)
        input.addEventListener('submit', function () {
          let answer = connect.POST(input.value, questionObjekt.nextURL)
          if (answer.message === 'Correct answer!') {
            // TODO: add Timer - add left time
          }
        })
      }
    }, 5000)
    // End of the Game
    User.score = points
    break
  }
  Phase4()
}

/**
 * Game Over
 * Return to Phase 2 or 3 for a new try
 */
function Phase4 () {
}
