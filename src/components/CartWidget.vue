<template>
    <div>
        <h3>Корзина {{cartItemsNumber}}</h3>
        <div class="items">
            <div class="item" v-for="entry in cartItemEntries">
                {{entry}}
            </div>
        </div>
        <router-link :to="{name:'checkout'}">
        <button>Оформить заказ</button>
        </router-link>
    </div>
    </template>

<script>
    export default {
        computed: {
            cartItemEntries: function () {
                return Object.entries(this.$store.state.cart);
            },
            cartItemsNumber: function () {

                return Object.keys(this.$store.state.cart).length;
            }
        },

    }
    </script>