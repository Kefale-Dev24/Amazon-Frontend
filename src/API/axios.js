import axios from "axios";

const axiosInstance = axios.create({
  //local host
  //baseURL:"http://localhost:2424/"
  
  //local instance of firebase functions
  // baseURL: "http://127.0.0.1:5001/clone-2025-1b997/us-central1/api",

  //deployed version of amazon server on render.com
  baseURL: "https://amazon-api-deploy-44fn.onrender.com",
});

export { axiosInstance };
