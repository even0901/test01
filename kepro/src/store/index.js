import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    category: [{
        id: 0,
        category: "HTML",
        url: "/category/0",
        blogs: [{
            id: 0,
            title: "HTML5新增标签",
            content: "HTML5新增标签——内容"
          },
          {
            id: 1,
            title: "HTML基础语法",
            content: "HTML基础语法——内容"
          }
        ]
      },
      {
        id: 1,
        category: "CSS",
        url: "/category/1",
        blogs: [{
            id: 0,
            title: "CSS3新特性一览",
            content: "CSS3新特性一览——内容"
          },
          {
            id: 1,
            title: "CSS3动画使用",
            content: "CSS3动画使用——内容"
          }
        ]
      },
      {
        id: 2,
        category: "JavaScript",
        url: "/category/2",
        blogs: [{
            id: 0,
            title: "JavaScript内置对象一览表",
            content: "JavaScript内置对象一览表——内容"
          },
          {
            id: 1,
            title: "闭包的使用",
            content: "闭包的使用——内容"
          }
        ]
      },
      {
        id: 3,
        category: "HTTP",
        url: "/category/3",
        blogs: [{
            id: 0,
            title: "HTTP协议详细介绍",
            content: "HTTP协议详细介绍——内容"
          },
          {
            id: 1,
            title: "HTTP状态码一览",
            content: "HTTP状态码一览——内容"
          }
        ]
      },
      {
        id: 4,
        category: "React",
        url: "/category/4",
        blogs: [{
            id: 0,
            title: "React之状态管理",
            content: "React之状态管理——内容"
          },
          {
            id: 1,
            title: "React之脚手架使用",
            content: "React之脚手架使用——内容"
          }
        ]
      },
      {
        id: 5,
        category: "Vue",
        url: "/category/5",
        blogs: [{
            id: 0,
            title: "Vue常用指令",
            content: "Vue常用指令——内容"
          },
          {
            id: 1,
            title: "Vue生命周期",
            content: "Vue生命周期——内容"
          }
        ]
      },
      {
        id: 6,
        category: "Angular",
        url: "/category/6",
        blogs: [{
            id: 0,
            title: "Angular指令",
            content: "Angular指令——内容"
          },
          {
            id: 1,
            title: "Angular深入原理",
            content: "Angular深入原理——内容"
          }
        ]
      },
      {
        id: 7,
        category: "ES6",
        url: "/category/7",
        blogs: [{
            id: 0,
            title: "ECMAScript 的背景",
            content: "ECMAScript 的背景——内容"
          },
          {
            id: 1,
            title: "Promise 对象使用方法",
            content: "Promise 对象使用方法——内容"
          }
        ]
      }
    ],
    hotblogs: {
      id: 6,
      category: "Angular",
      url: "/category/6",
      blogs: [{
          id: 0,
          title: "Angular指令",
          content: "Angular指令——内容"
        },
        {
          id: 1,
          title: "Angular深入原理",
          content: "Angular深入原理——内容"
        }
      ]
    }
  },
  mutations: {},
  actions: {},
  modules: {}
})