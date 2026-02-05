import express from "express";

import routes from "./routes/router.mjs"

const app =express();

app.use(express.json())
app.use(routes);



const port=3000;






 











app.get("/",(req,res)=>{
    // res.cookie("thisIsKey","thisIsValue",{maxAge: 60000})
    res.send({msg: "Root"})
});



app.listen(port,()=>{
    console.log(`app is running on port ${port}`);
})


// local host 3000/users?filter=user_name&value=go

//thunder client extention installled

