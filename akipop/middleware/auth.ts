export default defineNuxtRouteMiddleware((to) => {
  const user = useSupabaseUser()

  console.log(user)
  if (!user.value) {
    return navigateTo('/products')
  }
})