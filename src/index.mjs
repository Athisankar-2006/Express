import express from "express";
// import productsRouter from "./routes/products.mjs"
// import usersRouter from "./routes/users.mjs"
// import { getParamsId,getUserIndexById } from "./utils/middlewares.mjs";

const app =express();

// app.use(express.json())
// app.use(usersRouter);
// app.use(productsRouter)


const port=3000;







const usersp=[
{id:1, user_name:"Athi"},
{id:2, user_name:"spider man"},
{id:3, user_name:"bad man"},
{id:4, user_name:"iron man"},
{id:5, user_name:"super man"}

]




const productsP=[
{id:1, product_name:"apple"},
{id:2, product_name:"linux"},
{id:3, product_name:"kali"},
{id:4, product_name:"window"},
{id:5, product_name:"ios"}

]



app.get("/api/users",(req,res)=>{

    const {query:{filter,value}} =req;

    if(filter&& value){
        return res.send(usersp.filter(((user)=>user[filter].toLowerCase().includes(value))))
    }
    res.send(usersp);

})


app.get("/api/productsp",(req,res)=>{

    const {query:{filter,value}} =req;

    if(filter&& value){
        return res.send(productsP.filter(((product)=>product[filter].toLowerCase().includes(value))))
    }
    res.send(productsP);

})



app.get("/api/productsp/:id",(req,res)=>{
    // console.log(req.params.id)
    const id=parseInt(req.params.id);
   if(isNaN(id)){
      return res.status(400).send({msg:"it is not a number"})
   }

   const user=usersp.find((user)=>user.id===id);
   if(user){
      return res.send(user)
   }
   return res.send({msg:"user not found"})
})



app.get("/api/productsP/:id",(req,res)=>{
    // console.log(req.params.id)
    const id=parseInt(req.params.id);
   if(isNaN(id)){
      return res.status(400).send({msg:"it is not a number"})
   }

   const product=productsP.find((user)=>product.id===id);
   if(user){
      return res.send(product)
   }
   return res.send({msg:"user not found"})
})








app.get("/",(req,res)=>{
    // res.cookie("thisIsKey","thisIsValue",{maxAge: 60000})
    res.send({msg: "Root"})
});



app.listen(port,()=>{
    console.log(`app is running on port ${port}`);
})


// local host 3000/users?filter=user_name&value=go

//thunder client extention installled

