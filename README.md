[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=11181458&assignment_repo_type=AssignmentRepo)
# Title
Creating APIs with Mongoose - Backend Assignment

# Introduction

Express is one of the most popular web frameworks for Node.js that supports routing, middleware, view system… Mongoose is a promise-based Node.js ODM for MongoDB that provides a straight-forward, schema-based solution to model our application data along with built-in type casting, validation, query building, business logic hooks… In this tutorial, I will show you step by step to build Node.js Restful API for CRUD operations using Express, Mongoose with MongoDB database.

You should install MongoDB in your machine first. The installation instructions can be found at [Official MongoDB installation manual](https://www.mongodb.com/docs/manual/installation/).


# Assignment

You need to follow the tutorial on [Bezkoder Mongoose Tutorial](https://www.bezkoder.com/node-express-mongodb-crud-rest-api/) and build the apis using a mongodb running on your local machine. 

- The Project structure will remain the same. 
- Rename the database name present in db.config.js to use local database instead of bezkoder_db
- Test the APIs from Postman
- Make changes to the Tutorials schema and add new fields like author,likes and ratings
- What is the use of cors package?
- What is a middleware in Express? How does it work?
- What are query params, path params and body payload? How to send those from Postman? How to capture those in express code?



## Assignment 1: Setting up the project

1. Install Node.js and MongoDB on your computer if you don't have them already.
2. Create a new project folder for your API.
3. Initialize a new Node.js project in your project folder using the command "npm init".
4. Install the following dependencies using npm: express, mongoose, body-parser, cors.
5. Create a new file called "server.js" in your project folder.

## Assignment 2: Defining the API endpoints

1. In the "server.js" file, require the dependencies you installed in the previous step.
2. Create a new instance of the Express.js application using the "express()" function.
3. Define the HTTP methods and routes for your API endpoints using the app object. For example: app.get('/products', function(req, res) { ... }).
4. Use the "body-parser" middleware to parse incoming request data.
5. Use the "cors" middleware to enable cross-origin resource sharing.

## Assignment 3: Connecting to the MongoDB database

1. Define a MongoDB connection string using the "mongoose.connect()" function. This should include the database name and your authentication credentials if necessary.
2. Create a new Mongoose schema for your data model. For example: var tutorialSchema = new mongoose.Schema({ name: String, description: String, ... }).
3. Create a new Mongoose model using the schema you defined. For example: var Tutorial = mongoose.model('Tutorial', tutorialSchema).
4. Use the Mongoose model to perform CRUD operations on the MongoDB database. For example: Tutorial.find({}, function(err, products) { ... }).

## Assignment 4: Testing the API

1. Start your API server using the "node server.js" command.
2. Use a tool like Postman or curl to send HTTP requests to your API endpoints.
3. Verify that your API is working correctly by checking the response data and any error messages.
4. Debug any issues or errors that you encounter.
