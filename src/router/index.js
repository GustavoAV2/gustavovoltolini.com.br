import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import ProfileView from "../views/ProfileView.vue";
import HackathonsView from "../views/HackathonView.vue";
import HackathonSambaMeetsView from "../views/hackathons/HackathonSambaMeetsView.vue";
import HackathonDigioView from "../views/hackathons/HackathonDigioView.vue";
import HackathonCitiView from "../views/hackathons/HackathonCitiView.vue";
import HackathonSaoCarlosView from "../views/hackathons/HackathonSaoCarlosView.vue";
import PageNotFoundView from "../views/PageNotFoundView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/profile",
      name: "profile",
      component: ProfileView,
    },
    {
      path: "/hackathons",
      name: "hackathons",
      component: HackathonsView,
    },
    {
      path: "/hackathon/sambameets",
      name: "hackathon-samba",
      component: HackathonSambaMeetsView,
    },
    {
      path: "/hackathon/citi",
      name: "hackathon-citi",
      component: HackathonCitiView,
    },
    {
      path: "/hackathon/digio",
      name: "hackathon-digio",
      component: HackathonDigioView,
    },
    {
      path: "/hackathon/saocarlos",
      name: "hackathon-saocarlos",
      component: HackathonSaoCarlosView,
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
    {
      path: "/404",
      component: PageNotFoundView,
    },
    {
      path: "/:catchAll(.*)", // Unrecognized path automatically matches 404
      redirect: "/404",
    }
  ],
});

export default router;
