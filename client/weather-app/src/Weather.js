import { useState } from 'react'
import { gql } from '@apollo/client'
import { client } from './index'
import './Weather.css'
import DisplayWeather from './DisplayWeather.js'
import './DisplayWeather'

// handles a request to the weather server 
function Weather() {
  // state handles form input and the weather data
  const [ zip, setZip ] = useState('')
  const [ weather, setWeather ] = useState(null)

  // function to handle requests to GraphQL server 
  async function getWeather() {
    try {
      const json = await client.query({
        query: gql`
          query {
            getWeather(zip:${zip}) {
              temperature
              description
            }
          }
        `
      })
      setWeather(json)
    } catch(err) {
      console.log(err.message)
    }
  }

  return (
    <div className="Weather">
    {weather ? <h1>{weather.data.getWeather.temperature}</h1>: null}
      <form onSubmit={(e) => {
        e.preventDefault()
        getWeather()
      }}>
      <input 
        value={zip}
        onChange={(e) => setZip(e.target.value)}
      />
      <button type="submit">Submit</button>
      </form>
      {weather ? <DisplayWeather { ...weather } /> : null}
    </div>
  );
}

export default Weather;