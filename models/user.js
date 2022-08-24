const {Schema, model} = require("mongoose")

const userSchema = new Schema({

})

const User = new model('User', userSchema)
module.exports = User;