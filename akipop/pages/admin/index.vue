<template>
    <div class="admin-header">
        <div class="admin-header-left">
            <h1>Admin</h1>
        </div>
        <div class="admin-header-right">
            <div class="admin-header-right-top">
                <h1>Hi, {{user.email}}</h1>
            </div>
            <div class="admin-header-right-bottom">
                <button @click="logout">Logout</button>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.admin-header{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 0 10%;
    margin-top: 10%;
}
</style>