const student = require("../models/Student");
const ApiError = require("../utils/Apierror");
const asyncHandler = require("../utils/Asynchandler");
const {sendSuccess} = require("../utils/Apiresponse");
const Student = require("../models/Student");



// student create 

const createStudent = asyncHandler (async (req, res)=>{
const { full_Name, email, phone_Number, course, department, semester, address } = req.body;

const student = await Student.create({
full_Name,
email,
phone_Number,
course,
department,
semester,
address
});

return sendSuccess(res , 201 , "student create successfull1" , student)

});

// get all student 

const getStudents = asyncHandler(async (req , res) => {

    const page = Math.max(parseInt(req.query.page, 10) || 1, 1);
  const limit = Math.max(parseInt(req.query.limit, 10) || 10, 1);
  const skip = (page - 1) * limit;

const filter = {};
if(req.query.search){
     const regex = new RegExp(req.query.search, 'i');
    filter.$or = [{ fullName: regex }, { email: regex }, { course: regex }, { department: regex }];
}

 const [students, total] = await Promise.all([
    Student.find(filter).sort({ createdAt: -1 }).skip(skip).limit(limit),
    Student.countDocuments(filter),
  ]);
 
  return sendSuccess(res, 200, 'Students fetched successfully', {
    students,
    pagination: {
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    },
  });
    
});


// get by id

const getStudentsById = asyncHandler(async(req, res)=>{
    const student = Student.findById(req.Pramas.is);

    if(!student){
        throw new ApiError(404, "Student not Found!")
    }
      return sendSuccess(res, 200, 'Student fetched successfully', student);

});

// student update 

const updateStudent = asyncHandler(async (req, res) => {
  const student = await Student.findByIdAndUpdate(req.params.id, req.body, {
    new: true, 
    runValidators: true, 
    context: 'query', 
  });
 
  if (!student) {
    throw new ApiError(404, 'Student not found');
  }
 
  return sendSuccess(res, 200, 'Student updated successfully', student);
});


//delete student 

const deleteStudent = asyncHandler(async (req, res) => {
  const student = await Student.findByIdAndDelete(req.params.id);
 
  if (!student) {
    throw new ApiError(404, 'Student not found');
  }
 
  return sendSuccess(res, 200, 'Student deleted successfully', student);
});
 
module.exports = {
  createStudent,
  getStudents,
  getStudentsById,
  updateStudent,
  deleteStudent,
};
 