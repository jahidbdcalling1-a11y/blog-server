import { NextFunction, Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { postService } from "./post.service";
import { sentResponse } from "../../utils/sentResponse";


const createPost = catchAsync(async(req:Request, res:Response, next:NextFunction)=>{

              const payload = req.body
              const user  = await postService.postCreate(payload)
               
              sentResponse(res,{
                         success:true,
                         statusCode:200,
                        message:"successfully create post",
                        data:user
              })
       
})


const getAllPost = catchAsync(async(req:Request, res:Response, next:NextFunction)=>{

              const page = Number(req.query.page) || 1;
              const limit = Number(req.query.limit) || 10;
              const search = (req.query.search as string)|| "";
              const isFeatured = req.query.isFeatured ? req.query.isFeatured ==="true" : undefined;
              const tags = req.query.tags ? (req.query.tags as string).split(",") : [];
              const sort = (req.query.sort as string) || ""

              const user  = await postService.getAllPost({page, limit, search, isFeatured, tags, sort })
               
              sentResponse(res,{
                         success:true,
                         statusCode:200,
                        message:"successfully get all post",
                        data:user
              })
       
})

      const getUserPostId = catchAsync(async(req:Request, res:Response, next:NextFunction)=>{
      
            const user  = await postService.getSinglePostId(Number(req.params.id))
           

          sentResponse(res,{
                     success:true,
                     statusCode:200,
                    message:"successfully getSingle Post",
                    data:user
          })
    })

    const  updatePost = catchAsync(async(req:Request, res:Response, next:NextFunction)=>{

        const id = Number(req.params.id)
          const result = await postService.updatePost(id, req.body);

              sentResponse(res,{
                     success:true,
                     statusCode:200,
                    message:"successfully updated user ",
                    data:result
          })

    })

    const  deletePost = catchAsync(async(req:Request, res:Response, next:NextFunction)=>{
        
        const id = Number(req.params.id)

        const result = await postService.deketePost(id)

           sentResponse(res,{
                     success:true,
                     statusCode:200,
                    message:"successfully delete post ",
                    data:result
          })

    })



export const postController  = {
     createPost,
     getAllPost,
    getUserPostId,
    updatePost,
    deletePost
   
}