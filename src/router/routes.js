/* 
import form这种写法是 从上到下依次执行的同步引入
它是将所有组件全部引入完成才执行下边的代码 webpack会把所有引入组件集体打包成一个大文件
*/
/* 
import可以让路由组件单独打包，动态引入
路由组件在注册时可以是一个组件也可以是一个函数
写成函数当组件被调用时，对应函数就会被调用，然后对应的import函数开始执行，动态引入并打包成单独文件
*/

/* 
import Home from "@/pages/Home";
import Search from "@/pages/Search";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Detail from "@/pages/Detail";
import AddCartSuccess from "@/pages/AddCartSuccess";
import ShopCart from "@/pages/ShopCart";
import Trade from "@/pages/Trade";
import Center from "@/pages/Center";
import Pay from "@/pages/Pay";
import PaySuccess from "@/pages/PaySuccess"; 
*/
const Home = () => import("@/pages/Home");
const Search = () => import("@/pages/Search");
const Login = () => import("@/pages/Login");
const Register = () => import("@/pages/Register");
const Detail = () => import("@/pages/Detail");
const AddCartSuccess = () => import("@/pages/AddCartSuccess");
const ShopCart = () => import("@/pages/ShopCart");
const Trade = () => import("@/pages/Trade");
const Center = () => import("@/pages/Center");
const Pay = () => import("@/pages/Pay");
const PaySuccess = () => import("@/pages/PaySuccess");
// 二级路由
// import GroupOrder from "@/pages/Center/GroupOrder";
// import MyOrder from "@/pages/Center/MyOrder";
const GroupOrder = () => import("@/pages/Center/GroupOrder");
const MyOrder = () => import("@/pages/Center/MyOrder");
// 用于路由独享守卫
import store from "@/store";

export default [
    {
        path: '/',
        component: Home
    }, {
        name: 'search',
        path: '/search/:keyword?',
        component: Search
    }, {
        path: '/login',
        component: Login,
        meta: {
            isHideFooter: true
        },
        // 路由独享守卫
        // beforeEnter:(to,from,next)=>{
        //     // 只有未登录才能到登录页
        //     let token=store.state.user.token
        //     if(token){
        //         next('/')
        //     }else{
        //         next()
        //     }
        // }
    }, {
        path: '/register',
        component: Register,
        meta: {
            isHideFooter: true
        }
    }, {
        path: '/detail/:skuId',
        component: Detail,
        meta: {
            isHideFooter: true
        }
    }, {
        path: '/addcartsuccess',
        component: AddCartSuccess,
        beforeEnter: (to, from, next) => {
            let skuNum = to.query.skuNum
            let skuInfo = sessionStorage.getItem('SKUINFO_KEY')
            if (skuNum && skuInfo) {
                next()
            } else {
                alert('必须携带参数')
                next('/')
            }
        }
    }, {
        path: '/shopcart',
        component: ShopCart
    }, {
        path: '/trade',
        component: Trade,
        beforeEnter: (to, from, next) => {
            if (from.path === '/shopcart') {
                next()
            } else {
                next('/')
            }
        }
    }, {
        path: '/pay',
        component: Pay
    }, {
        path: '/paysuccess',
        component: PaySuccess,
        beforeEnter: (to, from, next) => {
            if (from.path === '/pay') {
                next()
            } else {
                next('/')
            }
        }
    }, {
        path: '/center',
        component: Center,
        redirect: '/center/myorder',
        children: [
            {
                path: 'myorder',
                component: MyOrder
            }, {
                path: 'grouporder',
                component: GroupOrder
            }
        ]
    }
]