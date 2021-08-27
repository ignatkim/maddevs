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
      if (response.data.ip) return extractIPInfo(response.data)
    } catch (error) {
      response = await axios.get('http://ip-api.com/json')
      if (response.data.query) return extractIPInfo(response.data)
    }

    return ipInfo
  } catch (error) {
    return ipInfo
  }
}
