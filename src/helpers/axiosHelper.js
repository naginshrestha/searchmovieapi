import axios from "axios"

export const fetchData = async (movieName) => {
  const apiEp = `http://www.omdbapi.com/?apikey=ea9fbbc9&t=${movieName}`

  try {
    const { data } = await axios.get(apiEp)
    return data
  } catch (error) {
    console.log(error)
  }
}
