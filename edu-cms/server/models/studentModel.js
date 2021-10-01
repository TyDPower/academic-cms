const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema({
    firstName: String,
    lastName: String,
    age: Number,
    enrollment: {
        dateEnrolled: { type: Date, default: Date.now() },
        indemnified: Boolean,
    },
    accounts: {
        contact: {
            firstName: String,
            lastName: String,
            contactNumber: Number,
            email: String,
            adderss: {
                addressLine1: String,
                addressLine2: String,
                addressLine3: String,
                areaCode: String,
            }
        },
        payments: [String],
        invoices: [String]
    },
    academic: {
        currentCourses: {
            courses: [String],
            examsCompleted: [String],
            examsIncomplete: [String]
        },
        passedCourses: {
            courses: [String],
            examsCompleted: [String],
            examsIncompelet: [String]
        },
        failedCourses: {
            courses: [String],
            examsCompleted: [String],
            examsIncompelet: [String]
        },
        certificates: [String],
        medals: [String],
        awards: [String]        
    },
    emergencyContact: {
        name: String,
        contactNumber: String,
        alternativeContactNumber: String,
    }
});

const model = mongoose.model('students', studentSchema);

module.exports.model = model;