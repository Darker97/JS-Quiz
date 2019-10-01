import * as connection from 'data_connection.js'

export function view () {
  const temp = document.createElement('artikel')
  return temp
}

export function button (name) {
  const temp = document.createElement('button')
  temp.name = name
  return temp
}

export function label (text) {
  const temp = document.createElement('p')
  temp.innerText = text
  return temp
}

export function input (name) {
  const temp = document.createElement('input')
  temp.type = 'text'
  temp.placeholder = name
  return temp
}

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

export function timer_New (time) {
  // TODO: Timer UI
}

export function timer_Update (time) {
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
