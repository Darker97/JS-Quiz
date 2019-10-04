import { finishedFail } from './app.js'
import { timerUpdate } from './UI.js'

var timerAcctive = false
var counter = 20

/**
 * starts a timer
 * @param {UI-Timer} TimerObject
 */
export function Timer (ObjectTimer) {
  timerAcctive = true
  TimerObject = ObjectTimer
  counter = 21
  TimerStart()
}

let TimerObject
let Timeout

/**
 * Will get the TimerObject and control the timer.
 * @param {UI Object} TimerObject
 */
function TimerStart () {
  if (timerAcctive === true) {
    if (counter === 0) {
      timerAcctive = false
      finishedFail()
      return
    }
    counter = counter - 1
    timerUpdate(counter, TimerObject)
    Timeout = setTimeout(TimerStart, 1000)
  }
}

export function TimerStop () {
  timerAcctive = false
  clearTimeout(Timeout)
  return counter
}
