const nodemailer = require('nodemailer')

const email = {
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "ee5c6fd601e300",
    pass: "2185be9885bb2e"
  }
}

const send = async (option) => {
  nodemailer.createTransport(email).sendMail(option, (error, info) => {
    if(error) {
      console.log(error)
    }else {
      console.log(info)
      return info.response
    }
  })
}

let emailData = {
  from: "enekelx1@gmail.com",
  to: "enekelx1@naver.com",
  subject: "테스트 메일 입니다.",
  text: "NODE.JS 이메일 보내보기"
}

send(emailData)