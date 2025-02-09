import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  location: { type: String, required: true },
  date: { type: Date, required: true },
  time: { type: String, required: true },
  deadline: { type: Date, required: true },
  spotsLeft: { type: Number, required: true },
  image: { type: String, required: true }, // Add this line to store the image URL or path
});

const Event = mongoose.model('Event', eventSchema);
export default Event;