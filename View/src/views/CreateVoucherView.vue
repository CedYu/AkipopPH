<template>
<div class="create_vouchers">
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
    <button class="btn btn-primary">Create Voucher</button>
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

    .button{
        margin-top: 10px;
        margin-bottom: 10px;
        border-radius: 5px;
    }
</style>