require('dotenv').config();
const Express = require('express');
const app = Express();
const  validator = require('validator');

const adminRoutes = [
  '/email-list',
  '/region-avg',
  '/calc-residential'
];

const registerBaseMiddleWare = (app) => {
  app.use(Express.json());
  app.use(logger);
  app.use(checkAuthToken);
};

const logger = (req,res,next) => {
  const message = `API call: ${req.method} on ${req.originalUrl} at ${new Date()}`
  console.log(message);
  next();
};

const checkAuthToken = (req,res,next) => {
  const url = req.url.slice(0,req.url.indexOf('?'));

  if(!adminRoutes.includes(url)){
    next();
    return;
  }

  const inputToken = req.headers.token;
  const savedToken = process.env.TOKEN;

  if(inputToken !== savedToken){
    res.status(401);
    res.send('Unauthorized');
    return;
  }
  next();
};

// Validate Contact Form

const validateContact = (res, req, next) => {
    // const email = req.body.email;
    // const phone = req.body.phone;
    console.log('req',req)
    if (req) {
      console.log('req.body',req.body)
    }
    // console.log(req)
    // const { body: {email, phone} } = req;
    // if (email && !validator.isEmail(email)) {
    //     return console.log ('Invalid email address');
       
    // }

    // if (phone && !validator.isMobilePhone(phone, 'en-us')) {
    //   return console.log ('Invalid Phone Number');
    
    // }

    next();
  };

module.exports = {registerBaseMiddleWare, validateContact};