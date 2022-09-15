<template>
  <b-container class="mt-5">
    <b-alert :show="$nuxt.isOffline" variant="danger">
      Brak połączenia z internetem
    </b-alert>

    <b-form v-if="$nuxt.isOnline" @submit.prevent="login">
      <b-form-group label="E-mail">
        <b-input
          v-model="form.email"
          name="login"
          type="email"
          size="lg"
          required
        />
      </b-form-group>
      <b-form-group label="Hasło">
        <b-input
          v-model="form.password"
          name="password"
          type="password"
          size="lg"
          required
        />
      </b-form-group>
      <b-form-group>
        <b-button
          :disabled="sending.login || $nuxt.isOffline"
          variant="primary"
          type="submit"
          size="lg"
          block
        >
          <span v-if="!sending.login">Zaloguj</span>
          <b-spinner v-else small />
        </b-button>
      </b-form-group>
    </b-form>
  </b-container>
</template>

<script>
export default {
  name: 'LoginIndexPage',
  data() {
    return {
      form: {
        email: '',
        password: '',
        deviceName: 'test-device'
      },
      sending: {
        login: false
      }
    }
  },
  methods: {
    async login() {
      if (this.sending.login) return
      this.sending.login = true

      try {
        await this.$auth.loginWith('local', {
          data: this.form
        })
      } catch (e) {
        this.$swal({
          title: 'Problem z logowaniem',
          icon: 'error'
        })
      }

      this.sending.login = false
    }
  }
}
</script>
