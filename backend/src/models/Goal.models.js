import mongoose from 'mongoose'



const goalSchema = mongoose.Schema({

    title: {
        type: String,
        required: true
    },

    price: {
        type: Number,
        required: true,

    },

    saved: {
        type: Number,
        required: true
    }

})




const goalsModel = mongoose.model('goal', goalSchema);



export default goalsModel