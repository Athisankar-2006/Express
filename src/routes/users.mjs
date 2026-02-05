import {Router} from "express";
import {getParamsId,getUserIndexById} from "../utils/middlewares.mjs";
import users from "../utils/constance.mjs";
import {createUserValidationSchema} from '../utils/validationSchemas.mjs'
import {validationResult,matchedData,checkSchema} from "express-validator";



const router = Router();


const users = [
{id:1, user_name: "sankar"},
{id:2, user_name: "athi"},
{id:3, user_name: "spider"},
{id:4, user_name: "kumar"},
{id:5, user_name: "peter"},
{id:6, user_name: "iron man"},
{id:7, user_name: "enjoy"}
]



router.get("/api/users",(req,res)=>{
    const {query:{filter,value}}=req;
    console.log(filter,value);
    if(filter && value){
      return res.send(users.filter((user)=>user[filter].toLowerCase().includes(value)))  
    }
   
    res.send(users);
})



router.get("/api/users/:id",getParamsId,(req,res)=>{
    const id=req.id
    const user=users.find((user)=>user.id === id);
    if(user){
       return res.send(user);
    }
    return res.status(404).send({msg:"user not found"})
})



router.post("/api/users",checkSchema(createUserValidationSchema),
    (req, res)=>{
    const result= validationResult(req);

    if(!result.isEmpty()){
         return res.status(400).send({error:result.array()});
    }

    // console.log(req['express-validator#contexts']);
    const body=matchedData(req);
    const NewUser={id: users[users.length-1].id+1, ...body}; 
    users.push(NewUser)
    return res.status(201).send(NewUser);
})



router.put("/api/users/:id",getUserIndexById,(req,res)=>{

    const userIndex=req.userIndex
    const {body}=req;
    users[userIndex]={id:id, ...body}
    return res.status(200).send({msg:"user updated"});
    

})


router.patch("/api/users/:id",getUserIndexById,(req,res)=>{
    const userIndex=req.userIndex;
    const {body} =req;
    users[userIndex]={...users[userIndex],  ...body};
    res.sendStatus(200);

})

router.delete("/api/users/:id",getUserIndexById,(req,res)=>{
    const userIndex=req.userIndex;
    console.log(userIndex)
    users.splice(userIndex,1)
    res.sendStatus(200)

})




export default router;