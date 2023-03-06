const mongoose = require('mongoose')

const ContactUsSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true  
    },
    email: { 
        type: String,
        required: true,
    },   
   phone: {
        type: String,
        required: true    
    },
    company_name: {
        type: String,
        required: true,
    },
    project_name: {
        type: String,
        required: true, 
    },
    project_desc: {
        type: String,
        required: true,
    },
        departement: {
            type: String,
            required: true,
        },
      message: {
            type: String,
            required: true,
        },
       file: {
            type: String,
            required: false,
        },     
}, { timestamps: true })
// }, { timestamps: true }, {collection:'contactUs'})





module.exports = mongoose.model('contactUs', ContactUsSchema)