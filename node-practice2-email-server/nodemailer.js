const nodemailer = require('nodemailer')

const email = {
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "ee5c6fd601e300",
    pass: "2185be9885bb2e"
  }
}

const send = async (data) => {
  nodemailer.createTransport(email).sendMail(data, function(error, info) {
    if(error) {
      console.log(error)
    }else {
      console.log(info)
      return info.response
    }
  })
}

const content = {
  from: 'enekelx1@gmail.com', // sender address
  to: "enekelx1@naver.com", // list of receivers
  subject: "Hello ✔", // Subject line
  text: "Hello world?", // plain text body
  html: "<b>Hello world?</b>", // html body
}

send(content)