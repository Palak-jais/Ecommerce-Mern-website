const router=require('express').Router()
const userctrl=require('../controller/userctrl')
const auth=require('../middleware/auth')

router.post("/register",userctrl.register)
router.post("/login",userctrl.login)
router.get("/logout",userctrl.logout)
router.get("/refresh_token",userctrl.refreshToken)
router.get("/infor",auth,userctrl.getUser)
router.patch('/addcart',auth,userctrl.addCart)
router.patch('/history',auth,userctrl.history)
module.exports=router