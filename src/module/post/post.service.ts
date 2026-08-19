import prisma from "../../config/db"
import { Post, Prisma } from "../../generated/prisma/client"



const postCreate = async (payload:Prisma.PostCreateInput): Promise<Post>=>{

    const result = await prisma.post.create({
        data:payload
    })

    return result

}

const getAllPost = async ()=>{
     const result = await prisma.post.findMany()

     return result
}

const getSinglePostId = async(id:number)=>{

    const result  = await prisma.post.findUnique({
         where:{
            id
         }
    })

    return result

}

 const updatePost = async (id:number, payload:Partial<Post>)=>{

   const result = await prisma.post.update({
     where:{
        id
     },
     data:payload
   })
  return result
 }

  const deketePost = async(id:number)=>{

     const result = await prisma.post.delete({
         where:{
            id
         }
     })

     return result
        
  }



export const postService = {
     postCreate,
     getAllPost,
    getSinglePostId,
     updatePost,
     deketePost
}