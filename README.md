This is a simple To-Do List application built using Node.js and Express.js. It allows users to create, update, delete, and complete tasks with due dates and categories. Data is stored in a MongoDB database.

Features:
Create a task with a title, description, due date, and category.
View all tasks.
Update task details.
Mark tasks as completed.
Delete tasks.
Validation to ensure task titles are not empty.
Handle errors gracefully.



Requirements:
Node.js (v14+)
MongoDB


Installation:
1. Clone the repository: git clone <repository_url>
2. Install dependencies: npm install
3. Configure environment variables:
Create a .env file in the root directory of the project.

Add the following variables inside the .env file:
PORT=5000  # or any other port you want to run the server
MONGO_URI=<your_mongodb_connection_string>  # MongoDB connection string
4. Start the server with nodemon: npm run dev


API Endpoints:
1. Create a new task
Method: POST /api/tasks
Request Body (JSON):
{
  "title": "Node.js",
  "description": "Node.js",
  "dueDate": "2024-09-20",
  "category": "Education"
}
2. Get all tasks
Method: GET /api/tasks
3. Update a task
Method: PUT /api/tasks/:id
Request Body (JSON):
{
  "title": "Express.js",
  "description": "Express.js",
  "dueDate": "2024-09-25",
  "category": "Backend",
  "completed": false
}
4. Mark a task as completed
Method: PATCH /api/tasks/:id/complete
5. Delete a task
Method: DELETE /api/tasks/:id


Code Structure:
/controllers: Contains the logic for the tasks API. Each function (create, update, get, delete) is separated for maintainability.
/routes: Handles routing for task-related requests. It maps HTTP methods to their respective controllers.
/models: Contains the Mongoose schema for the Task model, defining the structure of a task in the database.
index.js: The entry point of the application. It sets up the Express server, connects to MongoDB, and mounts the API routes.


Key Decisions:
MVC Structure: The application is organized using the Model-View-Controller (MVC) pattern. This keeps concerns separated, making the code cleaner and more maintainable.
MongoDB: Chosen for data persistence due to its flexibility and ease of use with Node.js. Mongoose was used for data modeling.
ES6 Syntax: The code leverages modern JavaScript features to keep the code clean and efficient.


Usage Instructions:
Add a new task:
Use any REST API client like Insomnia or Postman to send a POST request to /api/tasks with the JSON body.

View tasks:
Send a GET request to /api/tasks to retrieve all tasks.

Update a task:
Use PUT /api/tasks/:id with updated task details in the request body.

Complete a task:
Mark a task as completed using PATCH /api/tasks/:id/complete.

Delete a task:
Use DELETE /api/tasks/:id to remove a task.


Conclusion:
This is the complete content for how to use the application, features, API details, and structure.