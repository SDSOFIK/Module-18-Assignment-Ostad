const express = require("express");

const {
  createStudent,
  getStudents,
  getStudentsById,
  updateStudent,
  deleteStudent,
} = require("../controllers/Studentcontroller");

const router = express.Router();

router.post("/", createStudent );
router.get("/", getStudents);
router.get("/:id", getStudentsById);
router.put("/:id", updateStudent);
router.delete("/:id", deleteStudent);


module.exports = router;