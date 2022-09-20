<template>
  <div>
    <ul v-if="isActive" class="list-unstyled">
      <li>
        <span class="font-weight-light">Czas pracy:</span>
        {{ $moment(startTime).fromNow(true) }}
        ({{ $moment(startTime).calendar() }})
      </li>
      <li class="mt-2">
        <span v-if="isHeating">Piec nagrzewa się</span>
        <span v-else-if="isCooling">Piec chłodzi się</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { FurnaceMode } from '@/store/furnace'

export default {
  name: 'FurnaceDetails',
  computed: {
    startTime() {
      return this.$store.state.furnace.startTime
    },
    mode() {
      return this.$store.state.furnace.mode
    },
    isActive() {
      if (!this.mode) return false
      return this.mode !== FurnaceMode.INACTIVE
    },
    isHeating() {
      return this.mode === FurnaceMode.HEATING
    },
    isCooling() {
      return this.mode === FurnaceMode.COOLING
    }
  }
}
</script>
