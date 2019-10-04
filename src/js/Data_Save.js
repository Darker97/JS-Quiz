export function cookieSave (name, points) {
  let cookie = cookieLoad()
  document.cookie = ''

  let temp = new Object()
  temp.name = name
  temp.points = points

  cookie.push(temp)
  cookie.sort(function (a, b) { return a.points - b.points })

  if (cookie.length > 5) {
    cookie.pop()
  }

  cookie.forEach(element => {
    document.cookie = document.cookie + element.name + ',' + element.points + '-'
  })

  // BUG: If we don't remove the last - the split dowsn't work
  // FIXED: we remove the -
  document.cookie = document.cookie.substring(0, document.cookie.length - 1)
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
  cookie = cookie.split('-')
  for (let i = 0; i < cookie.length; i++) {
    let temp = new Object()

    const string = cookie[i].split(',')
    temp.name = string[0]
    temp.points = string[1]

    arr.push(temp)
  }
  return arr
}
