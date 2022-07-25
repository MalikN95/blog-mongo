const mongoose = require('mongoose')
const Schema = mongoose.Schema

const postSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  titleImg:{
    type: String
  },
  text: {
    type: String,
    required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users',
    required: true
  },
  date:{
    type: Date,
    required: true,
    default: Date.now
  },
  media:[
    {
        src: {
            type: String
        }
    }
  ]
})

module.exports = mongoose.model('posts', postSchema)