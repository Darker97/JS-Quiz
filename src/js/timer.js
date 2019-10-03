import { finishedFail } from './app.js'

var timerAcctive = false
var counter = 20

/**
 * starts a timer
 * @param {UI-Timer} TimerObject
 */
export function Timer (TimerObject) {
  timerAcctive = true
  counter = 20
  TimerStart(TimerObject)
}

function TimerStart (TimerObject) {
  while (timerAcctive === true) {
    timerAcctive = true
    setInterval(function () {
      counter = counter - 1
      TimerObject.timerUpdate(counter)
    }, 1000)
    if (counter < 0) {
      finishedFail()
    }
  }
}

export function TimerStop () {
  timerAcctive = false
  return counter
}
