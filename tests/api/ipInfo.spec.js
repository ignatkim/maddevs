/* eslint-disable prefer-promise-reject-errors */
import 'regenerator-runtime'
import axios from 'axios'
import { extractIPInfo, getIPInfo } from '@/api/ipInfo'

const expectedResult = {
  ip: 'ip',
  country: 'country',
  city: 'city',
}

jest.spyOn(axios, 'get')

describe('IPinfo service', () => {
  describe('extractIPInfo helper', () => {
    it('should return empty object', () => {
      expect(extractIPInfo({})).toEqual({})
    })

    it('should return object with correct keys', () => {
      const data = {
        one: 'one',
        ip: 'ip',
        country_name: 'country',
        city: 'city',
        two: 'two',
      }
      expect(extractIPInfo(data)).toEqual(expectedResult)
    })
  })

  it('should correctly return data from first api response', async () => {
    axios.get.mockImplementation(() => Promise.resolve({
      data: {
        ip: 'ip',
        version: 'IPv4',
        city: 'city',
        region: '',
        region_code: null,
        country: '',
        country_name: 'country',
        country_code: '',
        country_code_iso3: '',
        country_capital: '',
        country_tld: '',
        continent_code: '',
        in_eu: false,
        postal: null,
        latitude: 1,
        longitude: 2,
        timezone: null,
        utc_offset: null,
        country_calling_code: '',
        currency: '',
        currency_name: '',
        languages: '',
        country_area: 3,
        country_population: 4,
        asn: '',
        org: '',
      },
    }))
    expect(await getIPInfo()).toEqual(expectedResult)
  })

  it('should return the empty object if axios failed', async () => {
    axios.get.mockImplementation(() => Promise.reject('error'))
    expect(await getIPInfo()).toEqual({})
  })
})
