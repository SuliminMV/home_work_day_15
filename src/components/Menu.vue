<template>
    <div class="menu">
        <span class="link"><router-link to="/clothes">Все товары</router-link></span>
        <span class="link"><router-link to="/t-shirts">Футболки</router-link></span>
        <span class="link"><router-link to="/sweatshirts">Толстовки</router-link></span>
        <span class="link"><router-link to="/caps">Кепки</router-link></span>
        <span class="link"><router-link to="/outOfService">Доставка</router-link></span>
        <span class="link"><router-link to="/outOfService">Контакты</router-link></span>
        <span class="link"><router-link to="/outOfService">Отзывы</router-link></span>
        <span class="link-cart"><router-link to="/cart">Корзина ({{cartItemsNumber}} товаров)</router-link></span>
        <b class="link-cart"><router-link to="/admin">Заявки ({{ordersItemsNumber}} товаров)</router-link></b>

    </div>
</template>

<script>
    export default {
        computed: {
            cartItemsNumber: function () {
                return Object.keys(this.$store.state.cart).length;
            },
            ordersItemsNumber: function () {
                return Object.keys(this.$store.state.orders).length;
            },
        },
    }
</script>

<style>
    .menu {
        margin: 10px;
    }
    .link a {
        text-decoration: none;
        border: 1px solid black;
        margin: 5px;
        padding: 3px 5px;
        border-radius: 5px;
    }
    .link-cart a {
        text-decoration: none;
        border: 1px solid black;
        margin: 5px;
        padding: 3px 10px;
        border-radius: 5px;
    }
</style>

