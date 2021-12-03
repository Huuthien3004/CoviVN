import axios from '../utils/api'

const categoriesApi = {
  getCategories: () => {
    const url = '/categories'
    return axios.get(url)
  },
}

export default categoriesApi
