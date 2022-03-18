const express = require('express');
const app = express();
const port = 5000;

const userRoute=require('./Routers/userRoute')
app.use('/api',userRoute)
const authMiddleware = (req, res, next)=>{
    const hour= new Date().getHours();
    const day = new Date().getDay();
    if ((hour < 9)  && (hour > 17) && ((day > 0)  && (day < 6))) {
        res.send('we are not working');
        next();
       
    }else{
        res.sendFile(__dirname + '/statics');
       
        }
        console.log(day)
    }
    
    app.use(authMiddleware)

    app.use(express.static(__dirname + '/statics'));

app.listen(port, (err)=> err ? console.error (err):console.log('The server is running ' , port)
);
