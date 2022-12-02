<template>
  <div class="follow-container">
    <h1 class="connect">{{ heading }}</h1>
    <h1 class="fb-head" id="sitename">{{ heading1 }}</h1>
    <h1 class="tk-head" id="sitename">{{ heading2 }}</h1>
    <h1 class="ig-head" id="sitename">{{ heading3 }}</h1>
    <h1 class="sh-head" id="sitename">{{ heading4 }}</h1>
    <a href="https://www.facebook.com/akipopph" target="_blank"><img :src="'../facebook.png'" :alt="facebook" class="fb-image" /></a>
    <a href="https://www.tiktok.com/@akipopph" target="_blank"><img :src="'../tiktok.png'" :alt="tiktok" class="tk-image" /></a>
    <a href="https://www.instagram.com/akipopph/" target="_blank"><img :src="'../instagram.png'" :alt="instagram" class="ig-image" /></a>
    <a href="https://shopee.ph/akipopph" target="_blank"><img :src="'../shopee.png'" :alt="shopee" class="sh-image" /></a>
    <span class="fb-text" id="handle">{{ text }}</span>
    <span class="tk-text" id="handle">{{ text1 }}</span>
    <span class="ig-text" id="handle">{{ text2 }}</span>
    <span class="sh-text" id="handle">{{ text3 }}</span>
  </div>
</template>

<script>
export default {
  name: 'Follow',
  props: {
    heading: {
      type: String,
      default: 'CONNECT WITH US',
    },
    text: {
      type: String,
      default: '@akipopph',
    },
    text1: {
      type: String,
      default: '@akipopph',
    },
    text2: {
      type: String,
      default: '@akipopph',
    },
    text3: {
      type: String,
      default: '@akipopph',
    },
    heading1: {
      type: String,
      default: 'FACEBOOK',
    },
    heading2: {
      type: String,
      default: 'TIKTOK',
    },
    heading3: {
      type: String,
      default: 'INSTAGRAM',
    },
    heading4: {
      type: String,
      default: 'SHOPEE',
    },
    facebook:{
      type:String
    },
    tiktok:{
      type:String
    },
    instagram:{
      type:String
    },
    shopee:{
      type:String
    }
  },
}
</script>

<style scoped>
.follow-container {
  width: 100%;
  height: 536px;
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}

#sitename{
  font-family: lemonmilk;
  color: #e95a85;
}

#handle{
  font-family: lemonmilk;
  margin-top: 10px;
}
.connect{
  font-family: lemonmilk;
  font-size: 40px;
  color: #2C3E50;
}
.fb-head {
  top: 120px;
  left: 500px;
  position: absolute;
}
.fb-image {
  top: 115px;
  left: 350px;
  width: 100px;
  position: absolute;
  object-fit: cover;
}
.fb-text {
  top: 170px;
  left: 500px;
  position: absolute;
}

.tk-head {
  top: 311px;
  left: 500px;
  position: absolute;
}
.tk-image {
  top: 305px;
  left: 350px;
  width: 100px;
  position: absolute;
  object-fit: cover;
}
.tk-text {
  top: 362px;
  left: 500px;
  position: absolute;
}

.ig-head {
  top: 115px;
  left: 950px;
  position: absolute;
}
.ig-image {
  top: 112px;
  left: 800px;
  width: 100px;
  position: absolute;
  align-self: flex-start;
  object-fit: cover;
}
.ig-text {
  top: 165px;
  left: 950px;
  position: absolute;
}

.sh-head {
  top: 312px;
  left: 950px;
  position: absolute;
}
.sh-image {
  top: 297px;
  left: 800px;
  width: 100px;
  position: absolute;
  align-self: flex-start;
  object-fit: cover;
}
.sh-text {
  top: 363px;
  left: 950px;
  position: absolute;
}
</style>