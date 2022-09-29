const mongoose = require("mongoose");

mongoose.connect(`mongodb://localhost/fitness`, () => {
  console.log('CONNECTED TO MONGODB');
})

const fitnessSchema = new mongoose.Schema({
  user: {type: String, required: true},
  bodyPart: { type: String, required: true},
  date: { type: Date, required: true},
  duration: { type: Number, required: true},
  intensity: { type: String, enum: ['low', 'medium', 'high']},
  notes: String
})

const Fit = mongoose.model('Fit', fitnessSchema);

module.exports.Fit = Fit;