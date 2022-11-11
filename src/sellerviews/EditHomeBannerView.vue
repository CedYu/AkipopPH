<template>
    <div class="topmargin"></div>
    <div class="boxcontainer">
        <h3>Upload Homepage Banner</h3>
        <h4>Banner should be 1280 x 720 px to fit perfectly !</h4>
        <input type = "file" name = "bannerimage" accept = "image/gif, image/jpeg, image/png" id="bannerimage">
    </div>
</template>

<style scoped>
    .topmargin {
        margin-top: 200px;
    }
    .boxcontainer {
        border: 20px solid #E86187;
        background-color: #E86187;
        width: 60%;
        height: 300px;
        margin: auto;
        box-shadow: 1px 1px 5px #888888;
    }

    h3 {
        color: white;
        font-family: arial;
        font-weight: bolder;
        font-size: 160%;
        margin-left:3%
    }

    input#bannerimage {
        margin-left: 2%;
        border: none;
        background-color: transparent;
    }

    h4 {
        color: white;
        font-family: arial;
        font-size: 100%;
        font-weight: lighter;
        margin-left: 3%;
    }
</style>