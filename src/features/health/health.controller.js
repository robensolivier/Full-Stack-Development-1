const ResponseUtil = require('../../shared/utils/response-util').ResponseUtil;
require('dotenv').config();
const port = process.env.PORT || 3000;

const helloWorld = async(req, res) => {
  ResponseUtil.respondOk(res,null, 'Hello World')
  // res.send('Hello World!!');
};

const status = async(req,res) => {
  ResponseUtil.respondOk(res,null, 'status')
  const envName = process.env.ENV_NAME;
  const message = `Environment '${envName}' running on port: ${port}`;
  res.send(message);
};

const error = async(req,res) => {
  ResponseUtil.respondOk(res,null, 'error')
  res.status(400);
  res.send('error');
};

module.exports = {helloWorld, status, error};