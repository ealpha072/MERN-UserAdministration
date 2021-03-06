import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        lowercase:true,
        required:[true, "cannot be blank"],
        index:true,
        unique:true
    },
    email:{
        type:String,
        required:[true, "cannot be blank"],
        lowercase:true,
        index:true,
        unique:true
    },
    passwordHash:{
        type:String
    }
})

userSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
      // the passwordHash should not be revealed
      delete returnedObject.passwordHash
    }
})

const User = mongoose.model('users', userSchema)
export default User