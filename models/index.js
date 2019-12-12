import mongoose from 'mongooes'
// const mongooes = require('mongoose')

mongoose.connect('mongodb://localhost:27017/express-demo', {
    useCreateIndex: true,
    useNewUrlParser: true
})

const UserSchema = new mongoose.Schema({
    username: {type: String, unique: true},
    password: {type: String}
})

const User = mongoose.model('User', UserSchema)

export default {
    User
}