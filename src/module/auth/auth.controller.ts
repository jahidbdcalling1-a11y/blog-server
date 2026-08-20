import { NextFunction, Request, Response } from "express"
import { catchAsync } from "../../utils/catchAsync"
import { sentResponse } from "../../utils/sentResponse"
import { authService } from "./auth.service"


const credentialsLogin  = catchAsync(async(req:Request, res:Response, next:NextFunction)=>{

              const payload = req.body
              const user  = await authService.credentialsLogin(payload)
               
              sentResponse(res,{
                         success:true,
                         statusCode:200,
                        message:" login successfully",
                        data:user
              })
       
})

export const authController = {
    credentialsLogin
}

