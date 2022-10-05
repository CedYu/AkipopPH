<template>
  <div class="about">
    


  <section class="about-section">
    <div class="container-2">
        <h1 class="welcome-header">WELCOME TO AKIPOP PH</h1>
        <div class="welcome-message">
            <div split>
                <p class="about-messages"> Hello, we are AKIPOP PH, a handmade craft store made with love just for you and your fandom cravings! Our shop offers product such as High-Quality Prints, Photocards, Stickers , Accessories, and more. You may directly click the button bellow to view and buy our product. Or you may also proceed the other platform provided below such as Shopee, Facebook, Twitter, and Instagram to buy our product!</p>
                <a href="product.html" class="shop-button">Shop now</a>
            </div>
            <div class="split"><img src="../assets/storeBanner.png" width="550" height="339" alt="store-banner" class="shadow-two"></div>
           <!-- <div class="split"><img src="../storeBanner.png" loading="lazy" scrset="../storeBanner.png 500, ../storeBanner.png 800, ../storeBanner.png 1080" sizes="(maxwidth:497px) 94vw,(maxwidth:767px) 95vw,(maxwidth:991px) 92vw, 43vw" alt="store-banner" class="shadow-two"></div>-->
        </div>
    </div>

</section>

</div>
</template>


<style>
      .about-section{
          position: relative;
          padding: -10px 50px;
          border-bottom: 1px solid #e4ebf3;
          /*background-color: #ffb0bf;*/
          /*background-color: #ffffff;*/

        background-image: url("../assets/about3.png");
        background-size: cover;
      }
  
      .container-2{
          width: 100%;
          max-width: 940px;
          margin-right: auto;
          margin-left: auto; 
          
      }
  
      .centered-heading{
          margin-bottom: 16px;
          text-align: center;
      }
  
      .welcome-header{
          margin-bottom: 32px;
          font-family: 'Droid Serif',serif;
          color: #000000;
          animation: bounceIn; 
          animation-duration: 3s; 
          
        }
  
      .welcome-message{
          display: -webkit-box;
          display: -webkit-flex;
          display: -ms-flexbox;
          display: flex;
          padding-bottom: 82px;
          -webkit-box-pack: justify;
          -webkit-justufy-content: space-between;
          -ms-flex-pack: justify;
          justify-content: space-between;
          -webkit-box-align: center;
          -webkit-align-items:  center;
          -ms-flex-align: center;
          align-items: center;

          animation: bounceIn; 
          animation-duration: 3s; 
      }

      .shop-button{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    padding: 20px 45px;
    -webkit-align-self: flex-start;
    -ms-flex-item-align: start;
    align-self: flex-start;
    -webkit-box-ordinal-group: 1;
   /* background-color: #ffb0bf;*/
   /* background-color: #ffffff;*/
    color:#000000;
    font-size: 12px;
    line-height: 20px;
    text-align: left;
    text-transform: uppercase;

    
    }

  .shop-button:active{
    
    background-color: #e95a85;
}
  
      .split{
          display: -webkit-box;
          display: -webkit-flex;
          display: -ms-flexbox;
          display: flex;
          max-width: 46%;
          padding-bottom: 3px;
          -webkit-box-orient: vertical;
          -webkit-box-direction: normal;
          -webkit-flex-direction:column;
          flex-direction: column;
          -webkit-box-pack: start;
          -webkit-justify-content:flex-start;
          -ms-flex-pack: start;
          justify-content: flex-start;
          -webkit-box-align: start;
          -webkit-align-items: flex-start;
          -ms-flex-align: start;
          align-items: flex-start;
  
      }
  
      .shadow-2{
          box-shadow: 0 4px 24px 0 rgba(150,163,181,0);
      }
  
      .about-messages{
          margin-bottom: 24px;
          font-family: Georgia, 'Times New Roman', Times, serif;
          color: #000000;
          text-align: justify;
          /*background-color: #ffffff;*/
          padding: 51px 50px;

          
      }
</style>
