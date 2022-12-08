<template>
  <div class="follow-container">
    <h1 class="connect">{{ heading }}</h1>
    <div class="fb-div">
      <h1 class="fb-head" id="sitename">{{ heading1 }}</h1>
      <a href="https://www.facebook.com/akipopph" target="_blank"><img :src="'../facebook.png'" :alt="facebook" class="fb-image" /></a>
      <span class="fb-text" id="handle">{{ text }}</span>
    </div>
    <div class="tk-div">
      <h1 class="tk-head" id="sitename">{{ heading2 }}</h1>
      <a href="https://www.tiktok.com/@akipopph" target="_blank"><img :src="'../tiktok.png'" :alt="tiktok" class="tk-image" /></a>
      <span class="tk-text" id="handle">{{ text1 }}</span>
    </div>
    <div class="ig-div">
      <h1 class="ig-head" id="sitename">{{ heading3 }}</h1>
      <a href="https://www.instagram.com/akipopph/" target="_blank"><img :src="'../instagram.png'" :alt="instagram" class="ig-image" /></a>
      <span class="ig-text" id="handle">{{ text2 }}</span>
    </div>
    <div class="sh-div">
      <h1 class="sh-head" id="sitename">{{ heading4 }}</h1>
      <a href="https://shopee.ph/akipopph" target="_blank"><img :src="'../shopee.png'" :alt="shopee" class="sh-image" /></a>
      <span class="sh-text" id="handle">{{ text3 }}</span>
    </div>
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
.fb-div{
  width: 100%;
  height: 200px;
  margin-left:55%;
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
}
.tk-div{
  width: 100%;
  height: 100px;
  margin-left: 55%;
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
}
.ig-div{
  width: 100%;
  height: 100px;
  margin-left: 110%;
  margin-top: -13.5%;
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
}
.sh-div{
  width: 100%;
  height: 100px;
  margin-left: 110%;
  margin-top: 2.2%;
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
}
.fb-head {
  margin-left: 8%;
  margin-top: 4%;
  position: absolute;
}
.fb-image {
  width: 100px;
  position: absolute;
  object-fit: cover;
}
.fb-text {
  margin-left: 8%;
  margin-bottom: -6%;
  position: absolute;
}

.tk-head {
  margin-left: 8%;
  margin-top: 12%;
  position: absolute;
}
.tk-image {
  margin-top: 4%;
  width: 100px;
  position: absolute;
  object-fit: cover;
}
.tk-text {
  margin-left: 8%;
  margin-bottom: -14%;
  position: absolute;
}

.ig-head {
  margin-left: 8%;
  margin-top: 4.7%;
  position: absolute;
}
.ig-image {
  width: 100px;
  position: absolute;
  align-self: flex-start;
  object-fit: cover;
}
.ig-text {
  margin-left: 8%;
  margin-bottom: -6.4%;
  position: absolute;
}

.sh-head {
  margin-left: 8%;
  margin-top: 13.7%;
  position: absolute;
}
.sh-image {
  margin-top: 4%;
  width: 100px;
  position: absolute;
  align-self: flex-start;
  object-fit: cover;
}
.sh-text {
  margin-left: 8%;
  margin-bottom: -15.5%;
  position: absolute;
}
</style>