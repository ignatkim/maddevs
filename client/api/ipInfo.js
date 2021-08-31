import axios from 'axios'

export const extractIPInfo = data => {
  const ipInfo = {}

  ipInfo.ip = data.ip || data.query
  ipInfo.country = data.country_name || data.country
  ipInfo.city = data.city

  return ipInfo
}

export const getIPInfo = async () => {
  const ipInfo = {}
  let response = {}

  try {
    try {
      response = await axios.get('https://ipapi.co/json')
      response.data.ip = null
      if (!response.data.ip) throw new Error('IP key is not defined')
      return extractIPInfo(response.data)
    } catch (error) {
      response = await axios.get('http://ip-api.com/json')
      if (!response.data.query) throw new Error('Query key is not defined')
      return extractIPInfo(response.data)
    }
  } catch (error) {
    return ipInfo
  }
}
