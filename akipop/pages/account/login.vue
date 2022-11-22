<template>
  <div>
  <MagicLogin/>
  </div>
</template>



<script setup>
definePageMeta({
  middleware:['auth']
})
const user=useSupabaseUser()
onMounted(() =>{
  watchEffect(() => {
    if(user.value){
      navigateTo('/products')
    }
  })
})

</script>
