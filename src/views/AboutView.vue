
 

<template>
    <div class="about">
        <section class="about-section">
            <br><br><br><br><br><br><br><br><img v-bind:src="require('../assets/logopink.png')" width="350" height="200" alt="logopink"/>
            <h1 class="welcome-header">WELCOME TO<br>AKIPOP PH</h1>
            <p class="about-message">
            AKIPOP PH is a handmade craft store made with love just for you
            <br>and your fandom cravings. Just like a refreshing beverage paired
            <br>with an exciting afternoon of binge-watching your favorite anime!

            <br><br>Our shop is built on a passion for the love of crafts and merch! Aiming to 
            <br>deliver high qualityand refreshing takes on design and print, AKIPOP PH
            <br>delivers fresh content that's both familiar, yet totally new.
            
            <br><br>Our shop offers product such as high-quality prints, photocards, stickers, accessories,
            <br>and more. We also accept custom orders for posters and photocards. You may browse
            <br>through this website to shop our products. We are also active in other platforms
            <br>such as Shopee, Facebook, Twitter, and Instagram so do check us out!

            <br><br>Please be patient with us because only one hand makes and packs your orders!
            <br>Shipping through J&T will be on every Wednesday, Saturday and Sunday. </p>
            <a href="product.html" class="shop-button">Shop now</a>
        </section>

        <div class="soda-left">
            <img v-bind:src="require('../assets/about-left.png')" width="500" height="500" alt="soda-left"/>
        </div>

        <div class="soda-right">
            <img v-bind:src="require('../assets/about-right.png')" width="970" height="1020" alt="soda-right"/>
        </div>
    </div>
</template>


<style>
    .soda-left {
        margin-top: -1000px;
        margin-bottom: -300px;
        margin-left: -130px;
        text-align: left;
    }

    .soda-right {
        margin-top: -520px;
        margin-bottom: -300px;
        text-align: right;
    }

    .about {
        margin: auto;
        text-align: center;   
        background-color: #FFFBEC;  
        width:100%;
    }

    .welcome-header {
        margin-top: 10px;
        margin-bottom: 70px;
        font-family: lemonmilk;
        color: #e95a85;
        animation: fadeInDown; 
        animation-duration: 2s; 
    }

    .about-message {
        font-family: Arial;
        text-align: center, justify;
        font-size: large;
        line-height: 40px;
        font-weight: lighter;
        color: #52575c;
    }
</style>  