require('dotenv').config();
const mongoose=require('mongoose')

const db=`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster.jqjrhxo.mongodb.net/saksham?retryWrites=true&w=majority`;

//Connecting the MongoDB
mongoose.connect(db,{
    useNewUrlParser:true,
    useUnifiedTopology: true,
}).then(()=>{
    console.log("Database is connected !!!");
}).catch((err)=>{
    console.log(err);
    console.log("Connection has not been extablished with database !!!");
})