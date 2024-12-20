import axios from "axios";

// Create an Axios instance with environment variable for baseURL
const api = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL || "http://localhost:9000",
    headers: {
        "Content-Type": "application/json; charset=utf-8",
    },
    timeout: 10000, // 10 seconds timeout
});

// Request Interceptor to add Authorization header
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token");
        if (token) {
            config.headers["Authorization"] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        // Optional: Handle request error here
        return Promise.reject(error);
    }
);

// Response Interceptor to handle global responses
api.interceptors.response.use(
    (response) => {
        // Any status code within the range of 2xx triggers this function
        return response;
    },
    (error) => {
        // Any status codes outside the range of 2xx trigger this function

        if (error.response) {
            // Server responded with a status other than 2xx
            const { status, data } = error.response;

            if (status === 401) {
                // Unauthorized: Possible invalid or expired token
                // Optional: Redirect to login or dispatch a logout action
                console.error("Unauthorized! Logging out...");
                // Example: window.location.href = "/login";
            } else if (status === 403) {
                // Forbidden: User does not have necessary permissions
                console.error("Forbidden! You don't have access.");
            } else if (status === 500) {
                // Internal Server Error
                console.error("Server error! Please try again later.");
            }

            // Optionally, you can return a custom error message
            return Promise.reject(data);
        } else if (error.request) {
            // Request was made but no response received
            console.error("No response received from server.");
            return Promise.reject("Network error: No response from server.");
        } else {
            // Something happened in setting up the request
            console.error("Error in setting up the request:", error.message);
            return Promise.reject(error.message);
        }
    }
);

// Optional: Function to set or remove the Authorization header manually
export const setAuthToken = (token) => {
    if (token) {
        api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
        delete api.defaults.headers.common["Authorization"];
    }
};

export default api;
