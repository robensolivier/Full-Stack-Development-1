const contactUs = require('../../shared/db/mongodb/schemas/contactUs.Schemas')
const asyncWrapper = require('../../shared/util/base-utils')
const validator = require('validator');
const validateContact = require('../../shared/middleware/base-middleware');

//logic

const contactUss = asyncWrapper( async (req, res) => {
    
    const contact = await contactUs.create(req.body);
    res.status(201).json({ msg: 'Contact created', data: contact });
    
})


// const createAgent = asyncWrapper( async (req,res) => {
//     const agent = await  Agent.create(req.body);
//     res.status(201).json({ msg: 'Agent created', data: agent }); 
//   });



module.exports = {contactUss,};