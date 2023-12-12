<template>
    <div class="top">
        <div class="top-img">
            <v-img class="left" src="@/assets/pc.jpg" />
            <v-img class="center" src="@/assets/human.jpg" />
            <v-img class="right" src="@/assets/dice.jpg" />
        </div>
        <h1><span>Topi's Profile</span></h1>
    </div>
    <v-container>
        <article class = "profile">
            <h2>Profile</h2>
            <v-container class="d-flex flex-row justify-space-between">
                <v-container>
                    <dl>
                        <dt>aaa</dt>
                        <dd>aaaaa</dd>
                    </dl>
                </v-container>
                <v-container>
                    <p>bbbbbbbbb</p>
                    <p>bbbbbbbbb</p>
                    <p>bbbbbbbbb</p>
                </v-container>
            </v-container>
        </article>
    </v-container>
</template>

<script>
export default{
    name: "Home"
}
</script>

<style lang="scss">
.top{
    position: relative;
    width: 100vw;
    height: 75vh;
    margin-bottom: 50px;
    &-img{
        display: flex;
        gap: 10px;
        height: 100%;
        .left img, .center img, .right img {
            object-fit: cover;
        }
        .left img{
            object-position: 50%;
        }
        .right img{
            object-position: 65%;
        }
    }
    h1{
        display: block;
        width: 100%;
        text-align: center;
        position: absolute;
        bottom: -10px;
        left: 50%;
        transform: translate(-50%, 10px);
        -webkit-transform: translate(-50%, 10px);
        -ms-transform: translate(-50%, 10px);
        color: rgb(255, 255, 255);
        span{
            background-color: #36393F;
            padding: 10px 100px;
            letter-spacing: 0.5rem;
            font-size: 3rem;
        }
    }
}
</style>