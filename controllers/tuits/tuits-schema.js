import mongoose from 'mongoose';
const schema = mongoose.Schema({
    tuit: String,
    likes: Number,
    postedBy: {
        username: String
    },
    comment: Number,
    retuits: Number,
    avatarImage: String,
}, {collection: 'tuits'});
export default schema;