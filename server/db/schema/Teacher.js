const mongoose = require("mongoose");

const teacherSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  qualification: {
    type: String,
    required: true,
  },
  experience: {
    type: String,
    required: true,
  },
  domain: {
    type: String,
    required: true,
  },
  created_at: {
    type: String,
    required: true,
  },
  quiz_list:[
    {
      qid:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"quizzes"
    }
    }
  ],
});

const Teacher = mongoose.model("teacher", teacherSchema);
module.exports = Teacher;