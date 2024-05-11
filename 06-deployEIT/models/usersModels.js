
import { model } from 'mongoose';
import { Schema } from 'mongoose';

const userSchema = new Schema({
    nombreUser: {
        type: String,
        required: true
    },
    emailUser: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    provincia: {
        type: String,
    },
    timestamp: {
        type: Date,
        default: new Date()
    }
});

export default model('Usuario', userSchema);