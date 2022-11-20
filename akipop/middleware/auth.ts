export default defineNuxtRouteMiddleware((to) => {
  const user = useSupabaseUser()
  if (user.value && to.path==='/account/login'){
    return navigateTo('/')
  }
  if (user.value && to.path==='/account/register'){
    return navigateTo('/')
  }
  if (user.value) {
    return navigateTo('/products')
  }
})