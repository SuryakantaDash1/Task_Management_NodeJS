import Task from '../models/Task.js';

// Create a new task
export const createTask = async (req, res) => {
  try {
    const { title, description, dueDate, category } = req.body;

    if (!title) {
      return res.status(400).json({ error: 'Task title cannot be empty' });
    }

    const task = new Task({
      title,
      description,
      dueDate: dueDate ? new Date(dueDate) : null,
      category: category || null 
    });

    await task.save();
    res.status(201).json(task);
  } catch (err) {
    res.status(500).json({ error: 'Error creating task' });
  }
};

// Get all tasks
export const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching tasks' });
  }
};

// Update a task
export const updateTask = async (req, res) => {
  try {
    const { title, description, dueDate, category, completed } = req.body;

    const task = await Task.findByIdAndUpdate(
      req.params.id,
      {
        title,
        description,
        dueDate: dueDate ? new Date(dueDate) : null,
        category: category || null,
        completed
      },
      { new: true, runValidators: true }
    );

    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }

    res.status(200).json(task);
  } catch (err) {
    res.status(500).json({ error: 'Error updating task' });
  }
};

// Mark task as completed
export const completeTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }

    if (task.completed) {
      return res.status(400).json({ error: 'Task is already completed' });
    }

    task.completed = true;
    await task.save();

    res.status(200).json(task);
  } catch (err) {
    res.status(500).json({ error: 'Error completing task' });
  }
};

// Delete a task
export const deleteTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);

    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }

    res.status(204).json({ message: 'Task deleted successfully' }); 
  } catch (err) {
    res.status(500).json({ error: 'Error deleting task' });
  }
};
