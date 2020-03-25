import axios from 'axios'

const HTTPClient = axios.create({
  baseURL: 'http://127.0.0.1:3333/api/',
  headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*', 'Cache-Control': 'no-cache', Pragma: 'no-cache' }
})

export { HTTPClient }
