import { colors } from '@/plugins/colors'

export const FurnaceMode = {
  INACTIVE: 'inactive',
  HEATING: 'heating',
  COOLING: 'cooling'
}

export const state = () => ({
  temperature: null,
  mode: null,
  startTime: null
})

export const getters = {
  backgroundColor(state) {
    switch (state.mode) {
      case FurnaceMode.HEATING:
        return colors.ORANGE
      case FurnaceMode.COOLING:
        return colors.BLUE
      default:
        return colors.GRAY
    }
  }
}

export const mutations = {
  setTemperature(state, { temperature }) {
    state.temperature = temperature
  },
  setMode(state, { mode }) {
    state.mode = mode
  },
  setStartTime(state, { startTime }) {
    state.startTime = startTime
  }
}

export const actions = {
  async fetchTemperature({ commit }) {
    const temperature = await this.$axios.$get('/api/furnace/temperature')

    commit('setTemperature', { temperature })

    return temperature
  },

  async fetchMode({ commit }) {
    const mode = await this.$axios.$get('/api/furnace/mode')

    commit('setMode', { mode })

    return mode
  },

  async fetchStartTime({ commit }) {
    const startTime = await this.$axios.$get('/api/furnace/start-time')

    commit('setStartTime', { startTime })

    return startTime
  }
}
