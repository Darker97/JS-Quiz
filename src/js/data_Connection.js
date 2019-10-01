/*
    {
        "id": 1,
        "question": "What is 1+1?",
        "alternatives": {
            "alt1": 2,
            "alt2": 8,
            "alt3": 10,
            "alt4": 28
        },
        "nextURL": "http://vhost3.lnu.se:20080/answer/1",
        "message": "You got your question! Now send me the answer via HTTP POST to the nextURL in JSON-format"
    }
*/
export function GET (data, link) {
  let request = new XMLHttpRequest()
  request.withCredentials = true

  request.addEventListener('stateChanged', function () {
    if (this.readyState === this.DONE) {
      return (Resolve(this.responseText))
    }
  })

  request.open('GET', link)
  request.send(data)
}

/*
    {
        "answer": 2
    }
*/
export function POST (Input, link) {
  const data = JSON.stringify(Input)

  let request = new XMLHttpRequest()
  request.withCredentials = true

  request.addEventListener('readystatechange', function () {
    if (this.readyState === this.DONE) {
      return (Resolve(this.responseText))
    }
  })

  request.open('POST', link)
  request.setRequestHeader('content-type', 'application/json')

  request.send(data)
}

function Resolve (params) {
  let Objekt = new Object()
  Objekt = JSON.parse(params)
  return Objekt
}
