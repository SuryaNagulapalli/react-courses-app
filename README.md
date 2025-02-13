- **Home Route (`/`)**  
  - Fetches courses from `coursesApiUrl` using an HTTP GET request.
  - Displays a loader while data is being fetched.
  - Shows a list of courses on a successful API response.
  - Displays a failure view if the API request fails.
  - Provides a **Retry** button to re-fetch data.
  - Navigates to **Course Details** when a course is clicked.

- **Course Item Details Route (`/courses/:id`)**  
  - Fetches course details from `courseDetailsApiUrl` using the `id` as a path parameter.
  - Displays a loader while data is being fetched.
  - Shows course details on a successful API response.
  - Displays a failure view if the API request fails.
  - Provides a **Retry** button to re-fetch data.

- **Not Found Route**  
  - If an invalid URL is entered, the user is redirected to a **Not Found Page**.
  - Clicking the website logo redirects to the **Home Route**.

## 🌍 Live Demo

🔗 **Live Link:** [View Demo](https://allcourses.ccbp.tech)  

## 🛠️ Installation

1. Clone the repository:  
   ```sh
   git clone https://github.com/your-username/react-courses-app.git
Navigate to the project directory:
sh
Copy
Edit
cd react-courses-app
Install dependencies:
sh
Copy
Edit
npm install
Start the development server:
sh
Copy
Edit
npm start
Open the app in your browser at:
arduino
Copy
Edit
http://localhost:3000
📌 Technologies Used
React.js
React Router
Fetch API
CSS for styling
📜 API Endpoints
Courses API: coursesApiUrl
Course Details API: courseDetailsApiUrl/:id
🤝 Contributing
Contributions are welcome! Feel free to fork the repository and submit a pull request.

📄 License
This project is licensed under the MIT License.

Made with ❤️ by Your Name
