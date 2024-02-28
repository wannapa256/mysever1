const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const courseSchema = new Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  ingredients: String,
  reviews: [
    { message: String, star: Number }
  ]
}, { timestamps: true });

module.exports = mongoose.model("Course", courseSchema);