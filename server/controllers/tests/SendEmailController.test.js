import 'regenerator-runtime/runtime'
import * as controller from '../SendEmailController'
import * as emailsService from '../../services/EmailsService'

jest.mock('../../services/EmailsService', () => ({
  sendMailFromVariables: jest.fn(),
}))

const sendEmail = jest.fn(() => Promise.resolve({ data: 'data' }))

emailsService.sendMailFromVariables.mockImplementation(sendEmail)

describe('SendEmailController', () => {
  let json
  let req
  let res

  beforeEach(() => {
    json = jest.fn(data => data)

    req = {
      body: {
        payload: '{ "email": {} }',
      },
    }

    res = {
      json,
      status: jest.fn(() => ({
        json,
      })),
    }
  })

  it('should correctly handle invalid templateId in req body', async () => {
    req = {
      body: {
        payload: '{ "huntflow": { "firstName": "first", "lastName": "last" }, "email": {} }',
      },
      file: {
        path: 'path',
      },
    }
    await controller.send(req, res)
    expect(res.status).toHaveBeenCalledWith(500)
    expect(json).toHaveBeenCalledWith({ message: 'templateId key not found or incorrect', status: 500 })
  })

  it('should correctly handle invalid variables in req body', async () => {
    req = {
      body: {
        payload: '{ "huntflow": { "firstName": "first", "lastName": "last" }, "email": { "templateId": 123 } }',
      },
      file: {
        path: 'path',
      },
    }
    await controller.send(req, res)
    expect(res.status).toHaveBeenCalledWith(500)
    expect(json).toHaveBeenCalledWith({ message: 'variables key not found', status: 500 })
  })

  it('should correctly call sendEmail and createLead methods', async () => {
    req = {
      body: {
        payload: '{ "huntflow": { "firstName": "first", "lastName": "last" }, "email": { "templateId": 123, "variables": {} } }',
      },
      file: {
        path: 'path',
      },
    }
    const data = await controller.send(req, res)
    expect(data).toEqual({ email: { data: 'data' } })
    expect(emailsService.sendMailFromVariables).toHaveBeenCalledTimes(1)
  })
})
