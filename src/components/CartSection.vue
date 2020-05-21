<template>
    <div>
        <Menu></Menu>
        <div v-if="this.$store.state.cart != ''" class="cart">
<!--        <h2>Корзина товаров</h2>-->
<!--        <table>-->
<!--        <th>Вещь</th>-->
<!--        <th>Фото товара</th>-->
<!--        <th>Количество</th>-->
<!--        </table>-->
<!--        <table class="thing" v-for="thing in this.$store.state.cart">-->
<!--            <td><b>{{thing.name}}</b></td>-->
<!--            <td><img :src="thing.photo" alt="photo"></td>-->
<!--&lt;!&ndash;            <td v-for="entry in cartItemEntries">{{entry}}</td>&ndash;&gt;-->
<!--        </table>-->
            <div class="item" v-for="entry in cartItemEntries">
                {{entry}}
            </div>
<!--        <button class="completed" @click="cartIsEmpty">Оформить заказ</button>-->
            <router-link :to="{name:'checkout'}">
                <button class="completed">Оформить заказ</button>
            </router-link>
        </div>
        <div v-else>
            <h2>Корзина пуста....</h2>
        </div>
    </div>
</template>

<script>
    import Menu from './Menu.vue'

    export default {
        data: function () {
            return {}
        },
        components: {
            Menu: Menu,
        },
        computed: {
            cartItemEntries: function () {
                return Object.entries(this.$store.state.cart);
            },
        },
        methods: {
            cartIsEmpty: function () {
                this.$router.push({path: 'purchaseCompleted'})
                this.$store.commit('EmptyCart')
            }
        }
    }



</script>

<style>

    .cart {
        width:800px;
        margin: 0 auto;
    }
    table {
        border-collapse: collapse;
        margin-left: 100px;
    }
    td,th {
        border: 1px solid black;
        width: 200px;
        vertical-align: middle;
    }
    td > img {
        width: 100px;
    }
    .completed {
        font-size: 20px;
        margin: 10px;
        padding: 20px 30px;
        background: gold;
        border: 5px solid black;
        border-radius: 20px;
        outline: none;
    }
</style>