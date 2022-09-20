<template>
  <div>
    <WeatherHeader />
    <b-container style="margin-top: 150px">
      <FurnaceTemperature />
      <FurnaceDetails class="mt-5" />
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>
