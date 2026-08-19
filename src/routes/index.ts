import { Router } from "express";
import { userRouter } from "../module/user/user.route";
import { postRoutes } from "../module/post/post.route";


export const router = Router()

const moduleRouter = [
     {
        path:'/user',
        route:userRouter
     },
       {
        path:'/post',
        route:postRoutes
     }
]


moduleRouter.forEach((route)=>{
     router.use(route.path, route.route)
})