import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  completed: { type: Boolean, default: false },
  dueDate: Date, 
  category: String 
});

const Task = mongoose.model('Task', taskSchema);
export default Task;
