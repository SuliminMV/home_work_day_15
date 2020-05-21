<template>
    <div class="clothes">
        <Menu></Menu>
        <h1>Все товары</h1>
            <div class="thing" v-for="thing in this.$store.state.clothes">
                <h3>{{thing.name}}</h3>
                <img :src="thing.photo" alt="t-shirt">
                <p>Чтобы заказать товар нажмите "Подробнее"</p>
                <button @click="infoButtonClicked (thing.name,thing.photo,thing.color,thing.material,thing.objectId)">Подробнее
                </button>
            </div>
    </div>
</template>


<script>
    import CartWidget from '../components/CartWidget.vue'
    import Menu from '../components/Menu'
    export default {
        components: {
          CartWidget,
            Menu
        },
        methods:{
            infoButtonClicked(name, photo, color, material,objectId) {
                this.$router.push({
                    name: 'clothes-info',
                    params: {name: name, photo: photo, color: color, material: material,objectId:objectId}
                });
            }
        }

    }
</script>

<style>

</style>
