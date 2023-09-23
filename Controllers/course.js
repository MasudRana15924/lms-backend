const courseModel = require('../models/Course');
const cloudinary = require('cloudinary');
const ErrorHandler = require('../utilies/ErrorHandler');


exports.createCourse = async (req, res, next) => {
     try{
        
        const {title,price,tags,description,thumbnail,courseData,reviews}=req.body
        const courses = await courseModel.create({
          title,price,tags,description,thumbnail,courseData,reviews
      });
      res.status(201).json({
          success: true,
          courses,
        });
     }catch (error) {
        return next(new ErrorHandler(error.message, 400));
    }
  
}
exports.getCourses = async (req, res) => {
  const courses = await courseModel.find();
  res.status(200).json({ success: true, courses });
};
exports.getSingleCourses = async (req, res) => {
  const course = await courseModel.findById(req.params.id);
   res.status(200).json({ success: true, course });
}