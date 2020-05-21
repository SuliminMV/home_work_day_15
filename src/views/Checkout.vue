<template>
    <div>
        <h2>Оформление заказа</h2>
        <input v-model="userName" placeholder="Имя" type="text">
        <input v-model="userPhone" placeholder="Номер телефона" type="text">
        <button @click="submitOrder">Отправить заказ</button>

    </div>
</template>

<script>

    const SUBMIT_ORDER_URL = 'https://api.backendless.com/228BC5B2-D72C-B0A7-FFAD-F1683C54C800/F2139EE6-B0CC-481B-80F8-C7F3C5536758/data/orders'

    export default {
        data: function () {
            return{
                userName:'',
                userPhone:''
            }
        },
        methods:{
            submitOrder: function () {
                this.$http.post(SUBMIT_ORDER_URL,{
                    user_name:this.userName,
                    user_phone: this.userPhone,
                    clothes:JSON.stringify(this.$store.state.cart)
            }).then(this.submitOrderResponse);
                this.$router.push({path: 'purchaseCompleted'})
                this.$store.commit('EmptyCart')
            },
            submitOrderResponse: function (response) {
                console.log(response);
            }
        }
    }
</script>