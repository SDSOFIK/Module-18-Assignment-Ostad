const mongose = require("mongoose");



const studentSchema = new mongose.Schema({
full_Name:{
    type: String,
    required: [true , "Name is require"],
    minlength: [3, "Name is lass then 3 characters "],
    mixlength: [100, "Name cannot exceed 100 characters" ]

},

email:{
type: String,
trim: true,
unique: true,
lowercase: true,
 match: [
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        'Please provide a valid email address',
      ],
},

phone_Number:{
     type: String,
      required: [true, 'Phone number is required'],
      trim: true,
      unique:true,
      match: [/^[0-9+\-\s()]{7,15}$/, 'Please provide a valid phone number'],

},

course:{
     type: String,
      required: [true, 'Course is required'],
      trim: true,


},

department:{
    type: String,
      required: [true, 'Department is required'],
      trim: true,

},

semester:{
     type: Number,
      required: [true, 'Semester is required'],
      min: [1, 'Semester must be at least 1'],
      max: [12, 'Semester cannot exceed 12'],

},

address:{
     type: String,
      required: [true, 'Address is required'],
      trim: true,

},

},
{timestamps: true,
}
);
module.exports = mongose.model(Student , studentSchema);