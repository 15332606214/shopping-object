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
// 二级路由
import GroupOrder from "@/pages/Center/GroupOrder";
import MyOrder from "@/pages/Center/MyOrder";

// 用于路由独享守卫
import store from "@/store";

export default[
    {
        path:'/',
        component:Home
    },{
        name:'search',
        path:'/search/:keyword?',
        component:Search
    },{
        path:'/login',
        component:Login,
        meta:{
            isHideFooter:true
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
    },{
        path:'/register',
        component:Register,
        meta:{
            isHideFooter:true
        }
    },{
        path:'/detail/:skuId',
        component:Detail,
        meta:{
            isHideFooter:true
        }
    },{
        path:'/addcartsuccess',
        component:AddCartSuccess,
        beforeEnter:(to,from,next)=>{
            let skuNum=to.query.skuNum
            let skuInfo=sessionStorage.getItem('SKUINFO_KEY')
            if(skuNum&&skuInfo){
                next()
            }else{
                alert('必须携带参数')
                next('/')
            }
        }
    },{
        path:'/shopcart',
        component:ShopCart
    },{
        path:'/trade',
        component:Trade
    },{
        path:'/pay',
        component:Pay
    },{
        path:'/paysuccess',
        component:PaySuccess
    },{
        path:'/center',
        component:Center,
        redirect:'/center/myorder',
        children:[
            {
                path:'myorder',
                component:MyOrder
            },{
                path:'grouporder',
                component:GroupOrder
            }
        ]
    }
]