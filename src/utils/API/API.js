import axios from "axios";

const axiosInstance = axios.create({
  baseURL: 'https://data.fx.kg/api/v1',
  headers: {
    'Authorization': 'Bearer 5gWtlALasAU9abnNCL9vND1ivb5JppnhnXlg1vdwd53c8e9e'
  }
})
const axios_Instance = axios.create({
    baseURL: 'https://thronesapi.com/'
})

export {
  axiosInstance,
  axios_Instance
}