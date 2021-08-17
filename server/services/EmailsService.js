const sendpulse = require('sendpulse-api')
const config = require('../config')

const DEFAULT_FROM_EMAIL = 'marketing@maddevs.io'
const DEFAULT_TO_NAME = 'Mad devs team'

async function initSendPulse(userId, apiKey, tokenStorage) {
  return new Promise(resolve => {
    sendpulse.init(userId, apiKey, tokenStorage, () => resolve())
  })
}

async function sendSendpulseRequest(email) {
  return new Promise(resolve => {
    sendpulse.smtpSendMail(data => {
      resolve(data)
    }, email)
  })
}

async function sendEmail(email) {
  await initSendPulse(
    config.SENDPULSE_API_USER_ID,
    config.SENDPULSE_API_KEY,
    config.SENDPULSE_TOKEN_STORAGE,
  )

  return sendSendpulseRequest(email)
}

function buildEmail({
  subject, templateId, variables, fromName, fromEmail, toName, toEmail, attachment,
}) {
  const email = {
    subject,
    template: {
      id: templateId, // required
      variables,
    },
    from: {
      name: fromName,
      email: fromEmail,
    },
    to: [
      {
        name: toName,
        email: toEmail,
      },
    ],

    // from: {
    //   name: variables.modalTitle,
    //   email: 'marketing@maddevs.io',
    // },
    // to: [
    //   {
    //     name: 'Mad Devs team',
    //     email: variables.emailTo,
    //   },
    // ],
  }

  if (attachment) email.attachments_binary = { [attachment.name]: attachment.base64 }
  return email
}

async function sendCVMail({ variables, templateId, attachment }) {
  const emailParams = {
    templateId,
    variables,
    attachment,
    subject: variables.subject,
    fromName: variables.modalTitle,
    fromEmail: DEFAULT_FROM_EMAIL,
    toName: DEFAULT_TO_NAME,
    toEmail: variables.emailTo,
  }

  const email = buildEmail(emailParams)
  return sendEmail(email)
}

async function sendCVResponseMail({ variables }) {
  const emailParams = {
    templateId: 638666,
    variables,
    subject: variables.subject,
    fromName: 'Mad devs HR department',
    fromEmail: DEFAULT_FROM_EMAIL,
    toName: variables.fullName,
    toEmail: variables.email,
  }

  const email = buildEmail(emailParams)
  return sendEmail(email)
}

async function sendLeadMail({ variables, templateId, attachment }) {
  const emailParams = {
    templateId,
    variables,
    attachment,
    subject: variables.subject,
    fromName: variables.modalTitle,
    fromEmail: DEFAULT_FROM_EMAIL,
    toName: DEFAULT_TO_NAME,
    toEmail: variables.emailTo,
  }

  const email = buildEmail(emailParams)
  return sendEmail(email)
}

module.exports = {
  sendLeadMail,
  sendCVMail,
  sendCVResponseMail,
}
