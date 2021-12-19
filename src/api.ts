import axios from 'axios'

const BASE_URL = 'https://jsonplaceholder.typicode.com'

const axiosInstance = axios.create({
  baseURL: BASE_URL,
})
export const api = {
  getAllPosts: async () => {
    let response = await axiosInstance.get('/posts')
    return response.data
    /*  let response = await fetch(`${BASE_URL}/posts`)
    let json = await response.json()
    return json */
  },
  addNewPosts: async (title: string, body: string, userId: number) => {
    /* let response = await fetch(`${BASE_URL}/posts`, {
      method: 'POST',
      body: JSON.stringify({
        title,
        body,
        userId,
      }),
      headers: { 'Content-Type': 'application/json' },
    })
    let json = await response.json()

    return json */
    let response = await axiosInstance.post(`/posts`, {
      title,
      body,
      userId,
    })
    return response.data
  },
  getAllMovies: async () => {
    let response = await axios.get('https://api.b7web.com.br/cinema/')
    return response.data
  },
}
