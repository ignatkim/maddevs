import axios from 'axios'

export const getIPInfo = async () => {
  try {
    let response = await axios.get('https://ipapi.co/json')
    if (response.data.ip) return response.data

    response = await axios.get('http://ip-api.com/json')
    response.data.ip = response.data.query
    return response.data
  } catch (error) {
    return {}
  }
}
