$(document).ready(function(){

    /* 创建组件构造器  */
    var Home = Vue.extend({
        template: '#home',
        props: ['myPath'],
        data: function() {
            return {
                msg: 'Hello, vue router!',
            }
        },
        route: {
            data: function(transition){
                transition.next({
                    myPath: transition.to.path
                })
                console.log(this.myPath)
            }
        }

    })

    var Aboutone = Vue.extend({
        template: '#aboutone',
        props: ['myPath'],
        data: function() {
            return {
            }
        },
        route: {
            data: function(transition){
                transition.next({
                    myPath: transition.to.path
                })
                console.log(this.myPath)
            }
        }
    })

    var Abouttwo = Vue.extend({
        template: '#abouttwo',
        props: ['myPath'],
        data: function() {
            return {
            }
        },
        route: {
            data: function(transition){
                transition.next({
                    myPath: transition.to.path
                })
                console.log(this.myPath)
            }
        }
    })

    var Messageone = Vue.extend({
        template: '#messageone',
        props: ['myPath'],
        data: function() {
            return {
            }
        },
        route: {
            data: function(transition){
                transition.next({
                    myPath: transition.to.path
                })
                console.log(this.myPath)
            }
        }
    })

    var Messagetwo = Vue.extend({
        template: '#messagetwo',
        props: ['myPath'],
        data: function() {
            return {
            }
        },
        route: {
            data: function(transition){
                transition.next({
                    myPath: transition.to.path
                })
                console.log(this.myPath)
            }
        }
    })

    var Messagethree = Vue.extend({
        template: '#messagethree',
        props: ['myPath'],
        data: function() {
            return {
            }
        },
        route: {
            data: function(transition){
                transition.next({
                    myPath: transition.to.path
                })
                console.log(this.myPath)
            }
        }
    })

    /* 创建路由器  */
    var router = new VueRouter()

    /* 创建路由映射  */
    router.map({
        '/home': {
            name: 'home', // 具名路由
            component: Home
        },
        '/aboutone': {
            name: 'aboutone',
            component: Aboutone
        },
        '/abouttwo': {
            name: 'abouttwo',
            component: Abouttwo
        },
        '/messageone': {
            name: 'messageone',
            component: Messageone
        },
        '/messagetwo': {
            name: 'messagetwo',
            component: Messagetwo
        },
        '/messagethree': {
            name: 'messagethree',
            component: Messagethree
        }
    })

    router.redirect({
        '/': '/home'  // 重定向首页
    })

    /* 启动路由  */
    var myApp = Vue.extend({
        data: function(){
            return {
                currentPath: ''
            }
        }

    })
    router.start(myApp, '#app')


    // var navApp = new Vue({
    //     el: '#app',
    //     data: {
    //         currentPath: '/aboutone'
    //     }
    // })



    $('.nav-item').on('click', function(){
        $(this).find('.secondary-nav-item').slideToggle();
        // console.log($('.list-group-item'), $('.list-group-item').not($(this).find('.list-group-item')))
        // $('.list-group-item').not($(this).find('.list-group-item')).removeClass('nav-active');
    })

    $('.secondary-list-group-item').on('click', function(e){
        e.stopPropagation();
        console.log('点击二级菜单！')
        // $(this).parent().parent().find('.list-group-item').addClass('nav-active');
    })

    // $('.secondary-list-group-item.nav-active').parent().parent().find('.list-group-item').addClass('nav-active')











})
