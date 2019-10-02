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
  // reset Page
  Workingobjekt.innerHTML = ''
  fetch(questionObjekt.nextURL)
    .then((resp) => resp.json())
    .then(function (resp) {
      console.log(resp)
      questionObjekt = resp
    })
    .then(function () {
      if ('answers' in questionObjekt !== true) {
        Workingobjekt.appendChild(UI.label(questionObjekt.question))
        let input = UI.input('Your answer')
        Workingobjekt.appendChild(input)

        input.addEventListener('click', function () {
        // ___________________________ => start of answer
          let temp = new Object()
          temp.answer = input.value

          let fetchData = {
            method: 'POST',
            body: JSON.stringify(temp),
            headers: {
              'Content-Type': 'application/json'
            }
          }
          fetch(questionObjekt.nextURL, fetchData)
            .then((resp) => resp.json())
            .then(function (resp) {
              console.log(resp)
            })
        })
      // ___________________________ => end of answer
      } else {
        let input = UI.multipleChoice(questionObjekt.question, questionObjekt.alternatives)

        Workingobjekt.appendChild(input)
        input.addEventListener('click', function () {
          // TODO: WHAT TO DO WHEN THIS WORKS?
        })
      }
    })
  // End of the Game
  Phase4()
}

/**
 * Game Over
 * Return to Phase 2 or 3 for a new try
 */
function Phase4 () {
}
