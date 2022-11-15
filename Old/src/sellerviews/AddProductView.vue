<template>
    <div class="topmargin"></div>
    <div class="basicbox">
        <h3>Basic Information</h3>
        <br><p><span style="color:black">*</span>Product Images</p>
        <input type = "file" name = "productimage" accept = "image/gif, image/jpeg, image/png" id="productimage">

        <p><span style="color:black">*</span>Product Name</p>
        <input type = "text" name = "productname" id = "productname" v-model="name">

        <p><span style="color:black">*</span>Category</p>
        <input type = "text" name = "productcategory" id = "productcategory">

        <p><span style="color:black">*</span>Product Description</p>
        <input type = "text" name = "productdesc" id = "productdesc" v-model="description">
        </div>

        <br><br><br>
        <div class="specsbox">
        <h3>Specification</h3>
        <br><p><span style="color:black">*</span>Material</p>
        <input type = "text" name = "productmaterial" id = "productmaterial">

        <p><span style="color:black">*</span>Weight</p>
        <input type = "text" name = "productweight" id = "productweight" placeholder = "kg">

        <p><span style="color:black">*</span>Dimensions</p>
        <input type = "text" name = "productlength" id = "productlength"  placeholder="L in cm">
        <input type = "text" name = "productwidth" id = "productwidth"  placeholder="W in cm">
        <input type = "text" name = "productheight" id = "productheight"  placeholder="H in cm"> 
        </div>

        <br><br><br>
        <div class="salesbox">
        <h3>Sales Information</h3>
        <br><p><span style="color:black">*</span>SKU</p>
        <input type = "text" name = "productSKU" id = "productSKU">

        <p><span style="color:black">*</span>Price</p>
        <input type = "text" name = "productprice" id = "productprice" placeholder="₱" v-model="price">

        <p><span style="color:black">*</span>Stock</p>
        <input type = "text" name = "productstock" id = "productstock" v-model="stock">
        <!-- <button @click="addProduct($event)">Add Product</button> -->
        </div>
        
        <br><br><br>
</template>

<script>

export default{
	data(){
		return{
			productID:0,
			name:'',
			description:'',
			price:0,
			stock:0
		}
	},
	methods: {
	}
}


</script>

<style scoped>
    .topmargin {
        margin-top: 200px;
    }
    .basicbox {
        border: 20px solid #E86187;
        background-color: #E86187;
        width: 60%;
        height: 500px;
        margin: auto;
        box-shadow: 1px 1px 5px #888888;
    }

    p {
        text-align: left;
        color: white;
        margin-left: 8%;
        font-family: arial;
        font-size: 100%;
        font-weight: lighter;
    }

    h3 {
        color: white;
        font-family: arial;
        font-weight: bolder;
        font-size: 160%;
        margin-left:3%
    }

    input#productimage{
        margin-left: 28%;
        margin-top: -6%;
        border: none;
        background-color: transparent;
    }

    input[name="productname"], input[name="productcategory"], input[name="productmaterial"], 
    input[name="productweight"], input[name="productSKU"], input[name="productprice"],
    input[name="productstock"]{
        margin-left: 30%;
        margin-top: -6%;
        margin-bottom: 3%;
        height: 5px;
    }

    input[name="productdesc"] {
        margin-left: 30%;
        margin-top: -6%;
        margin-bottom: 3%;
        height: 150px;
    }

    .specsbox {
        border: 20px solid #E86187;
        background-color: #E86187;
        width: 60%;
        height: 300px;
        margin: auto;
        box-shadow: 1px 1px 5px #888888;
    }

    input[name="productlength"] {
        margin-left: 30%;
        margin-top: -6%;
        margin-bottom: 3%;
        width: 50px;
    }

    input[name="productwidth"] {
        margin-left: 43%;
        margin-top: -8.9%;
        margin-bottom: 3%;
        width: 50px;
    }

    input[name="productheight"] {
        margin-left: 56%;
        margin-top: -8.9%;
        margin-bottom: 3%;
        width: 50px;
    }

    .salesbox {
        border: 20px solid #E86187;
        background-color: #E86187;
        width: 60%;
        height: 300px;
        margin: auto;
        box-shadow: 1px 1px 5px #888888;
    }

    button {
        display: block;
        margin-left: auto;
        margin-right: 0;
    }

    input[name="productSKU"], input[name="productprice"],input[name="productstock"] {
        width: 150px;
    }
</style>