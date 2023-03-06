const PublicController = require('../features/public/public.controller');
const { validateContact } = require('../shared/middleware/base-middleware');

// Import validator


const registerPublicRoutes = (app) => {
  
  app.post('/contact', validateContact, PublicController.contactUs); // add validateContact,
  
  app.get('/calc/:buildingType',  PublicController.calc);  // add validate type
}


module.exports = {registerPublicRoutes};



// const  {validateContactUs, validateType} = require('../shared/middleware/validator');
