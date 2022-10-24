<template>
    <br><br><br><br><br><br><br><br><br><br>
  

    <div class="orders">
    <table class="order_list">
        <tr>
        <th> </th>
        <!-- <th> </th> -->
        <th>Product Name</th>
        <th>Order ID</th>
        <th>Buyer</th>
        <th>Shipping</th>
        <th> </th>
        </tr>
    
        <tr>
        <td><input type="checkbox" id="checkOrder" name="checkOrder"></td>
        <!-- <td><img src="../assets/product.jpg" alt="Denim Jeans" style="width:30%"></td> -->
        <td>Anya Sticker</td>
        <td>ASDFGHJKL1234</td>
        <td>Cedric</td>
        <td>J&T</td>
        <td>View More</td>
        </tr>
    
        <tr>
        <td><input type="checkbox" id="checkOrder" name="checkOrder"></td>
        <!-- <td><img src="../assets/product2.jpg" alt="Denim Jeans" style="width:30%"></td> -->
        <td>Anya Sticker</td>
        <td>LKJHGFDSA1234</td>
        <td>Dinosaur</td>
        <td>J&T</td>
        <td>View More</td>
        </tr>

        <tr>
        <td><input type="checkbox" id="checkOrder" name="checkOrder"></td>
        <!-- <td><img src="../assets/product.jpg" alt="Denim Jeans" style="width:30%"></td> -->
        <td>Anya Sticker</td>
        <td>ASDFGHJKL1234</td>
        <td>Sam</td>
        <td>J&T</td>
        <td>View More</td>
        </tr>
    
    </table>
    </div>
    
    <div class="print_order">
        <input type = submit value = "Print Order"> <br>
        <input type = submit value = "Print and Ship Order"> <br>
        <input type = submit value = "Cancel Order">
    </div>
    
    </template>
    
    <style>
   

    .order_list{
        border-collapse: collapse;
        margin: 25px 0;
        font-size: 0.9em;
        font-family: sans-serif;
        min-width: 400px;
    }
    
    .order_list thead tr {
        background-color: #ffe878;
        color: #ffffff;
        text-align: left;
    }
    
    .order_list th,
    .order_list td {
        padding: 12px 35px;
    }
    
    .order_list tbody tr {
        border-bottom: 1px solid #dddddd;
    }
    
    .order_list tbody tr:nth-of-type(even) {
        background-color: #f5d888;
    }
    
    .order_list tbody tr.active-row {
    font-weight: bold;
    color: #f5d888;
}

.print_order input[type="submit"] {
		background-color: #E86187;
		color: white;
		font-weight: bold;
		cursor:pointer;
        margin: auto;
        border-radius: 20px;
        border: none;
        width: 200px;
	}

	.print_order input[type="submit"]:hover {
		background-color: #ffe878;
		color: black;
	}
    
    </style>