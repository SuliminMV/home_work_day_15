<template>
    <div>
        <Menu></Menu>
        <h2>Заявки от клиентов</h2>
                <ol class="orders">
                    <li class="order" v-for="order in $store.state.orders">Имя: {{order.user_name}}, Телефон: {{order.user_name}}, Заказ: {{order.clothes}}</li>
                </ol>
    </div>
</template>

<script>
    import Menu from './Menu.vue'
    const ORDERS_URL = 'https://api.backendless.com/228BC5B2-D72C-B0A7-FFAD-F1683C54C800/F2139EE6-B0CC-481B-80F8-C7F3C5536758/data/orders'

    export default {
        components:{
          Menu
        },
        mounted: function () {
            let orders = this.$http.get(ORDERS_URL).then(this.ordersLoaded)
        },
        methods: {
            ordersLoaded: function (response) {
                this.$store.commit('setOrders',response.body);

            }
        }
    }

</script>