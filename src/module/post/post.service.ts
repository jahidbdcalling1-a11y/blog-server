import prisma from "../../config/db"
import { Post, Prisma } from "../../generated/prisma/client"



const postCreate = async (payload:Prisma.PostCreateInput): Promise<Post>=>{

    const result = await prisma.post.create({
        data:payload
    })

    return result

}

const getAllPost = async ({page=1,limit = 10, search, isFeatured, tags, sort}:{page?:number, limit?:number, search?:string, isFeatured?:boolean, tags?:string[], sort?:string })=>{

      const skip = (page - 1) * limit

      const where: any = {
          AND:[
            search && {
                OR:[
                     {
                    title:{
                        contains:search,
                        mode:'insensitive'
                    }
                },
                   {
                    content:{
                        contains:search,
                        mode:'insensitive'
                    }
                }
                ]
            },
            typeof isFeatured === "boolean" && {isFeatured},
            (tags && tags.length >0) && {tags: { hasEvery:tags }}

          ].filter(Boolean)
      }
  
    const result = await prisma.post.findMany({
         skip,
         take: limit,
         where,
         orderBy:{
            createdAt: sort === "asc" ? "asc" : "desc"
         }
    })

    const total = await prisma.post.count({where})

     return {
      data:result,
      pagination:{
         page,
         limit,
         total,
         totalPage: Math.ceil(total/ limit)
      }

     }
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