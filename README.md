# React Student Management System

A simple application for managing student data, built with React and Vite.

## Features

*   **Add Students:** A form to add new students to the list.
*   **View Students:** A table that displays the list of all students.
*   **Search Students:** Instantly filter the student list by name.
*   **Popup Notifications:** Get success notifications when a student is added.
*   **Pre-populated Data:** The application starts with a list of 50 randomly generated students for demonstration.

## Tech Stack

*   [React](https://react.dev/)
*   [Vite](https://vitejs.dev/)
*   JavaScript
*   CSS

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

You need to have [Node.js](https://nodejs.org/en) and [npm](https://www.npmjs.com/) installed on your machine.

### Installation

1.  Clone the repository:
    ```sh
    git clone <repository-url>
    ```
2.  Navigate to the project directory:
    ```sh
    cd react-student-management
    ```
3.  Install the dependencies:
    ```sh
    npm install
    ```

### Running the Application

To start the development server, run the following command:

```sh
npm run dev
```

The application will be available at `http://localhost:5173` (or another port if 5173 is in use).

## Project Structure

The project is organized with the following structure:

```
src
├── app/         # Main App component
├── assets/      # Static assets like images
├── components/  # Reusable components (currently empty)
└── features/    # Core application features
    ├── Body.jsx
    ├── Footer.jsx
    ├── Header.jsx
    ├── Home.jsx
    ├── Student.jsx
    ├── StudentForm.jsx
    ├── StudentList.jsx
    └── Teacher.jsx
```