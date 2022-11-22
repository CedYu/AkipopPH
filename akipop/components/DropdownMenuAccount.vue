<template>
    <div class="account_menu" @mouseover="isOpen=true" @mouseleave="isOpen=false" >
        <NuxtLink to="#">
            <img src="../assets/img/profile_image.png" alt="profile image" id="profile_image">
        </NuxtLink>
        <svg viewBox="0 0 1030 638" width="10">
            <path d="M1017 68L541 626q-11 12-26 12t-26-12L13 68Q-3 49 6 24.5T39 0h952q24 0 33 24.5t-7 43.5z" fill="#FFF"></path>
        </svg>
        <div class="submenu_account" v-if="isOpen">
            <div v-if="!useSupabaseUser().value">
            <NuxtLink to="/account/login" id="acc_thing">Log In &emsp; &emsp; &emsp; &emsp;</NuxtLink>
            <br><NuxtLink to="/account/register" id="acc_thing">Register &emsp; &emsp; &emsp; &emsp;</NuxtLink>
            </div>
            <div v-else>
                <NuxtLink to="/account/login" id="acc_thing">Wishlist &emsp; &emsp; &emsp; &emsp;</NuxtLink>
                <br><NuxtLink @click="useSupabaseClient().auth.signOut()" to="/" id="acc_thing">Log Out &emsp; &emsp; &emsp; &emsp;</NuxtLink>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'account_drop',
    props: ['title'],
    data () {
        console.log(useSupabaseUser().value)
    return {
        isOpen: false,
        loggedOut:true,
    }
    },
    method(){
    }
}
</script>
<script setup>
  const supabase = useSupabaseClient()
  const logout = async() =>{const {error} = await supabase.auth.signOut()}
</script>
<style>
    #acc_thing:link { text-decoration: none; }
    #acc_thing:visited { text-decoration: none; }
    #acc_thing:hover { text-decoration: none; }
    #acc_thing:active { text-decoration: none; }
    .submenu_account {
        font-size: 90%;
        border: 10px solid lightpink;
        background-color: lightpink;
        width: 120px;
        height: 50px;
        position:fixed
    }

    #profile_image {
        position: relative;
        width: 40px;
        height: 40px;
        margin-top: 5px;
        margin-left: 20px;
    }

    #acc_thing{
        color: white;
        font-size: 100%;
        font-weight: bold;
    }
</style>