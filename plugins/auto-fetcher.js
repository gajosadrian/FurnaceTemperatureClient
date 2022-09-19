const fetchData = ({ store, $config }) => {
  store
    .dispatch('furnace/fetchTemperature')
    .then()
    .catch(() => {})

  store
    .dispatch('furnace/fetchMode')
    .then()
    .catch(() => {})

  store
    .dispatch('furnace/fetchStartTime')
    .then()
    .catch(() => {})

  store
    .dispatch('weather/fetchWeather', {
      lat: $config.weather.lat,
      lng: $config.weather.lng
    })
    .then()
    .catch(() => {})
}

export default function ({ store, $config }) {
  setInterval(() => {
    fetchData({ store, $config })
  }, 1000 * 60)

  window.addEventListener('load', () => {
    setTimeout(() => {
      fetchData({ store, $config })
    }, 1000)
  })
}
