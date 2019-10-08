import * as UI from './UI.js'
import * as person from './Person.js'
import { cookieSave } from './Data_Save.js'
import { Timer, TimerStop } from './timer.js'

/* -------------------------- */
var Workingobjekt = UI.view()
var User
var questionObjekt = new Object()
/* -------------------------- */

/* -------------------------- */
start()
/* -------------------------- */

function start () {
  // document.body.innerHTML = ''
  document.body.appendChild(Workingobjekt)
  document.body.appendChild(UI.footer())
  Phase1()
}

/**
 * Login and Username
 */
function Phase1 () {
  Workingobjekt.appendChild(UI.label('Welcome to the Game, please enter your username:'))
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
  Workingobjekt.appendChild(UI.headline3('Hello ' + User.name))
  Workingobjekt.appendChild(UI.label('Welcome to the game :D \n Lets start the quiz!'))

  const button = UI.button('New Game')
  Workingobjekt.appendChild(button)

  Workingobjekt.appendChild(UI.line())

  Workingobjekt.appendChild(UI.headline3('Scoreboard'))
  Workingobjekt.appendChild(UI.scoreboard())

  button.addEventListener('click', function () {
    questionObjekt.nextURL = 'http://vhost3.lnu.se:20080/question/1'
    Phase3()
  })
}

/**
 * The Game itself
 */

function Phase3 () {
  // -------------------------------------
  // reset Page
  Workingobjekt.innerHTML = ''
  fetch(questionObjekt.nextURL)
    .then((resp) => resp.json())
    .then(function (resp) {
      console.log(resp)
      questionObjekt = resp
    })
    .then(function () {
      // Just a simple question?

      // Start the Timer
      const temp = UI.timerNew('20')
      Workingobjekt.appendChild(temp)
      Timer(temp)

      if ('alternatives' in questionObjekt !== true) {
        // Build the Webpage
        Workingobjekt.appendChild(UI.label(questionObjekt.question))
        const input = UI.input('Your answer')
        Workingobjekt.appendChild(input)
        const button = UI.button('send')
        Workingobjekt.appendChild(button)

        // Button is clicked, we continue
        button.addEventListener('click', function () {
          // ___________________________ => start of answer
          const temp = new Object()
          temp.answer = input.value

          const fetchData = {
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

              // answer is wrong, continue to finishedFail
              if (resp.message === 'Wrong answer! :(') {
                TimerStop()
                finishedFail()
                return
              }
              // answer is last, continue to finishedSucces
              if (resp.message === 'Correct answer!' && typeof resp.nextURL === 'undefined') {
                finishedSucces()
                User.score = User.score + TimerStop()
                return
              }
              User.score = User.score + TimerStop()
              questionObjekt = resp
              Phase3()
            })
        })
      } else {
        // Multiple choice
        Workingobjekt.appendChild(UI.label(questionObjekt.question))
        const input = UI.multipleChoice(questionObjekt.alternatives)

        Workingobjekt.appendChild(input)
        const button = UI.button('send')
        Workingobjekt.appendChild(button)

        // Button is clicked, we continue
        button.addEventListener('click', function () {
          // ___________________________ => start of answer
          const temp = new Object()
          temp.answer = input.value

          const fetchData = {
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

              // answer is wrong, continue to finishedFail
              if (resp.message === 'Wrong answer! :(') {
                TimerStop()
                finishedFail()
                return
              }
              // answer is last, continue to finishedSucces
              if (resp.message === 'Correct answer!' && typeof resp.nextURL === 'undefined') {
                finishedSucces()
                User.score = User.score + TimerStop()
                return
              }
              User.score = User.score + TimerStop()
              questionObjekt = resp
              Phase3()
            })
        })
      }
    })
    // ___________________________ => end of answer
}

/**
 * Game Over
 * Return to Phase 2 or 3 for a new try
 */
export function finishedFail () {
  // reset Page
  Workingobjekt.innerHTML = ''
  Workingobjekt.appendChild(UI.label('Wrong answer 🙁'))
  Workingobjekt.appendChild(UI.label('better Luck next time 🍀'))
  Workingobjekt.appendChild(UI.label('Wanna play again?'))
  const buttonPlay = UI.button('Play again 😎')
  const buttonMenu = UI.button('Main Menu 🖥')

  Workingobjekt.appendChild(buttonPlay)
  Workingobjekt.appendChild(buttonMenu)

  buttonPlay.addEventListener('click', function () {
    User.score = 0
    questionObjekt.nextURL = 'http://vhost3.lnu.se:20080/question/1'
    Phase3()
  })
  buttonMenu.addEventListener('click', function () {
    User.score = 0
    Phase2()
  })
}
/**
 * Game End
 * score is saved and you can play the next game
 */
function finishedSucces () {
  // reset Page
  Workingobjekt.innerHTML = ''
  Workingobjekt.appendChild(UI.headline('you did it 🥳'))
  Workingobjekt.appendChild(UI.label('Your score is: ' + User.score))
  cookieSave(User.name, User.score)

  Workingobjekt.appendChild(UI.label('Wanna play again?'))
  const buttonPlay = UI.button('Play again 😎')
  const buttonMenu = UI.button('Main Menu 🖥')

  Workingobjekt.appendChild(buttonPlay)
  Workingobjekt.appendChild(buttonMenu)

  buttonPlay.addEventListener('click', function () {
    User.score = 0
    questionObjekt.nextURL = 'http://vhost3.lnu.se:20080/question/1'
    Phase3()
  })
  buttonMenu.addEventListener('click', function () {
    User.score = 0
    Phase2()
  })
}
