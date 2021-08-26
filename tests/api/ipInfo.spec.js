/* eslint-disable prefer-promise-reject-errors */
import 'regenerator-runtime'
import axios from 'axios'
import { extractIPInfo, getIPInfo } from '@/api/ipInfo'

const expectedResult = {
  ip: 'ip',
  country: 'country',
  city: 'city',
}

const response = {
  data: expectedResult,
}
jest.spyOn(axios, 'get').mockImplementation(() => Promise.resolve(response))

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

  it('should correctly return data from response', async () => {
    expect(await getIPInfo()).toEqual(expectedResult)
  })

  it('should return the empty object if axios failed', async () => {
    axios.get.mockImplementation(() => Promise.reject('error'))
    expect(await getIPInfo()).toEqual({})
  })
})
