function Cookie_Save(name, points) {
  let cookie = document.cookie
  cookie = cookie + name + ',' + points + ';'
}

function Cookie_Load(params) {
  let arr = []

  if (document.cookie.length === 0) {
    arr.push('No one has played this game yet :/')
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
}

function Cookie_Resolve(params) {
    
}

function Cookie_Create(params) {
    
}
