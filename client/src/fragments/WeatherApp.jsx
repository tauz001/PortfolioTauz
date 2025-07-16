import React, {useEffect, useState} from "react"
import "../WeatherApp.css"
import {WiHumidity, WiBarometer, WiStrongWind} from "react-icons/wi"
import {BsDroplet, BsThermometer, BsSun} from "react-icons/bs"
import clearImg from "../assets/pexels-photo-531767.jpeg"
import partlyCloudImg from "../assets/partly-cloud-image.jpeg"
import rainImg from "../assets/pexels-photo-39811.jpeg"

function WeatherApp() {
  const [current, setCurrent] = useState(null)
  const [city, setCity] = useState("Lucknow")
  const [search, setSearch] = useState("")
  const [lat, setLat] = useState(26.8467)
  const [lon, setLon] = useState(80.9462)
  const [time, setTime] = useState("")
  const [date, setDate] = useState("")
  const [uvi, setUvi] = useState(null)
  const [aqi, setAqi] = useState(null)
  const [humidity, setHumidity] = useState(null)
  const [pressure, setPressure] = useState(null)
  const [cloudcover, setCloudcover] = useState(null)
  const [skyCode, setSkyCode] = useState("")
  const [realFeel, setRealFeel] = useState(null)
  const [rainChance, setRainChance] = useState(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString("en-GB"))
      setDate(new Date().toLocaleDateString("en-GB"))
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  // Fetch coordinates when city changes
  useEffect(() => {
    if (!city) return
    const CoordinateAPI = `https://geocoding-api.open-meteo.com/v1/search?name=${city}`
    fetch(CoordinateAPI)
      .then(res => res.json())
      .then(data => {
        if (data.results && data.results[0]) {
          setLat(data.results[0].latitude)
          setLon(data.results[0].longitude)
        }
      })
  }, [city])

  // Fetch weather and extra info when coordinates change
  useEffect(() => {
    fetchWeather()
    // eslint-disable-next-line
  }, [lat, lon])

  const fetchWeather = () => {
    const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&hourly=uv_index,apparent_temperature,relative_humidity_2m,surface_pressure,cloudcover,precipitation_probability&timezone=auto`
    fetch(apiUrl)
      .then(res => res.json())
      .then(data => {
        setCurrent(data.current_weather)
        if (data.hourly && data.current_weather && data.current_weather.time) {
          const idx = getClosestHourlyIndex(data.hourly.time, data.current_weather.time)
          if (idx !== -1) {
            setUvi(data.hourly.uv_index[idx])
            setHumidity(data.hourly.relative_humidity_2m[idx])
            setPressure(data.hourly.surface_pressure[idx])
            setCloudcover(data.hourly.cloudcover[idx])
            setRainChance(data.hourly.precipitation_probability ? data.hourly.precipitation_probability[idx] : null)
            setRealFeel(data.hourly.apparent_temperature ? data.hourly.apparent_temperature[idx] : null)
          } else {
            setUvi(null)
            setHumidity(null)
            setPressure(null)
            setCloudcover(null)
            setRainChance(null)
            setRealFeel(null)
          }
        }
      })

    // Fetch AQI from Open-Meteo Air Quality API
    const aqiUrl = `https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${lat}&longitude=${lon}&hourly=pm10,pm2_5,us_aqi&timezone=auto`
    fetch(aqiUrl)
      .then(res => res.json())
      .then(data => {
        if (data.hourly && data.hourly.us_aqi && data.hourly.time) {
          // Find the closest AQI time to current time
          const idx = getClosestHourlyIndex(data.hourly.time, new Date().toISOString())
          if (idx !== -1) {
            setAqi(data.hourly.us_aqi[idx])
          } else {
            setAqi(null)
          }
        } else {
          setAqi(null)
        }
      })
  }

  const getClosestHourlyIndex = (hourlyTimes, currentTime) => {
    const curr = new Date(currentTime).getTime()
    let minDiff = Infinity
    let idx = -1
    hourlyTimes.forEach((t, i) => {
      const diff = Math.abs(new Date(t).getTime() - curr)
      if (diff < minDiff) {
        minDiff = diff
        idx = i
      }
    })
    return idx
  }

  useEffect(() => {
    if (cloudcover !== null) {
      if (cloudcover > 75) {
        setSkyCode(`url(${rainImg})`)
      } else if (cloudcover > 30) {
        setSkyCode(`url(${partlyCloudImg})`)
      } else {
        setSkyCode(`url(${clearImg})`)
      }
    } else {
      setSkyCode(`url(${clearImg})`)
    }
  }, [cloudcover])

  const handleSearch = () => {
    if (search.trim() !== "") {
      setCity(search.trim())
      setSearch("")
    }
  }

  return (
    <div className="weather-root-bg" style={{backgroundImage: skyCode}}>
      <div className="weather-app-main">
        {/* Header */}
        <div>
          <input type="text" placeholder="Search City" className="searchBar" value={search} onChange={e => setSearch(e.target.value)} onKeyDown={e => e.key === "Enter" && handleSearch()} aria-label="Search city" />
          <button className="searchBtn" onClick={handleSearch}>
            Search
          </button>
        </div>
        <div className="weather-app-header">
          <div>
            <h1 className="weather-app-title">{city}</h1>
            <p className="weather-app-date">{date}</p>
          </div>
          <div className="weather-app-date-time">
            <p className="weather-app-time">{time}</p>
          </div>
        </div>

        {/* Current Weather */}
        <div className="weather-app-current">
          <div>
            <div className="weather-app-temp">{current ? `${current.temperature}°C` : "--"}</div>
            <div className="weather-app-condition">{cloudcover !== null ? (cloudcover > 75 ? "Cloudy" : cloudcover > 30 ? "Partly Cloudy" : "Clear") : "--"}</div>
          </div>
        </div>

        {/* Weather Details Grid */}
        <div className="weather-app-details">
          <div className="weather-app-detail-card">
            <div className="detail-card-title">
              <WiStrongWind className="weather-icon" /> Wind
            </div>
            <div className="detail-card-value">{current ? `${current.windspeed} km/h` : "--"}</div>
            <div className="detail-card-extra">{current ? `${current.winddirection}°` : "--"}</div>
          </div>

          <div className="weather-app-detail-card">
            <div className="detail-card-title">
              <WiHumidity className="weather-icon" /> Humidity
            </div>
            <div className="detail-card-value">{humidity !== null ? `${humidity}%` : "--"}</div>
          </div>

          <div className="weather-app-detail-card">
            <div className="detail-card-title">
              <BsThermometer className="weather-icon" /> Real Feel
            </div>
            <div className="detail-card-value">{realFeel !== null ? `${realFeel}°C` : "--"}</div>
          </div>

          <div className="weather-app-detail-card">
            <div className="detail-card-title">
              <BsSun className="weather-icon" /> UV Index
            </div>
            <div className="detail-card-value">{uvi !== null ? uvi : "--"}</div>
            <div className="detail-card-extra">{uvi !== null ? (uvi < 3 ? "Low" : uvi < 6 ? "Moderate" : uvi < 8 ? "High" : "Very High") : "--"}</div>
          </div>
        </div>

        <div className="weather-app-divider"></div>

        {/* Additional Info */}
        <div className="weather-app-additional">
          <div className="weather-app-detail-card">
            <div className="detail-card-title">
              <WiBarometer className="weather-icon" /> Pressure
            </div>
            <div className="detail-card-value">{pressure !== null ? `${pressure} hPa` : "--"}</div>
          </div>

          <div className="weather-app-detail-card">
            <div className="detail-card-title">
              <BsDroplet className="weather-icon" /> Rain Chance
            </div>
            <div className="detail-card-value">{rainChance !== null ? `${rainChance}%` : "--"}</div>
          </div>

          <div className="weather-app-detail-card">
            <div className="detail-card-title">AQI</div>
            <div className="detail-card-value">{aqi !== null ? aqi : "--"}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WeatherApp
