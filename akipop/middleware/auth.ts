export default defineNuxtRouteMiddleware((to) => {
  const user = useSupabaseUser()

  console.log(user.value)
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