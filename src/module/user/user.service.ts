import prisma from "../../config/db"
import { Prisma, Role, User, UserStatus } from "../../generated/prisma/client";


const createUser = async (payload: Prisma.UserCreateInput): Promise<User> => {
  const createUser = await prisma.user.create({
    data: payload,
  });

  return createUser;
};


 const getAllUser = async () =>{
    const result  = await prisma.user.findMany({
        select:{
           id: true,
           name: true,
           email:true,
           phone: true,
           picture: true,
           updatedAt:true,
           createdAt:true,
           role:true,
           status: true,
           posts:true
        }
    })

    return result
 }

   
   const getUserbyId = async(id:number)=>{
      const result = await prisma.user.findUnique({
         where:{
            id
         }
      })

      return result

   }


   const updateUser = async (id:number,payload:Partial<User>) =>{
     const user = await prisma.user.update({
        where:{
          id,
        },
        data: payload
     })
     return user
  }


  const deleteUser = async(id:number)=>{
      const user = await prisma.user.delete({
          where:{
              id
          }
      })

      return user
  }


export const userService  ={
     createUser,
     getAllUser,
     getUserbyId,
     updateUser,
     deleteUser
}