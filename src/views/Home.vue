<template>    
    <div class="top">
        
        <v-img class="top-img" src="@/assets/pc.jpg" />
        <v-img class="top-img" src="@/assets/pc.jpg" />
        <v-img class="top-img" src="@/assets/pc.jpg" />
    </div>
</template>

<script>
export default{
    name: "Home"
}
</script>

<style lang="scss">
.top{
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
    height: 70vh;
    width: 100vw;
    margin-top: calc(64px + 50px);
    display: flex;
    &-img{
        width: 100vw;
        .v-img__img--contain{
            width: 300px;
            height: 500px;
            object-fit: cover;
        }
    }
}


</style>