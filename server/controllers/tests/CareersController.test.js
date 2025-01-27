import 'regenerator-runtime/runtime'
import * as controller from '../CareersController'
import * as huntflowService from '../../services/HuntflowService'
import * as emailsService from '../../services/EmailsService'

jest.mock('../../services/EmailsService', () => ({
  sendMailFromVariables: jest.fn(),
  sendCVResponseMail: jest.fn(),
}))

jest.mock('../../services/HuntflowService', () => ({
  sendApplication: jest.fn(),
}))

// mocks
const sendApplication = jest.fn()
const sendEmail = jest.fn(() => Promise.resolve({ data: 'data' }))

emailsService.sendMailFromVariables.mockImplementation(sendEmail)
emailsService.sendCVResponseMail.mockImplementation(sendEmail)
huntflowService.sendApplication.mockImplementation(sendApplication)

describe('careersController', () => {
  let json
  let req
  let res

  beforeEach(() => {
    json = jest.fn(data => data)

    req = {
      body: {
        payload: '{ "huntflow": {}, "email": {} }',
      },
    }

    res = {
      json,
      status: jest.fn(() => ({
        json,
      })),
    }
  })

  it('should correctly handle invalid firstName in req.body', async () => {
    await controller.index(req, res)
    expect(res.status).toHaveBeenCalledWith(500)
    expect(json).toHaveBeenCalledWith({ message: 'firstName key not found', status: 500 })
  })

  it('should correctly handle invalid lastName in req.body', async () => {
    req.body.payload = '{ "huntflow": { "firstName": "first" }, "email": {} }'
    await controller.index(req, res)
    expect(res.status).toHaveBeenCalledWith(500)
    expect(json).toHaveBeenCalledWith({ message: 'lastName key not found', status: 500 })
  })

  it('should correctly handle invalid file in req', async () => {
    req.body.payload = '{ "huntflow": { "firstName": "first", "lastName": "last" }, "email": {} }'
    await controller.index(req, res)
    expect(res.status).toHaveBeenCalledWith(500)
    expect(json).toHaveBeenCalledWith({ message: 'cvFile key not found', status: 500 })
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
    await controller.index(req, res)
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
    await controller.index(req, res)
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
    const data = await controller.index(req, res)
    expect(data).toEqual({ email: { data: 'data' }, userEmail: { data: 'data' } })
    expect(huntflowService.sendApplication).toHaveBeenCalledTimes(1)
    expect(emailsService.sendMailFromVariables).toHaveBeenCalledTimes(1)
    expect(emailsService.sendCVResponseMail).toHaveBeenCalledTimes(1)
  })
})
