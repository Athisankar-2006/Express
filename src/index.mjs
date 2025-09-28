import express from "express";

const app =express()

const port=3000;


const users = [
{id:1, user_name: "sankar"},
{id:2, user_name: "athi"},
{id:3, user_name: "spider"},
{id:4, user_name: "kumar"},
{id:5, user_name: "peter"},
{id:6, user_name: "iron man"},
{id:7, user_name: "enjoy"}
]



const products = [
{id:1, product_name: "poco"},
{id:2, product_name: "infinix"},
{id:3, product_name: "apple"},
{id:4, product_name: "oppo"},
{id:5, product_name: "vivo"},
{id:6, product_name: "iq"},
{id:7, product_name: "redmi"}
]



app.get("/",(req,res)=>{
    res.send({msg: "Root"})
});


app.get("/api/users",(req,res)=>{
    const {query:{filter,value}}=req;
    console.log(filter,value);
    if(filter && value){
      return res.send(users.filter((user)=>user[filter].toLowerCase().includes(value)))  
    }
   
    res.send(users);
})



app.get("/api/products",(req,res)=>{
    const {query:{filter,value}}=req;
    console.log(filter,value);
    if(filter && value){
      return res.send(products.filter(((product)=>product[filter].toLowerCase().includes(value)))) 
    }
   
    res.send(products);
})

app.get("/api/users",(req,res)=>{
    res.send(users)
})


app.get("/api/users/:id",(req,res)=>{
    const id= parseInt(req.params.id);
    console.log(id);
    if(isNaN(id)){
       return res.status(400).send({msg:'bad request invaild id'})
    }
    const user=users.find((user)=>user.id === id);
    if(user){
       return res.send(user);
    }
    return res.status(400).send({msg:"user not found"})
})




app.get("/api/products/:id",(req,res)=>{
    const id= parseInt(req.params.id);
    console.log(id);
    if(isNaN(id)){
       return res.status(400).send({msg:'bad request invaild id'})
    }
    const product=products.find((product)=>product.id === id);
    if(product){
       return res.send(product);
    }
    return res.status(400).send({msg:"user not found"})
})


app.use(express.json())




app.post("/api/users",(req, res)=>{
    console.log(req.body);
    const{body}=req;
    const NewUser={id: users[users.length-1].id+1, ...body};
    users.push(NewUser)
    return res.status(201).send(NewUser);
})


app.listen(port,()=>{
    console.log(`app is running on port ${port}`);
})

app.put("/api/users/:id",(req,res)=>{

    const id= parseInt(req.params.id);
    console.log(id);
    if(isNaN(id)){
       return res.status(400).send({msg:'bad request invaild id'})
    }
    const userIndex=users.find((user)=>user.id === id);
    if(userIndex === -1){
        return res.status(400).send({msg:"user not found"})
    }
    const {body}=req;
    users[userIndex]={id:id, ...body}
    return res.status(200).send({msg:"user updated"});
    

})


app.patch("/api/users/:id",(req,res)=>{
    const id= parseInt(req.params.id);
    console.log(id);
    if(isNaN(id)){
       return res.status(400).send({msg:'bad request invaild id'})
    }
    const userIndex=users.find((user)=>user.id === id);
    if(userIndex === -1){
        return res.status(400).send({msg:"user not found"})
    }
    const {body} =req;
    users[userIndex]={...users[userIndex], ...body};
    res.sendStatus(200);

})

app.delete("/api/users/:id",(req,res)=>{
   const id= parseInt(req.params.id);
    console.log(id);
    if(isNaN(id)){
       return res.status(400).send({msg:'bad request invaild id'})
    }
    const userIndex=users.find((user)=>user.id === id);
    if(userIndex === -1){
        return res.status(400).send({msg:"user not found"})
    }

    users.splice(userIndex,1)
    res.sendStatus(200)

})


// local host 3000/users?filter=user_name&value=go

//thunder client extention installled

// put- update (complete update)
