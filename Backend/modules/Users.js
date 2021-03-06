const mongoose=require('mongoose')
const Schema = mongoose.Schema;

const UserSchema= new Schema({
    name:{
        type: String,
        required: true,

    },
    email:{
        type: String,
        required: true,
        
    },
    password:{
        type: String,
        required: true,
        
    },
    date:{
        type: Date,
        default: Date.now
    }
})
// surikunal28@gmail.com
const User=mongoose.model('user',UserSchema)
User.createIndexes([
    {
      "name": 1
    },
    {
      "email": 1
    }
  ],
  {
    unique: true
  });


module.exports=User;