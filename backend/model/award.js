const mongoose =require('mongoose');
const Schema =mongoose.Schema;

let Award = new Schema ({
    Award_Number: {
        type: Int32Array
    },
    Award_Name: {
        type: String
    },

    Award_PI: {
        type: String
    },

    Award_Sponsor: {
        type: String
    },
    Dept_Number: {
        type: Int32Array
    },

    Start_Date: {
        type: Date
    },

    End_Date: {
        type: Date
    },

    Reporting_Period: {
        type: String
    },

    Special_Report: {
        type: String
    },

    Report_Status: {
        type: String
    }, 
        collection: 'awards'
    
})

module.exports =mongoose.model('Award', Award)