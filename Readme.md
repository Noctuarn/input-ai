# Project Overview

This repository contains a full-stack application with a backend developed using NestJS and a frontend developed using React. Below are the instructions for running each part of the project separately.

# Design Considerations

The application’s design is intentionally kept minimal and basic due to the focus on demonstrating custom functionality rather than providing a visually rich or complex user interface.

## Backend (NestJS)

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn))))))))

### SERVER RUN

1. **Go to the Nest js project**

   ```
   cd backend
   ```


2. **Install all the packages**
   
   ```
   npm i
   ```


3. **Env variables**  
   - Create an .env file in the backand directory and paste the next lines and your API key:
   
   ```
   API_KEY=your api key
   ENDPOINT=https://api.openai.com/v1/chat/completions
   ```


4. **Start the server**
   
   ``` 
   npm run start:dev
   ```


5. **Test the server**
   - Open your browser or API testing tool and go to http://localhost:5000/api. You should see a success message indicating that the API is working.

## Frontend (ReactJS)

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### CLIENT RUN

1. **Go to the React directory**
    - open new terminal in the root directory
    
   ```
   cd frontend
   ```

2. **Install all the packages**
   
   ```
   npm i
   ```

3. **Env variables**  
   - Create a .env file and paste the next lines:

   ```
   VITE_BASE_API_PATH="http://localhost:5000/api/text-transform/"
   ```


4. **Start the server**
   
   ```
   npm run dev
   ```


5. **Test the website**
   - Go to the http:localhost:5173 and you will see the website 

6. **Test inputs**
    - Open the App.tsx file and try uncommenting the code. Observe the differences between various inputs. Try creating your own input and customize it as needed. Make requests to see how the AI-powered features work

### NOTES 
- Ensure that the .env files for both backend and frontend are correctly configured with the appropriate environment variables.
- If you encounter issues with starting the servers, check the console output for errors and ensure all dependencies are correctly installed.
- For detailed API documentation and usage, refer to the backend API documentation and frontend usage instructions.
