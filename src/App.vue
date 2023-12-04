<template>
  <v-app>
    <v-app-bar>
      <v-app-bar-title>
        Application Bar
      </v-app-bar-title>

      <template v-slot:append>
        <v-btn>
          <v-icon>
            mdi-home
          </v-icon>Home
        </v-btn>
        <v-btn>
          <v-icon>
            mdi-account
          </v-icon>Profile
        </v-btn>
        <v-btn>
          <v-icon>
            mdi-post
          </v-icon>StudyLog
        </v-btn>
        <v-btn>
          <v-icon>
            mdi-handshake-outline 
          </v-icon>Contact
        </v-btn>
        <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      </template>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" location="right">
      <v-list>
        <v-list-item prepend-icon="mdi-home" title="Home" value="home"></v-list-item>
        <v-list-item prepend-icon="mdi-account" title="Profile" value="profile"></v-list-item>
        <v-list-item prepend-icon="mdi-post" title="StudyLog" value="studylog"></v-list-item>
        <v-list-item prepend-icon="mdi-handshake-outline " title="Contact" value="contact"></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container>
        <v-sheet>
          Main Contents
        </v-sheet>
      </v-container>
    </v-main>

    <v-footer app>
      <v-layout>
        <p class="mx-auto">©Topi's Profile</p>
      </v-layout>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: ()=>({
    drawer:null
  })
}
</script>

<style lang="scss">

</style>

