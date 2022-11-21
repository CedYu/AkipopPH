<template>
  <div>
  <MagicLogin />
  </div>
</template>



<script setup>
definePageMeta({
  middleware:['auth']
})
const user=useSupabaseUser()
console.log(user)
onMounted(() =>{
  watchEffect(() => {
    if(user.value){
      navigateTo('/products')
    }
  })
})

</script>
