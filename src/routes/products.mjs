import {Router} from "express";
import {getParamsId} from '../utils/middlewares.mjs';
import {products} from "../utils/constance.mjs";
import session from "express-session";

const router = Router();


router.get("/api/products",(req,res)=>{
    req.session.visited= true;
    console.log(req.session.id);
    const {query:{filter,value}}=req;
    console.log(filter,value);
    if(filter && value){
      return res.send(products.filter(((product)=>product[filter].toLowerCase().includes(value)))) 
    }
   
    res.send(products);
})






router.get("/api/products/:id",getParamsId,(req,res)=>{
    const id=req.id
    const product=products.find((product)=>product.id === id);
    if(product){
       return res.send(product);
    }
    return res.status(400).send({msg:"user not found"})
})




export default router;