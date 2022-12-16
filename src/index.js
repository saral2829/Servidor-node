const express = require('express');
const mongoose= require('mongoose');
require("dotenv").config();
const clientesRoutes= require("./routes/clientes");
var cors = require('cors');

const app = express();
const port = process.env.PORT || 9000;

//middleware
app.use(express.json());
app.use(cors())
app.use('/api', clientesRoutes);


app.get("/",(req,res)=>{
    res.send("welcome to my api ");
})

//mongodb conection
mongoose.connect(process.env.MONGODB_URI).then(()=>console.log("Connected to MongoDB Atlas")).catch((error)=> console.log(error));

app.listen(port, () => console.log('serve listening on port ', port ));
