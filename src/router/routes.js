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
        }
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
        component:AddCartSuccess
    },{
        path:'/shopcart',
        component:ShopCart
    },{
        path:'/trade',
        component:Trade
    },{
        path:'/center',
        component:Center
    },{
        path:'/pay',
        component:Pay
    },{
        path:'/paysuccess',
        component:PaySuccess
    }
]