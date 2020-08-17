const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
const { User } = require('../models/index.js')
const jwt = require('jsonwebtoken')
const { comparePassword } = require('../helpers/bcrypt.js')
const customError = require('http-errors')
const nodemailer = require('nodemailer')
const secret = process.env.JWT_SECRET

class UserController {
  static googleSignIn(req, res, next) {
    console.log('masuk sini')
    let email = null;
    let randomstring = Math.random().toString(36).slice(-8);
    client.verifyIdToken({
      idToken: req.body.token,
      audience: process.env.GOOGLE_CLIENT_ID
    })
      .then(ticket => {
        console.log('masuk sini 2')
        email = ticket.getPayload().email;
        let loginData = {
          email: email
        }
        return User.findOne({ where: loginData })
      })
      .then(data => {
        console.log('masuk sini 3')
        if (data) {
          console.log(data);
          return data;
        } else {
          console.log('masuk sini 3,4')
          // this.sendEmail(email, randomstring)
          let newUser = {
            email: email,
            password: randomstring
          };
          console.log(newUser)
          UserController.sendEmail(newUser.email, newUser.password)
          return User.create(newUser)
        }
      })
      .then(data => {
        console.log('masuk sini 4')
        let token = jwt.sign({ id: data.id }, secret);
        res.status(200).json({ token });
      })
      .catch(err => {
        next(err);
      })
  }

  static async register(req, res, next) {
    try {
      let newUser = {
        email: req.body.email,
        password: req.body.password
      }
      let registerNewUser = await User.create(newUser)
      res.status(201).json(registerNewUser)
    } catch (err) {
      next(err)
    }
  }

  static async login(req, res, next) {
    try {
      console.log('diisi')

      let loginEmail = { email: req.body.email }
      let loginPassword = req.body.password

      let user = await User.findOne({ where: loginEmail })
      if (!user) throw new customError(400)

      let passTest = await comparePassword(loginPassword, user.password)
      if (!passTest) throw new customError(400)

      let token = await jwt.sign({ id: user.id }, secret)
      if (!token) throw new customError(500)
      console.log('diisi')
      res.status(200).json({ token })
    } catch (err) {
      next(err)
    }
  }






  static sendEmail(email, name) {
    console.log(email, name, 'ini node')
    const password = name
    //step 1
    //call transporter and authenticator
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_SEND,
        pass: process.env.PASSWORD_SEND

        // user: 'pancakebantet@gmail.com',
        // pass: 'coba@7890'
        //silahkan diisi, ini bisa diisi langung, bisa juga diisi dengan dotenv:
        //kalo gamau langsung coba liat dokumentasi dotenv
        //call with process.env.
        //.env di ignore
        //di dalem .env isi :
        //PASSWORD:
        //EMAIL:
        //referensi: https://www.youtube.com/watch?v=Va9UKGs1bwI&t

      }
    })
    //step 2 define delivery path
    let mailOptions = {
      from: '',
      //jangan lupa diisi from-nya
      to: `${email}`,
      subject: 'Thank You!',
      // text: `Halo ToSeMol's family! Terimakasih ya ${name} telah berbelanja di website kami. Pesanan anda akan kami proses dan kirim segera!`
      text: `Thank you for registering on our website. this is your password "${password}", please change it or you can use it`

    }
    //IMPORTANT!
    //Before sending, check you email provider regarding the authority for nodemailer use
    //for an example, you must turn on this feature if you use gmail: https://myaccount.google.com/lesssecureapps

    //Step 3 (Time to send it!)

    transporter.sendMail(mailOptions, (err, data) => {
      if (err) {
        console.log(err)
      } else {
        console.log('hooray! email is sent!')
      }
    })
  }

}

module.exports = UserController