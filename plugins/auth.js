export default async function ({ $auth, $axios }) {
  $axios.onError((e) => {
    if (e.response?.status === 401) {
      $auth.reset()
    }
  })

  try {
    await $auth.fetchUser()
  } catch (e) {}
}
