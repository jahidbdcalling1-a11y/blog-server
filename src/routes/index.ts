import { Router } from "express";
import { userRouter } from "../module/user/user.route";
import { postRoutes } from "../module/post/post.route";
import { authRoutes } from "../module/auth/auth.route";


export const router = Router()

const moduleRouter = [
     {
        path:'/user',
        route:userRouter
     },
       {
        path:'/post',
        route:postRoutes
     },
     {
        path:'/auth',
        route:authRoutes
     }
]


moduleRouter.forEach((route)=>{
     router.use(route.path, route.route)
})