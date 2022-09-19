<template>
  <b-navbar type="dark" fixed="top" class="bg-dark-40 text-white">
    <b-navbar-brand>
      {{ city }}
    </b-navbar-brand>

    <b-navbar-nav class="ml-auto">
      <b-nav-item active>
        {{ temperature | temperature }}
      </b-nav-item>
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
export default {
  name: 'WeatherHeader',
  filters: {
    temperature(val) {
      if (val === null) return ''
      return `${Math.round(val)}°`
    }
  },
  computed: {
    city() {
      return this.$store.state.weather.city
    },
    temperature() {
      return this.$store.state.weather.temperature
    }
  }
}
</script>
