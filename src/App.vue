<template>
  <v-app>
    <AppHeader @changeTab="changePage"/>

    <v-main>
      <transition name="fade" appear>
          <div v-show="currentTabName === '#Home'">
              <Home/>
          </div>
      </transition>
      <v-container>
        <transition name="fade">
            <div v-show="currentTabName === '#Profile'">
                <Profile/>
            </div>
        </transition>
        <transition name="fade">
            <div v-show="currentTabName === '#StudyLog'">
                <StudyLog/>
            </div>
        </transition>
        <transition name="fade">
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
    currentTabName: "#Home",
    nextTabName:"#Home",
    animate:false
  }),
  methods: {
    changePage(tabname){
        this.nextTabName = tabname;
    },
  },
  watch:{
    nextTabName: function(){
        this.currentTabName = null;
        setTimeout(()=>{
        this.currentTabName = this.nextTabName;
        },200)
    }
  }
}
</script>
	
<style lang="scss">
body{
  font-family: 'Zen Maru Gothic', serif;
}
h1,h2,h3,h4{
  font-family: 'Caveat', cursive;
}
.fade{
    &-enter-active,&-leave-active{
        transition: all 0.2s;
    }
    &-enter-from, &-leave-to{
        opacity: 0;
    }
}
</style>

