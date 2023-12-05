<template>
  <v-app>
    <AppHeader @changeTab="changePage"/>

    <v-main>
      <v-container>
        <transition name="home">
            <div v-show="currentTabName === '#Home'">
                <Home/>
            </div>
        </transition>
        <transition name="profile">
            <div v-show="currentTabName === '#Profile'">
                <Profile/>
            </div>
        </transition>
        <transition name="studylog">
            <div v-show="currentTabName === '#StudyLog'">
                <StudyLog/>
            </div>
        </transition>
        <transition name="contact">
            <div v-show="currentTabName === '#Contact'">
                <Contact/>
            </div>
        </transition>
      </v-container>
    </v-main>

   <AppFooter/>
  </v-app>
</template>

<script>
import AppHeader from "./components/AppHeader.vue"
import AppFooter from "./components/AppFooter.vue"
import Home from "./views/Home.vue"
import Profile from "./views/Profile.vue"
import StudyLog from "./views/StudyLog.vue"
import Contact from "./views/Contact.vue"

export default {
  name: "App",
  components :{
    AppHeader,
    AppFooter,
    Home,
    Profile,
    StudyLog,
    Contact
  },
  data: () => ({
    currentTabName: "#Home"
  }),
  methods: {
    changePage(tabname){
        this.currentTabName = tabname;
    }
  }
}
</script>

<style lang="scss">
#Profile,#StudyLog,#Contact{
    display: none;
    opacity: 0;
}

.home,.profile,.studylog,.contact{
    &-enter{
        &-from{
            opacity: 0;
            display: block;
        }
        &-active{
            transition: all 0.3s;
        }
        &-to{
            opacity: 1;
        }
    }
    &-leave{
        &-from{
            opacity: 1;
        }
        &-active{
            transition: all 0.3s;
        }
        &-to{
            opacity: 0;
            display: none;
        }
    }
    
}
</style>

