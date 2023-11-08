import axios from 'axios'

const apiUrl = 'https://run.mocky.io/v3/25c6bdb6-6377-41f9-907d-c6549ce9e4f7'

const getAllData = async () => {
    const response = await axios.get( apiUrl )
    return response.data
}

export { getAllData }