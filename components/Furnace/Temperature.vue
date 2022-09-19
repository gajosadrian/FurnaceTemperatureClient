<template>
  <div>
    <span class="font-weight-light" style="font-size: 8em">
      <span v-if="temperature">
        {{ temperature | temperature }}
      </span>
      <span v-else>
        <b-icon icon="question" />
      </span>
    </span>
    <span style="font-size: 2em">
      <span v-if="isHeating">
        <b-icon icon="arrow-up-right" />
      </span>
      <span v-else-if="isCooling">
        <b-icon icon="arrow-down-right" />
      </span>
      <span v-else>
        <b-icon icon="power" variant="danger" />
      </span>
    </span>
  </div>
</template>

<script>
import { FurnaceMode } from '@/store/furnace'

export default {
  name: 'FurnaceTemperature',
  filters: {
    temperature(val) {
      if (val === null) {
        return '??'
      }
      return `${Math.round(val)}°`
    }
  },
  computed: {
    temperature() {
      return this.$store.state.furnace.temperature
    },
    mode() {
      return this.$store.state.furnace.mode
    },
    isHeating() {
      return this.mode === FurnaceMode.HEATING
    },
    isCooling() {
      return this.mode === FurnaceMode.COOLING
    },
    isInactive() {
      return this.mode === FurnaceMode.INACTIVE
    }
  }
}
</script>
