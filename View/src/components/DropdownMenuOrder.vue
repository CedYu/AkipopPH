<template>
    <div class="account_menu" @click="isOpen = !isOpen" >
        <a href ='#'>
            ACCOUNT
        </a>
        <svg viewBox="0 0 1030 638" width="10">
            <path d="M1017 68L541 626q-11 12-26 12t-26-12L13 68Q-3 49 6 24.5T39 0h952q24 0 33 24.5t-7 43.5z" fill="#FFF"></path>
        </svg>
        <div class="submenu_account" v-if="isOpen">
            <!-- TODO: Routing to follow -->
            <router-link to="/login">Processing &emsp; &emsp; &emsp; &emsp;</router-link>
            <br><router-link to="/register">Ready to Ship &emsp; &emsp; &emsp; &emsp;</router-link>
            <br><router-link to="/register">Shipped &emsp; &emsp; &emsp; &emsp;</router-link>
            <br><router-link to="/register">Completed &emsp; &emsp; &emsp; &emsp;</router-link>
        </div>
    </div>
</template>

<script>
export default {
  name: 'account_drop',
  props: ['title'],
  data () {
    return {
      isOpen: false,
      }
    }
}
</script>

<style>
    a {
        color: white;
        font-weight: bold;
    }

    a:link { text-decoration: none; }

    a:visited { text-decoration: none; }

    a:hover { text-decoration: none; }

    a:active { text-decoration: none; }

    .submenu_account {
        font-size: 90%;
        border: 10px solid lightpink;
        background-color: lightpink;
        width: 120px;
        height: 50px;
    }
</style>