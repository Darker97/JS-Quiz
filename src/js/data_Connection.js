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
function GET (data, link) {
  let request = new XMLHttpRequest()
  request.withCredentials = true

  request.addEventListener("readystatechange", function () {
    if (this.readyState === this.DONE) {
      let temp = Resolve(this.responseText)
      return (temp)
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
function POST(data, link) {
  let data = JSON.stringify(data)
    
  var request = new XMLHttpRequest();
  request.withCredentials = true;
 
  request.addEventListener("readystatechange", function () {
    if (this.readyState === this.DONE) {
      let temp = Resolve(this.responseText)
      return (temp)
    }
  })

  request.open("POST", link)
  request.setRequestHeader("content-type", "application/json")

  request.send(data)
}

function Resolve(params) {
    let Objekt = new Objekt()
    Objekt = JSON.parse(params)
    return Objekt
}