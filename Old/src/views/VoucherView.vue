<template>
    <br><br><br><br><br><br><br><br><br><br>

    

    <div class="vouchers">
        <table class="voucher_list">
        <tr>
            <th>Voucher Name</th>
            <th>Voucher Type</th>
            <th>Discount Details</th>
            <th>Usage Quantity</th>
            <th>Status</th>
            <th>Action</th>
        </tr>

        <tr>
            <td>1111Discount</td>
            <td>Cash Discount</td>
            <td>10php Off</td>
            <td>100</td>
            <td>Active</td>
            <td><li><ul>Edit</ul><ul>Toggle Status</ul><ul>Duplicate</ul></li></td>
        </tr>

        <tr>
            <td>1212Discount</td>
            <td>Freebie</td>
            <td>Candy</td>
            <td>100</td>
            <td>Active</td>
            <td><li><ul>Edit</ul><ul>Toggle Status</ul><ul>Duplicate</ul></li></td>
        </tr>

        <tr>
            <td>1212BigDiscount</td>
            <td>Percentage Discount</td>
            <td>5% off</td>
            <td>100</td>
            <td>Active</td>
            <td><li><ul>Edit</ul><ul>Toggle Status</ul><ul>Duplicate</ul></li></td>
        </tr>
        </table>
    </div>
    <div class="create_voucher">
        <input type = submit value = "Create Voucher"> <br>
    </div>
</template>
    
<style>
    .voucher_list{
        border-collapse: collapse;
        margin: 10px auto; 
        font-size: 0.9em;
        font-family: sans-serif;
        min-width: 400px;
    }
    
    .voucher_list thead tr {
        background-color: #ffe878;
        color: #ffffff;
        text-align: left;
    }
    
    .voucher_list th,
    .voucher_list td {
        padding: 12px 35px;
    }
    
    .voucher_list tbody tr {
        border-bottom: 1px solid #dddddd;
        background-color: #faebc3;
    }
    
    .voucher_list tbody tr:nth-of-type(even) {
        background-color: #f5d888;
    }
    
    .voucher_list tbody tr.active-row {
    font-weight: bold;
    color: #f5d888;
}

.create_voucher{
    align-items: right;
    /* margin-right: 50px auto;  */
}
.create_voucher input[type="submit"] {
        
		background-color: #E86187;
		color: white;
		font-weight: bold;
		cursor:pointer;
        margin: auto;
        border-radius: 20px;
        border: none;
        width: 200px;
	}

	.create_voucher input[type="submit"]:hover {
		background-color: #ffe878;
		color: black;
	}
    
</style>