// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: ['animate.css/animate.min.css'],
  modules:['@nuxtjs/supabase'],
  app:{
    head:{
      charset:'utf-8', viewport:'width=500 initial-scale=1',
      title:'Akipop-PH',
      meta:[{
        name:'Akipop', content:'Anime Merchandise'
      }]
    }
  }
})
