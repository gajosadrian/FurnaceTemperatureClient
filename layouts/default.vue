<template>
  <div class="text-white-80">
    <b-navbar toggleable="lg" type="dark" fixed="bottom" class="bg-dark-40">
      <b-navbar-brand to="/">{{ $config.appName }}</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse" />

      <b-collapse v-if="$auth.user" id="nav-collapse" is-nav>
        <b-navbar-nav>
          <NuxtLink v-slot="{ navigate }" custom to="/">
            <b-nav-item @click="navigate">Home</b-nav-item>
          </NuxtLink>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown v-if="$auth.user" text="Profil" right>
            <b-dropdown-item @click="logout">Wyloguj</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <div class="mt-2" style="margin-bottom: 70px">
      <Nuxt />
    </div>
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',
  computed: {
    backgroundColor() {
      return this.$store.getters['furnace/backgroundColor']
    }
  },
  watch: {
    backgroundColor() {
      this.setBackgroundColor()
    }
  },
  mounted() {
    this.setBackgroundColor()
  },
  methods: {
    async logout() {
      await this.$auth.logout()
    },
    setBackgroundColor() {
      document.querySelector('body').style.backgroundColor =
        this.backgroundColor
    }
  }
}
</script>
