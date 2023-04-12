import mongoose from 'mongoose'

const UserScheme = new mongoose.Schema({
    email:{
        type : String,
        required : [true, 'please provide email'],
        unique: true,        
    },

    password:{
        type: String,
        required: [true, 'Please provide password'],
        minlength: 6,
        select: false,
    }
})

export default mongoose.model('Login',UserScheme)