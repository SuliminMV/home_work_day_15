<template>
    <div>
        <Menu></Menu>
        <h1>Футболки</h1>
        <div class="t-shirts">
            <div class="t-shirt" v-for="t_shirt in t_shirts ">
                <h3> Футболка {{t_shirt.name}}</h3>
                <img :src="t_shirt.photo" alt="t-shirt">
                <p>Чтобы заказать товар нажмите "Подробнее"</p>
                <button @click="infoButtonClicked (t_shirt.name,t_shirt.url,t_shirt.color,t_shirt.material)">Подробнее
                </button>
            </div>
        </div>
    </div>

</template>

<script>
    import Menu from './Menu.vue'

    export default {
        components: {
            Menu: Menu,
        },
        data: function () {
            return {
                t_shirts:''
            }
        },
        props:['category'],
        computed:{

        },
        created: function () {
            this.t_shirts = this.$store.getters.getClothesByT_Shirts('t_shirts')

        },
        methods: {
            infoButtonClicked(name, photo, color, material) {
                this.$router.push({
                    name: 'clothes-info',
                    params: {name: name, photo: photo, color: color, material: material}
                });
            }
        }
    }
</script>

<style>
    .t-shirts {
        margin: 20px 0;
        display: flex;
        justify-content: space-around;


    }

    .t-shirt {
        border: 1px solid black;
        padding-bottom:10px;


    }
</style>