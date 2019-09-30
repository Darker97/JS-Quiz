var box = document.body

export function build_name(params) {
  // form with UserInput
  var input = document.createElement('input')

  input.type = 'radio'
  input.name = 'question'
  input.placeholder = 'Your Name?'

  input.addEventListener('input', function () {
    let text = input.value

  })
}

export function build_Menü(params) {
  // Welcome, button_start, bord
}

export function build_quiz(question, answer) {
  // wenn mehrere antworten möglich sind, bauen wir antwortmöglichkeiten
  // wenn nur eine nich
}

export function reset() {
  box = ''
}
