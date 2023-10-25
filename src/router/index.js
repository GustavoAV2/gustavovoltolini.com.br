import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import ProjectView from "../views/ProjectView.vue";
import ProfileView from "../views/ProfileView.vue";
import HackathonsView from "../views/HackathonView.vue";
import HackathonSambaMeetsView from "../views/hackathons/HackathonSambaMeetsView.vue";
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
      path: "/projects",
      name: "projects",
      component: ProjectView,
    },
    {
      path: "/hackathons",
      name: "hackathons",
      component: HackathonsView,
    },
    {
      path: "/hackathon/sambameets",
      name: "hackathon",
      component: HackathonSambaMeetsView,
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
    {
      path: "/:catchAll(.*)", // Unrecognized path automatically matches 404
      redirect: "/404",
    },
    {
      path: "/404",
      component: PageNotFoundView,
    },
  ],
});

export default router;
