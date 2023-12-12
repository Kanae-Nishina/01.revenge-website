<template>
    <h2>StudyLog</h2>
    <v-container class="my-5">
        <p>自主学習の記録を残しています。</p>
    </v-container>
    <v-row id="StugyLog">
        <v-col cols="6" v-for="(data,index) in notion_datas" :key="data">
            <v-card :href="data.url" target="_blank">
                <v-img :src="`@/assets/thumbnail/${data.imageUrl}`" class="thumbnail"><span>{{index}}</span></v-img>
                <v-card-title>{{ data.title }}</v-card-title>
                <v-card-text>
                    <v-row>
                        <v-col class="tag">
                            <span v-for="tag in data.tags" :key = "tag">
                                {{ tag }}
                            </span>
                        </v-col>
                        <v-col class="text-right day">{{ data.day }}</v-col>
                    </v-row>
                </v-card-text>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
// import Slcard from '../components/SlCard.vue'
export default {
    name: "StufyLog",
    components: {
        // Slcard,
    },
    data: () => ({
        notion_data: {
            url: "#",
            imageUrl: "profile.png",
            title: "title",
            tags: ["tag", "tag"],
            day: "2023年12月12日",
        },
        notion_datas: [
            {
                url: "#",
                imageUrl: "profile.png",
                title: "title",
                tags: ["tag", "tag"],
                day: "2023年12月12日",
            }
        ]
    }), 
    mounted: () => {
        
  }
}
</script>

<style lang="scss">
h2 {
    text-align: center;
    font-size: calc(1.6rem * 2);
    margin-bottom: 50px;
}

#StugyLog {
    .v-card--variant-elevated {
        background-color: rgb(174, 236, 252);
    }

    .tag {
        span {
            background-color: rgb(58, 198, 233);
            padding: 3px 5px;
            border-radius: 10px;
            margin: 0 3px;
        }
    }

    .thumbnail {
        position: relative;

        span {
            position: absolute;
            right: 5px;
            bottom: -10px;
            font-size: 50px;
            font-weight: bold;
        }
    }
}
</style>