<template>
    <div class="topmargin"></div>
    <div class="todobox">
        <h3>To Do List</h3>
        <h4>Things you need to deal with</h4>

        <button name="toprocess" id="toprocess">
        <h5>9</h5>
        <p>To-Process Shipment</p>
        </button>

        <button name="soldout" id="soldout">
        <h5>22</h5>
        <p>Sold Out Proucts</p>
        </button>
    </div>
    <br><br>

    <div class="businessbox">
    <h3>Business Insights (Real-time data)</h3>
    <h4>An overview of the shop data for the confirmed order dimension</h4>

    <h5>Revenue</h5>
    <h6>₱ 10 000</h6>
    </div>
    <br><br>

</template>

<style scoped>
    .topmargin {
        margin-top: 200px;
    }
    .todobox {
        border: 20px solid #E86187;
        background-color: #E86187;
        width: 60%;
        height: 200px;
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

    h4 {
        color: white;
        font-family: arial;
        font-weight: lighter;
        font-size: 100%;
        margin-left: 3.3%;
        margin-top: -22px;
    }

    button {
        background-color: transparent;
        border: none;
        color: white;
        cursor:pointer;
        font-family: arial;
        font-weight: lighter;
        font-size: 100%;
        margin-left: 20%;
    }

    button h5 {
        font-weight: bold;
        font-size: 100%;
    }

    .businessbox {
        border: 20px solid #E86187;
        background-color: #E86187;
        width: 60%;
        height: 200px;
        margin: auto;
        box-shadow: 1px 1px 5px #888888;
    }

    h5 {
        color: white;
        font-family: arial;
        font-weight: bold;
        font-size: 150%;
        margin-left: 3.3%;
        margin-top: 30px;
    }

    h6 {
        color: white;
        font-family: arial;
        font-weight: normal;
        font-size: 160%;
        margin-left: 3.3%;
        margin-top: -30px;
    }
</style>