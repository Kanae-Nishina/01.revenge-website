<template>
  <v-navigation-drawer v-model="drawer" location="right">
    <div class="text-right"><v-btn icon @click.stop="drawer = !drawer"><v-icon>mdi-close</v-icon></v-btn></div>
    <v-list>
      <v-list-item
       v-for="(menuItem, index) in menuItems" 
        :key="index" 
        :href="menuItem.href" 
        :title="menuItem.name"
        :prepend-icon="menuItem.prependIcon"
        @click="changeTab(menuItem.href)">
      </v-list-item>
    </v-list>
  </v-navigation-drawer>


  <v-app-bar>
    <v-app-bar-title>
      <v-img :src="imgPath" contain width="250" />
    </v-app-bar-title>

    <template v-slot:append>
      <v-tabs>
        <v-tab
          v-for="item in menuItems"
          :key="item"
          :prepend-icon="item.prependIcon"
          :href="item.href"
          @click="changeTab(item.href)">
          {{ item.name }}
        </v-tab>
      </v-tabs>
      <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    </template>
  </v-app-bar>
</template>

<script>
import constants from "../common/constants"

export default {
  name: "AppHeader",
  data: () => ({
    imgPath: require("@/assets/logo_transparent_font_black.png"),
    drawer: null,
    menuItems: constants.menuItems
  }),
  methods: {
    changeTab(tabname){
      this.drawer = null;
      this.$emit("changeTab", tabname);
    }
  }
}
</script>

<style lang="scss">
.v-list-item--active>.v-list-item__overlay,
.v-list-item[aria-haspopup=menu][aria-expanded=true]>.v-list-item__overlay {
  opacity: 0;
}
</style>