<template>
  <div>
    <h1>
      <span v-if="fetching">
        <b-spinner />
      </span>
      <span v-else>
        {{ temperature | temperature }}
      </span>
    </h1>
  </div>
</template>

<script>
export default {
  name: 'FurnaceTemperature',
  filters: {
    temperature(val) {
      if (val === null) {
        return '??'
      }
      return `${Math.round(val)} °C`
    }
  },
  data() {
    return {
      temperature: null,
      fetching: false
    }
  },
  created() {
    this.fetchTemperature()
  },
  methods: {
    async fetchTemperature() {
      this.fetching = true
      try {
        this.temperature = await this.$axios.$get('/api/furnace/temperature')
      } catch (e) {}
      this.fetching = false
    }
  }
}
</script>
