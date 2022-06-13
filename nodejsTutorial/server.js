const express = require("express");
const cors = require("cors");
const app = express();
const connectDB=require('./config/db.config');
const db=require('./models/index');
const Role = db.role;
 const authRoute =  require('./routes/auth.routes')
 const userRoute = require('./routes/user.routes')

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));
app.use(express.json());
connectDB();

app.use(function(req, res, next) {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );
  next();
});

app.use(express.urlencoded({extended:true}));


app.get('/',(res,req)=>{
    res.json({
        message:'Welcome to New server'
    });
});

app.use('/user',userRoute);
app.use('/auth',authRoute);
const PORT=process.env.PORT||8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
  });