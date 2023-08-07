# Habit

# Node.js Express Habit Tracker

This is a simple Node.js application built with Express to manage habits. Users can add, view, update, and delete habits using this application. The data is stored in a MongoDB database, and the application uses the EJS template engine for rendering views.

## Prerequisites

Before running the application, make sure you have the following installed:

- Node.js
- MongoDB
- Git (optional, for version control)

## Getting Started

1. Clone the repository to your local machine:

   ```bash
   git clone <repository_url>
   ```

2. Navigate to the project directory:

   ```bash
   cd <project_folder>
   ```

3. Install dependencies using npm:

   ```bash
   npm install
   ```

4. Create a `.env` file in the root directory and set the following environment variables:

   ```env
   PORT=<port_number>
   MONGODB_URI=<your_mongodb_connection_string>
   ```

   Replace `<port_number>` with the desired port (default is 3000), and `<your_mongodb_connection_string>` with the MongoDB connection string.

5. Start the application:

   ```bash
   npm start
   ```

   The server will be running at `http://localhost:<port_number>`. You can access the application in your web browser.

## Usage

### Routes

- **GET /:** Get a list of all habits.
- **POST /add:** Add a new habit.
- **GET /habit/:id:** View and manage a specific habit by its ID.
- **POST /habit/:id:** Update a specific habit by its ID.
- **GET /delete/:id:** Delete a specific habit by its ID.

### Frontend

The frontend is built using EJS templates and located in the `views` directory. The application uses Bootstrap for styling, and the CSS file is served from the `public` directory.

### Database

The application uses MongoDB as the database. The connection is established using Mongoose, and the database configuration is in the `./config/mongoose.js` file.

## Contributing

If you'd like to contribute to this project, feel free to submit a pull request. Please make sure to follow the coding conventions and include tests for any new features.

## License

This project is licensed under the [MIT License](LICENSE).

