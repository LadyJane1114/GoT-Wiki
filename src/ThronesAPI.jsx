import axios from "axios"

const thronesAPI = axios.create({
    baseURL: 'https://thronesapi.com/api/v2'
  })
  export const getCharacters = async () => {
      const response = await thronesAPI.get('/characters')
      return response.data
    }

export default thronesAPI