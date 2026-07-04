import mongoose from 'mongoose'



const userSchema = mongoose.Schema({


    name: {
        type: String,
        required: true,
        minLength: 4
    },

    email: {
        type: String,
        unique: true,
        required: true
    },

    password: {
        type: String,
        required: true
    },

    goals: {
        type: mongoose.Schema.Types.objectId,
        ref: "Goal"
    }




})


const userModal = mongoose.model('User', userSchema);


