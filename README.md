[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=11181458&assignment_repo_type=AssignmentRepo)


# Event Management Application - Node.js with Express and MongoDB

This project is an event management application built using Node.js, Express.js, and MongoDB. It provides CRUD (Create, Read, Update, Delete) operations for events, along with features like event categorization, searching, filtering, pagination, and user authentication. The application allows users to register, login, and book events based on their roles (editor or user). Data validation is implemented using Express Validators, and password hashing is used for enhanced security.

## Features

1. **Event CRUD Operations**
   - Create: Users with editor/admin roles can create new events by providing details like event name, description, date, location, etc.
   - Read: Users can view a single event by its ID or retrieve a list of all events.
   - Update: Editors/admins can update the details of an event, such as modifying the event date, description, or location.
   - Delete: Editors/admins can delete events from the system.

2. **Event Categorization**
   - Events can be categorized into different categories, allowing users to filter events based on their interests or preferences.

3. **Searching and Filtering**
   - Users can search for events using keywords or specific criteria like event name, category, or date.
   - Filtering options are available to narrow down the search results based on various parameters like location, date range, etc.

4. **Pagination**
   - Events are displayed in paginated form to enhance the user experience, allowing them to navigate through a large number of events easily.

5. **User Authentication**
   - User registration and login functionality are implemented using JSON Web Tokens (JWT).
   - Users can create an account, login with their credentials, and access restricted features like event booking.

6. **Role-Based Access Control**
   - Two roles are implemented: editor and user.
   - Editors/admins have additional privileges to perform CRUD operations on events, while regular users can only view and book events.

7. **Password Hashing**
   - User passwords are securely hashed using appropriate hashing algorithms before storing them in the database. This ensures the protection of user data even in the event of a data breach.

8. **Data Validation**
   - Express Validators are used to validate user input, ensuring that the data entered during registration, event creation, etc., meets the required criteria.

## Prerequisites

Before running the application, ensure that the following dependencies are installed on your machine:

- Node.js: [Installation Guide](https://nodejs.org/)
- MongoDB: [Official MongoDB installation manual](https://docs.mongodb.com/manual/installation/)

## Setup and Installation

1. Clone the project repository from GitHub.
2. Navigate to the project directory using a terminal or command prompt.
3. Run `npm install` to install the required dependencies.
4. Configure the MongoDB connection settings in the application.
5. Run `node server.js` or `npm start` to start the server.

## API Endpoints

The following API endpoints are available in the application:

- `POST /api/register`: Register a new user.
- `POST /api/login`: Authenticate user credentials and generate a JWT token.
- `GET /api/events`: Get all events.
- `GET /api/events/:eventId`: Get details of a specific event by ID.
- `POST /api/events`: Create a new event (accessible to editors/admins only).
- `PUT /api/events/:eventId`: Update an existing event (accessible to editors/admins only).
- `DELETE /api/events/:eventId`: Delete an event (accessible to editors/admins only).

*Note: Replace `:eventId` with the ID of the specific event.*

## Testing the Application

1. Use a tool like Postman or any other API testing tool.
2. Set the appropriate HTTP method and endpoint to test the desired functionality.
3. Pass any required parameters or payload in the request.
4. Inspect the response to verify the successful execution or any error messages.

## Docker Image Deployment 

Remote Url: [Event app ](https://hub.docker.com/layers/parvejkhan09/event-app/latest/images/sha256:0ed23b0721705c3a5fcc9032108ebbb0a87b0f8734fb18211d9bca5334574728)


## Contribution

Contributions to the project are welcome. If you encounter any issues or have suggestions for improvements, please create a new issue on the project repository.

## Conclusion

The event management application provides a robust backend solution for organizing and managing events. With features like CRUD operations, event categorization, searching, filtering, pagination, and user authentication, it offers a comprehensive system for event management. By following the setup instructions and utilizing the API endpoints, you can effectively utilize and test the application's functionality.
