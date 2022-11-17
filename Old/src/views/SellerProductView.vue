<template>
    <br><br><br><br><br><br><br><br><br><br>

    <div class="action-button1">
            <p><button><router-link to="/addproduct">Add Product</router-link></button></p>
        </div>
    <!--SAMPLE WITHOUT SCRIPT-->
    <div class="mainProduct">
    
      <img src="../assets/product.jpg" alt="Denim Jeans" style="width:100%">
    
      <p>Anya Plushies</p>
      <p class="price">$64.66</p>
      <p>a very very amazing plushies</p>
      <p>50</p>
      <p><button><router-link to="/editproduct">Edit Product</router-link></button></p>
      <p><button>Inacvtivate</button></p>
      
      <!-- <mainProducts></mainProducts> -->

    </div>
</template>

    <style>

    .action-button1 button{
             border-radius: 15px; 
            background-color: #e95a85;
            border-color: #e95a85;
            color:white;
            font-size: 20px;
            float: right;

            
        }
    
        </style>