import {users} from "../utils/constance.mjs";



export const getUserIndexById=(req,res,next)=>{
    const id= parseInt(req.params.id);
    
    if(isNaN(id)){
       return res.status(400).send({msg:'bad request invaild id'})
    }
    const userIndex=users.find((user)=>user.id === id);
    if(userIndex === -1){
        return res.status(400).send({msg:"user not found"})
    }
     req.userIndex=userIndex; 
     next();

    }



export const getParamsId=(req,res,next)=>{

    const id= parseInt(req.params.id);
    console.log(id);
    if(isNaN(id)){
       return res.status(400).send({msg:'bad request invaild id'})
    }
   req.id=id;
   next();
   }
