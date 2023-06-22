const express=requires("express");
const{
    addTransection,
    getAlltransection,
    editTransection,
    deleteTransection,
}=require("../controllerstransectionCtrl");
const router=expressexpress.Router();
router.post("/add-transection",addTransection);
router.post("/edit-transection",editTransection);
router.post("/delete-transection",deleteTransection);
router.post("/get-transection",getAllTransection);
module.exports=router;