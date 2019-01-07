import "./css/index.css"
import Vue from 'vue'
import Main from './main.vue'

new Vue({
    render:h=>h(Main)      //入口组件  
}).$mount('#app')


