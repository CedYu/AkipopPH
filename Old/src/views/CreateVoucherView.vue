<template>
    <div class="create_vouchers">
        <br><br><br><br><br><br><br>
        <h1>Voucher</h1>
        <input type="text" placeholder="Voucher Name">
        <label>Voucher Type</label>
        <select>
            <option>Cash Discount</option>
            <option>Percentage Discount</option>
            <option>Freebie</option>
        </select><br>
        <label>Voucher Target</label>
        <select>
            <option>All Customers</option>
            <option>New Customers</option>
        </select><br>
        <input type="text" placeholder="Discount Details">
        <input type="text" placeholder="Voucher Amount">
    </div>

    <div class="create_voucher_button">
      	        <input type = submit value = "Create Voucher">
            </div>
    </template>
    
    <style>
        label{
            margin-top: 10px;
            margin-bottom: 10px;
        }
    
        option{
            margin-top: 10px;
            margin-bottom: 10px;
        }
    
        input{
            margin-top: 10px;
            margin-bottom: 10px;
        }
    
        .create_vouchers {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
    
    .create_voucher_button input[type="submit"] {
		background-color: #004AAD;
		color: white;
		font-weight: bold;
		cursor:pointer;
        margin: auto;
        border-radius: 20px;
        border: none;
        width: 200px;
	}

	.create_voucher_button input[type="submit"]:hover {
		background-color: #9ED149;
		color: black;
	}
    </style>
