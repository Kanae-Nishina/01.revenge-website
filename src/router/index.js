import { createRouter, createWebHistory } from 'vue-router'
import Home from "../views/Home.vue"
import Profile from "../views/Profile.vue"
import StudyLog from "../views/StudyLog.vue"
import Contact from "../views/Contact.vue"

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/studylog',
    name: 'StudyLog',
    component: StudyLog
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
