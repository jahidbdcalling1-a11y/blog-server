import { Router } from "express";
import { userController } from "./user.controller";


const router = Router()



router.post('/register',  userController.createUser)
router.get('/getAllUser',  userController.getAllUser)
router.get('/:id',  userController.getUserbyId)
router.patch('/:id',  userController.updateUser)
router.delete('/:id',  userController.deleteUser)


 export const userRouter  = router;