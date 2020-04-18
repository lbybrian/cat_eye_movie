import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home";
import Theater from "../views/Theater";
import Movie from "../views/Movie";
import CityList from "../views/CityList";
import Hot from "../views/Hot";
import Coming from "../views/Coming";
import My from "../views/My";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/home"
  },
  {
    path:'/home',
    name:'home',
    redirect:'/home/movie',
    component:Home,
    children:[
      {
        path:'movie',
        name:'movie',
        redirect:'/home/movie/hot',
        component:Movie,
        children:[
          {
            path:'hot',
            name:'hot',
            component:Hot
          },
          {
            path:'coming',
            name:'coming',
            component:Coming
          }
        ]
      },
      {
        path:'theater',
        name:'theater',
        component:Theater
      },
      {
        path:'my',
        name:'my',
        component:My
      }
    ]
  },
  {
    path:'../views/CityList',
    name:'CityList',
    component:CityList
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
