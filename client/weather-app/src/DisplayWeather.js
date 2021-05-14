import './DisplayWeather.css'

function DisplayWeather(props) {
  if (props.cod !== 200) {
    return (
      <div className="DisplayWeather">
        <small className="warning">{props.cod} {props.message}</small>
      </div>
    )
  }
  return (
    <div className="DisplayWeather">
      <h1>temp:  {props.temp}</h1> 
      <h1>description:  {props.desc}</h1>
    </div>
  )
}

export default DisplayWeather;
