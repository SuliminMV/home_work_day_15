<template>
    <div class="clothesInfo">
        <Menu></Menu>
        <h1>{{info.name}}</h1>
        <div class="info">
            <img :src="info.photo" alt="thing">
            <p>Цвет: {{info.color}}</p>
            <p>Материал: {{info.material}}</p>
            <button class="addToCart" @click="addToCartClicked(info.objectId)">Добавить в корзину</button>
        </div>
    </div>

</template>

<script>
    import Menu from './Menu.vue'

    export default {
        data: function () {
            return {
                info: '',
                infoForCart:''
            }
        },
        components: {
            Menu: Menu
        },
        props: ['name'],
        created: function () {
            this.info = {
                name: this.$route.params.name,
                photo: this.$route.params.photo,
                color: this.$route.params.color,
                material: this.$route.params.material,
                objectId: this.$route.params.objectId
            }
            console.log('Info:', this.info);


        },
        methods: {
            // addToCartClicked: function () {
            //     let cart = {
            //         name: this.info.name,
            //         photo: this.info.photo,
            //         objectId: this.info.objectId
            //     };
            //     console.log('Cart:',cart)
            //     this.$store.commit('SetClothesToCart',cart )
            // }
            addToCartClicked: function (objectId) {
                this.$store.commit('addToCart',objectId)
            }
        }

    }

</script>

<style>
    .addToCart {
        font-size: 16px;
        padding: 20px 30px;
        background: gold;
        border: 5px solid black;
        border-radius: 20px;
        outline: none;
    }

    .addToCart:hover {
        background: crimson;
    }

    .addToCart:active {
        background: aquamarine;
    }




</style>