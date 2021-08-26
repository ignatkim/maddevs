import axios from 'axios'

const extractIPInfo = data => {
  const ipInfo = {}

  ipInfo.ip = data.ip || data.query
  ipInfo.country = data.country_name || data.country
  ipInfo.city = data.city

  return ipInfo
}

export const getIPInfo = async () => {
  try {
    let ipInfo = {}
    let response = {}

    response = await axios.get('https://ipapi.co/json')
    if (response.data.ip) ipInfo = extractIPInfo(response.data)

    response = await axios.get('http://ip-api.com/json')
    if (response.data.query) ipInfo = (extractIPInfo(response.data))

    return ipInfo
  } catch (error) {
    return {}
  }
}
