import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/example01",
    component: () => import("@/views/example01/Example01.vue")
  },
  {
    path: "/example02",
    component: () => import("@/views/example02/Example02.vue")
  },
  {
    props: true,
    path: "/example03/students/:sid/homeworks/:hid",
    component: () => import("@/views/example03/Example03.vue")
  },
  {
    path: "/example03-02",
    component: () => import("@/views/example03/Example03-02.vue")
  },
  {
props: true,
path: "/example04-01",
component: () => import("@/views/example04/Example04-01.vue")
  },
  {
    props: true,
    path: "/example04-02",
    component: () => import("@/views/example04/Example04-02.vue")
  },
  {
    props: true,
    path: "/example04-03/students/:sid/homeworks/:hid",
    component: () => import("@/views/example04/Example04-03.vue")
  },
  {
    props: true,
    path: "/example04-04",
    component: () => import("@/views/example04/Example04-04.vue")
  },
  {
    props: true,
    path: "/example05-01",
    component: () => import("@/views/example05/Example05-01.vue")
  },
  {
    props: true,
    path: "/example05-02",
    component: () => import("@/views/example05/Example05-02.vue")
  },
  {
    props: true,
    path: "/example05-03",
    component: () => import("@/views/example05/Example05-03.vue")
  },
  {
    props: true,
    path: "/example05-04",
    component: () => import("@/views/example05/Example05-04.vue")
  },
  {
    props: true,
    path: "/example06-01",
    component: () => import("@/views/example06/Example06-01.vue")
  },
  {
    props: true,
    path: "/example06-02",
    component: () => import("@/views/example06/Example06-02.vue")
  },
  {
    props: true,
    path: "/example07-01",
    component: () => import("@/views/example07/Example07-01.vue")
  },
  {
    props: true,
    path: "/example07-02",
    component: () => import("@/views/example07/Example07-02.vue")
  },
  {
    props: true,
    path: "/example07-03",
    component: () => import("@/views/example07/Example07-03.vue")
  },
  {
    props: true,
    path: "/example07-04",
    component: () => import("@/views/example07/Example07-04.vue")
  },
  {
    props: true,
    path: "/example08-01",
    component: () => import("@/views/example08/Example08-01.vue")
  },
  {
    props: true,
    path: "/example08-02",
    component: () => import("@/views/example08/Example08-02.vue")
  },
  {
    props: true,
    path: "/example09-01",
    component: () => import("@/views/example09/Example09-01.vue")
  },
  {
    props: true,
    path: "/example09-02",
    component: () => import("@/views/example09/Example09-02.vue")
  },
  {
    props: true,
    path: "/example10-01",
    component: () => import("@/views/example10/Example10-01.vue")
  },
  {
    props: true,
    path: "/example10-02",
    component: () => import("@/views/example10/Example10-02.vue")
  },
  {
    props: true,
    path: "/example11-01",
    component: () => import("@/views/example11/Example11-01.vue"),
    children: [
      {
        path:"",
        component: () => import("@/views/example11/About.vue")
      },
      {
        path: "course",
        components: {
          default: () => import("@/views/example11/Course.vue"),
          button: () => import("@/views/example11/AddCourseButton.vue")
        }},
        
        {
          path:"/homework",
          components: {
            default: () =>import("@/views/example11/Homework.vue"),
            button: () => import("@/views/example11/AddHomeworkButton.vue")
          }
        }
    ]
  },
  {
    props: true,
    path: "/example12/students/:sid/homeworks/:hid",
    component: () => import("@/views/example12/Example12-01.vue")
  },
  {
    props: true,
    path: "/homework01",
    component: () => import("@/views/homework01/Homework01.vue")
  },
  {
    props: true,
    path: "/homework02",
    component: () => import("@/views/homework02/Home.vue"),
    children: [
      {
        props: true,
        path: "location",
        component: () => import("@/views/homework02/Location.vue")
      },
      {
        name: "foods",
        props: true,
        path: "foods",
        component: () => import("@/views/homework02/Foods.vue")
      },
      {
        name: "shops",
        props: true,
        path: "shops/:sid",
        component: () => import("@/views/homework02/Shop.vue")
      },
      {
        props: true,
        path: "orders",
        component: () => import("@/views/homework02/Order.vue")
      }
    ]
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
