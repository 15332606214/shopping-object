import Home from "@/pages/Home";
import Search from "@/pages/Search";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Detail from "@/pages/Detail";
import AddCartSuccess from "@/pages/AddCartSuccess";

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
    },
]