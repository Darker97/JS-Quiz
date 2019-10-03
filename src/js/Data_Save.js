export function cookieSave (name, points) {
  let cookie = document.cookie
  cookie = cookie + name + ',' + points + ';'
}

/**
 * returns an array with Objects, including the data from the cookie
 */
export function cookieLoad () {
  let arr = []

  if (document.cookie.length === 0) {
    return arr
  }
  let cookie = document.cookie
  cookie = cookie.split(';')
  for (let i = 0; i < cookie.length; i++) {
    let temp = new Object()

    const string = cookie[i].split(',')
    temp.name = string[0]
    temp.points = string[1]

    arr.push(temp)
  }
  return arr
}
