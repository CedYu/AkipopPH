<template>
  <div class="follow-container">
    <h1 class="connect">{{ heading }}</h1>
    <div class="links">
      <div class="site-grouping" id="fb-tk">
        <div class="site-div" id="fb-div">
          <a href="https://www.facebook.com/akipopph" target="_blank"><img :src="'../facebook.png'" :alt="facebook" class="image" /></a>
          <div class="site-text-div">
            <h1 id="fb-head" class="sitename">{{ heading1 }}</h1>
            <span class="akipop-text">{{ text }}</span>
          </div>
        </div>
        <div class="site-div" id="tk-div">
          <a href="https://www.tiktok.com/@akipopph" target="_blank"><img :src="'../tiktok.png'" :alt="tiktok" class="image" /></a>
          <div class="site-text-div">  
            <h1 id="tk-head" class="sitename">{{ heading2 }}</h1>
            <span class="akipop-text">{{ text }}</span>
          </div>
        </div>
      </div>
      <div class="site-grouping" id="ig-sh">
        <div class="site-div" id="ig-div">
          <a href="https://www.instagram.com/akipopph/" target="_blank"><img :src="'../instagram.png'" :alt="instagram" class="image" /></a>
          <div class="site-text-div">
            <h1 id="ig-head" class="sitename">{{ heading3 }}</h1>
            <span class="akipop-text">{{ text }}</span>
          </div>
        </div>
        <div class="site-div" id="sh-div">
          <a href="https://shopee.ph/akipopph" target="_blank"><img :src="'../shopee.png'" :alt="shopee" class="image" /></a>
          <div class="site-text-div">
            <h1 id="sh-head" class="sitename">{{ heading4 }}</h1>
            <span class="akipop-text">{{ text }}</span>
          </div>
        </div>
      </div>
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
  height: 600px;
  display: flex;
  position: absolute;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}
.links {
  width: 50%;
  height: 100%;
  margin-top: 0.5%;
  display: flex;
  justify-content: space-around;
}

.connect{
  font-family: lemonmilk;
  font-size: 300%;
  color: #2C3E50;
}

.image{
  width: 100px;
  object-fit: cover;
}

.sitename{
  font-family: lemonmilk;
  color: #e95a85;
  margin:0%;
  margin-left: 8%;
}

.site-grouping{
  display: flex;
  flex-direction: column;
}

#fb-tk{
  margin-right: 10%;
}

#ig-sh{
  margin-left: 10%;
}

.site-div{
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
}

#tk-div{
  margin-top: 13%;
}

#sh-div{
  margin-top: 12%;
}

.site-text-div{
  display: flex;
  flex-direction: column;
}

.akipop-text {
  font-family: lemonmilk;
  margin-left: 8%;
  margin-top: 0%;
}
</style>