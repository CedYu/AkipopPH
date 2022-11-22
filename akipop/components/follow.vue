<template>
  <div class="follow-container">
    <h1>{{ heading }}</h1>
    <h1 class="follow-text1">{{ heading1 }}</h1>
    <span class="follow-text2">{{ text }}</span>
    <a href="https://www.tiktok.com/@akipopph"><img :src="'../tiktok.png'" :alt="tiktok" class="follow-image" /></a>
    <a href="https://www.facebook.com/akipopph"><img :src="'../facebook.png'" :alt="facebook" class="follow-image1" /></a>
    <a href="https://www.instagram.com/akipopph/"><img :src="'../instagram.png'" :alt="instagram" class="follow-image2" /></a>
    <a href="https://shopee.ph/akipopph"><img :src="'../shopee.png'" :alt="shopee" class="follow-image3" /></a>
    <span class="follow-text3">{{ text }}</span>
    <span class="follow-text4">{{ text }}</span>
    <span class="follow-text5">{{ text }}</span>
    <h1 class="follow-text6">{{ heading11 }}</h1>
    <h1 class="follow-text7">{{ heading12 }}</h1>
    <h1 class="follow-text8">{{ heading13 }}</h1>
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
    // text1: {
    //   type: String,
    //   default: '@akipopph',
    // },
    // text2: {
    //   type: String,
    //   default: '@akipopph',
    // },
    // text3: {
    //   type: String,
    //   default: '@akipopph',
    // },
    heading1: {
      type: String,
      default: 'FACEBOOK',
    },
    heading11: {
      type: String,
      default: 'TIKTOK',
    },
    heading12: {
      type: String,
      default: 'INSTAGRAM',
    },
    heading13: {
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
.follow-text1 {
  top: 104px;
  left: 301px;
  position: absolute;
  color: #e95a85;
}
.follow-text2 {
  top: 154px;
  left: 310px;
  position: absolute;
}
.follow-image {
  top: 296px;
  left: 188px;
  width: 100px;
  position: absolute;
  object-fit: cover;
}
.follow-image1 {
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
.follow-image2 {
  top: 88px;
  left: 699px;
  width: 100px;
  position: absolute;
  align-self: flex-start;
  object-fit: cover;
}
.follow-image3 {
  top: 297px;
  left: 699px;
  width: 100px;
  position: absolute;
  align-self: flex-start;
  object-fit: cover;
}
.follow-text3 {
  top: 362px;
  left: 310px;
  position: absolute;
}
.follow-text4 {
  top: 155px;
  left: 833px;
  position: absolute;
}
.follow-text5 {
  top: 363px;
  left: 833px;
  position: absolute;
}
.follow-text6 {
  top: 311px;
  left: 301px;
  position: absolute;
  color: #e95a85;
}
.follow-text7 {
  top: 105px;
  left: 812px;
  position: absolute;
  color: #e95a85;
}
.follow-text8 {
  top: 312px;
  left: 814px;
  position: absolute;
  color: #e95a85;
}
</style>