import * as cookie from './Data_Save.js'

/**
 * returns a view of type artikel
 */
export function view () {
  const temp = document.createElement('artikel')
  return temp
}

/**
 * returns button with a name
 * @param {String} name
 */
export function button (name) {
  const temp = document.createElement('button')
  temp.innerText = name
  return temp
}

/**
 * returns label with the text
 * @param {String} text
 */
export function label (text) {
  const temp = document.createElement('p')
  temp.innerText = text
  return temp
}
/**
 * returns a headline with the text
 * @param {String} text
 */
export function headline (text) {
  const temp = document.createElement('h2')
  temp.innerText = text
  return temp
}
/**
 * returns a headline3 with the text
 * @param {String} text
 */
export function headline3 (text) {
  const temp = document.createElement('h3')
  temp.innerText = text
  return temp
}

/**
 * builds an Input
 * @param {String} name
 */
export function input (name) {
  const temp = document.createElement('input')
  temp.type = 'text'
  temp.placeholder = name
  return temp
}

/**
 * returns a select Elements with the answers displayed
 * @param {String} question
 * @param {Array with Strings} answers
 */
export function multipleChoice (answers) {
  const arr = Object.values(answers)
  const temp = document.createElement('select')

  for (let i = 0; i < arr.length; i++) {
    const input = document.createElement('option')
    input.value = 'alt' + (i + 1).toString()
    input.text = arr[i]

    temp.appendChild(input)
  }
  return temp
}

/**
 * returns a timer with the ID: Clock
 * @param {String} time
 */
export function timerNew (time) {
  const temp = document.createElement('p')
  temp.id = 'timer'
  temp.innerText = time
  return temp
}
/**
 * updates the timer to the given Time
 * @param {String} time
 */
export function timerUpdate (time, timerObject) {
  timerObject.innerText = time
}

/**
 * returns the scoreboard elemnt with the ID scoreboard
 */
export function scoreboard () {
  const arr = cookie.cookieLoad()

  const list = document.createElement('ol')

  if (arr.length === 0) {
    list.appendChild(label('No one has played this game yet 🙁'))
  }

  for (let i = 0; i < arr.length; i++) {
    var temp = document.createElement('li')
    temp.innerText = arr[i].name + ' => ' + arr[i].points + ' Points'
    list.appendChild(temp)
  }
  list.id = 'scoreboard'
  return list
}

/**
 * inserts a line into your code
 */
export function line () {
  const temp = document.createElement('hr')
  return temp
}

/**
 * footer
 */
export function footer () {
  const temp = document.createElement('footer')
  temp.appendChild(headline('Made with 🖥 and ❤️'))
  temp.appendChild(label('Always Happy Coding'))
  return temp
}
