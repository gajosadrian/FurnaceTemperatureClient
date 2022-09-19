import Vue from 'vue'

export const colors = {
  GRAY: '#4A4A4A',
  GRAY_DARKER: '#363739',
  BLUE: '#0093C7',
  BLUE_DARKER: '#115C79',
  ORANGE: '#F76707',
  ORANGE_DARKER: '#8D4618'
}

Vue.mixin({
  data() {
    return {
      $color: {
        gray: colors.GRAY,
        grayDarker: colors.GRAY_DARKER,
        blue: colors.BLUE,
        blueDarker: colors.BLUE_DARKER,
        orange: colors.ORANGE,
        orangeDarker: colors.ORANGE_DARKER
      }
    }
  }
})
