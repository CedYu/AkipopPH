export default defineNuxtRouteMiddleware((to) => {
  const user = useSupabaseUser()

  console.log(user)
  if (user.value) {
    return navigateTo('/products')
  }
  if (user.value && to.path==='/account/login'){
    return navigateTo('/')
  }
  if (user.value && to.path==='/accounts/register.vue'){
    return navigateTo('/')
  }
})