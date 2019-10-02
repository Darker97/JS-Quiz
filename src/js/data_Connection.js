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
export async function GET (url) {
  fetch(url) // Call the fetch function passing the url of the API as a parameter
    .then((resp) => resp.json())
    .then(function (resp) {
      console.log(resp)
      return (resp)
    })
    .catch(function () {
      // Error handeling
    })
}

/*
    {
        "answer": 2
    }
*/
export async function POST (input, link) {
  let data = input
  // Parameter
  let fetchData = {
    method: 'POST',
    body: data,
    headers: new Headers()
  }
  fetch(link, fetchData)
    .then((resp) => resp.json())
    .then(function (resp) {
      console.log(resp)
      return (resp)
    })
}