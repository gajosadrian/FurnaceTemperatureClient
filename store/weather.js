export const state = () => ({
  temperature: null,
  city: null,
  lat: null,
  lng: null
})

export const mutations = {
  setWeather(state, { weather }) {
    state.temperature = weather.temperature
    state.city = weather.city
    state.lat = weather.lat
    state.lng = weather.lng
  }
}

export const actions = {
  async fetchWeather({ commit }, { lat, lng }) {
    const weather = await this.$axios.$get('/api/weather/lat-lng', {
      params: { lat, lng }
    })

    commit('setWeather', { weather })

    return weather
  }
}
