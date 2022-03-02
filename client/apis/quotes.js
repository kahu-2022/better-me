import request from 'superagent'

export function getQuotes () {
  return request.get('https://type.fit/api/quotes').then((response) => {
    return JSON.parse(response.text)
  })
}
