const ContactUsController = require('../features/contactUs/contactus.controller');
const { validateContact } = require('../shared/middleware/base-middleware');


const registerContactUsRoutes = (app) => {
    
  app.post('/contactUs', validateContact,  ContactUsController.contactUss); // add ValidateConatactUs

}




module.exports = {registerContactUsRoutes};