import axios from "axios"
import VueRouter from "@/router"
import * as Sentry from "@sentry/vue"

// EXPORT API COLLECTIONS HERE
export * from "./customer"
export * from "./genetic-analyst"

// AXIOS INSTANCE EXPORT BY DEFAULT
// PLEASE DISCUSS BEFORE YOU WANT TO EDIT THIS SCRIPT
const apiClientRequest = axios.create({
  baseURL: process.env.VUE_APP_BACKEND_API,
  headers: { 
    "Content-Type": "application/json",
    "debio-api-key": process.env.VUE_APP_DEBIO_API_KEY
  
  },
  auth: {
    username: process.env.VUE_APP_USERNAME,
    password: process.env.VUE_APP_PASSWORD
  }
})

apiClientRequest.interceptors.response.use(
  response => {
    if (response?.status === 503) VueRouter.push({ name: "maintenance" })

    return response;
  },
  error => {
    Sentry.captureException(error);

    if (error?.response?.status === 503 || !error?.response) {
      VueRouter.push({ name: "maintenance" })
      return
    }

    return Promise.reject(error);
  }
);

export default apiClientRequest
