// es6 module

// 整个项目的入口文件

import App from './App.js'
import Vue from './vue.js'


new Vue({
    el:'#app',
    components:{
        App
    },
    template: `
        <App />
    `
});