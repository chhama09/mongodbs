const mongoose = require('mongoose');

main().then(()=>{
    console.log("Connection Succesfully");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test')
};

const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    age:Number,
});

const User=mongoose.model("User",userSchema);

User.findByIdAndDelete("66890d047057d795c7626e64")
    .then((res)=>{
        console.log(res);
    })
    .catch((err)=>{
        console.log(err);
    })

// User.insertMany([
//     {name:"tony",email:"tony@gmail.com",age:50},
//     {name:"Bruce",email:'bruce@gmail.com',age:47},
//     {name:"peter",email:"peter@gmail.com",age:30},
// ]).then((data)=>{
//     console.log(data);
// });