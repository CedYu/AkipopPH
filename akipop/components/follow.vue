<template>
  <div class="follow-container">
    <h1>{{ heading }}</h1>
    <h1 class="fb-head" id="sitename">{{ heading1 }}</h1>
    <h1 class="tk-head" id="sitename">{{ heading2 }}</h1>
    <h1 class="ig-head" id="sitename">{{ heading3 }}</h1>
    <h1 class="sh-head" id="sitename">{{ heading4 }}</h1>
    <a href="https://www.facebook.com/akipopph"><img :src="'../facebook.png'" :alt="facebook" class="fb-image" /></a>
    <a href="https://www.tiktok.com/@akipopph"><img :src="'../tiktok.png'" :alt="tiktok" class="tk-image" /></a>
    <a href="https://www.instagram.com/akipopph/"><img :src="'../instagram.png'" :alt="instagram" class="ig-image" /></a>
    <a href="https://shopee.ph/akipopph"><img :src="'../shopee.png'" :alt="shopee" class="sh-image" /></a>
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
.fb-head {
  top: 104px;
  left: 301px;
  position: absolute;
}
.tk-image {
  top: 296px;
  left: 188px;
  width: 100px;
  position: absolute;
  object-fit: cover;
}
.fb-image {
  top: 91px;
  left: 190px;
  width: 100px;
  z-index: 100;
  position: absolute;
  align-self: flex-start;
  object-fit: cover;
  /* box-shadow: 5px 5px 10px 0px #d4d4d4; */
  /* border-color: var(--dl-color-gray-black); */
  /* border-width: 1px; */
  /* border-radius: var(--dl-radius-radius-radius4); */
}
.ig-image {
  top: 88px;
  left: 699px;
  width: 100px;
  position: absolute;
  align-self: flex-start;
  object-fit: cover;
}
.sh-image {
  top: 297px;
  left: 699px;
  width: 100px;
  position: absolute;
  align-self: flex-start;
  object-fit: cover;
}
.fb-text {
  top: 154px;
  left: 310px;
  position: absolute;
}
.tk-text {
  top: 362px;
  left: 310px;
  position: absolute;
}
.ig-text {
  top: 155px;
  left: 833px;
  position: absolute;
}
.sh-text {
  top: 363px;
  left: 833px;
  position: absolute;
}
.tk-head {
  top: 311px;
  left: 301px;
  position: absolute;
}
.ig-head {
  top: 105px;
  left: 812px;
  position: absolute;
}
.sh-head {
  top: 312px;
  left: 814px;
  position: absolute;
}
</style>