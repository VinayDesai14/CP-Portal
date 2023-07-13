const mongoose=require("mongoose");
main().catch(err => console.log(err));
async function main() {  
    await mongoose.connect("mongodb://127.0.0.1:27017/cpPortalRegistration",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    // useCreateIndex:true
}).then(()=>{
    console.log(`mongodb connected`);
}).catch((e)=>{
    console.log(e); 
})
}

const newSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    link:String,
    name:String,
})

const collection = mongoose.model("collection",newSchema)
module.exports=collection