<template>
    <h2>Загрузка</h2>

</template>

<script>
    const CLOTHES_URL = 'https://api.backendless.com/228BC5B2-D72C-B0A7-FFAD-F1683C54C800/F2139EE6-B0CC-481B-80F8-C7F3C5536758/data/clothes'

    export default {
        mounted: function () {
            let clothes = this.$http.get(CLOTHES_URL).then(this.clothesLoaded)
        },
        methods: {
            clothesLoaded: function (response) {
                this.$store.commit('setClothes',response.body);
                this.$router.push({name:'clothes'})
            }
        }

    }

</script>