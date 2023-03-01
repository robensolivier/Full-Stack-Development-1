const mongoose = require('mongoose')
const Schema =  mongoose.Schema

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
            required: true,
        },     



}, { timestamps: true })




module.exports = mongoose.model('contactUs', ContactUsSchema)