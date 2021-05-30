const mongoose = require('mongoose');
var MovieSchema = new mongoose.Schema({
    moviename: {
      type: String,
      required: true,
      trim: true,
      unique: true
    },
    movietime:{
        type: Number,
        required: true
    },
    director:{
        type: String,
        required: true
    }
});

  module.exports = mongoose.model("Movies", MovieSchema);