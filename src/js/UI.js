import * as connection from 'data_connection.js'

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
export function multipleChoice (question, answers) {
  const arr = answers
  const temp = document.createElement('select')

  for (let i = 0; i < arr.length; i++) {
    const input = document.createElement('option')
    input.value = arr[i]
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
  // TODO: Timer UI
}
/**
 * updates the timer to the given Time
 * @param {String} time
 */
export function timerUpdate (time) {
  // TODO: Timer UI update
}

export function scoreboard () {
  let arr = connection.Cookie_Load()
  arr = []
  const list = document.createElement('li')

  for (let i = 0; i < arr.length; i++) {
    var temp = document.createElement('ol') 
    temp.innerText = arr[i].name + '      ' + arr[i].points
  }
  list.id = 'scoreboard'
  return list
}

export function reset () {
  this.innerhtml = ''
}
