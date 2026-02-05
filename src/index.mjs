import express from "express";
import routes from "./routes/router.mjs";
import cookieParser from "cookie-parser";
import session from "express-session";

const app =express();

app.use(express.json());
app.use(cookieParser("this is  will used for encrypt"));
app.use(
    session({
        secret: "this is secret",
        saveUninitialized: false,
        resave:false,
        cookie: {
            maxAge: 6000 *60,
        }

}));
app.use(routes);



const port=3000;



app.get("/",(req,res)=>{
    res.cookie("user","admin",{maxAge: 60000 *60, signed:true})
    console.log(req.session);
    console.log(req.session.id);
    res.send({msg: "Root"})
});



app.listen(port,()=>{
    console.log(`app is running on port ${port}`);
})

