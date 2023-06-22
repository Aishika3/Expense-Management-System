const mongoose =require("mongoose");
const transectionSchema=new mongoose.Schema(
    {
        userid:{
            type:String,
            required:true,
        },
        amount:{
            type:Number,
            required:[true,"amountis required"],
        },
        type:{
            type:String,
            required:[true,"typeis required"],
        },
        category:{
            type:String,
            requires:[true,"cat is required"],
        },
        reference:{
            type:String,
        },
        description:{
            type:String,
            required:[true,"desc is required"],
        },
        date:{
            type:Date,
            required:[true,"data is required"],
        },
    },
    {timestamps:true}
);
const transectionModel=mongoose.model("transections",transectionSchema);
module.exports=transectionModel;