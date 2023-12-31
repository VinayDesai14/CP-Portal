const express = require("express");
const collection =require('./src/mongo');
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
const port=process.env.PORT || 8000;

//express related stuff
app.get("/",cors(),(req,res)=>{

})

app.post("/todolist",async(req,res)=>{
    const {email}=req.body;
    try{
        const obj = await collection.find({email:email},{link:1,name:1});
        res.json(obj);
    }
    catch(e){
        res.json("fail");
    }
});
app.post("/todolistdata", async (req, res) => {
    const{email,link,name}=req.body
    try {
        const check=await collection.findOne({email:email,link:link,name:name});
        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
            const user = new collection(req.body)
            await user.save()
        }
    } catch (e) {
        console.log(e);
    }
});
app.post("/todolistremove", async (req, res) => {
    const{email,name}=req.body
    try {
        const check=await collection.deleteOne({email:email,name:name});
        if(check){
            res.json("success")
        }
        else{
            res.json("fail")
        }
    } catch (e) {
        console.log(e);
    }
});
app.post("/todolistcheck", async (req, res) => {
    const {email}=req.body;
    try{
        const obj = await collection.find({email:email},{name:1});
        res.json(obj);
    }
    catch(e){
        res.json("fail");
    }
});
app.listen(port,()=>{
    console.log(`server is running at port no ${port}`);
})

