const Course = require("../models/course.model");
exports.getCourse= (req, res) => {
  Course.find().then((result) => {
    res.status(200).json({
      msg: "Search OK",
      data: result,
    });
  });
};
exports.getCourseById = (req, res) => {
  Course.findById(req.params.id).then((result) => {
    res.status(200).json({
      msg: "Search OK",
      data: result,
    });
  });
};

  exports.createCourse = async (req, res) => {
    //เพิ่ม foodmenu
    try {
      let course = new Course({
        name: req.body.name,
        category: req.body.category,
        price: req.body.price,
        ingredients: req.body.ingredients
      });
      let createdcourse = await course.save();
      res.status(200).json({
        msg: "Add a course complete.",
        data: createdcourse,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        msg: error,
      });
    }
  
  };

  exports.updateCourse = (req, res) => {
    let course = {
      name: req.body.name,
      category: req.body.category,
      price: req.body.price,
      ingredients: req.body.ingredients,
    };
    Course.findByIdAndUpdate(req.params.id, course)
      .then((result) => {
      // findById อีกครั้งเพื่อเอา data ใหม่
      Course.findById(req.params.id).then((result) => {
        res.status(200).json({
          msg: "OK",
          data: result,
        });
      });
    });
  };
  
  exports.addReview = (req, res) => {
    let reviewData = {
      $push: {
        reviews: {
          star: req.body.star,
          message: req.body.message,
        },
      },
    };
    Course.findByIdAndUpdate(req.params.id, reviewData).then((result) => {
      // findById อีกครั้งเพื่อเอา data ใหม่
      Course.findById(req.params.id).then((result) => {
        res.status(200).json({
          msg: "OK",
          data: result,
        });
      });
    });
  };
  
  exports.deleteCourse = (req, res) => {
    Course.findByIdAndDelete(req.params.id)
    .then((result) => {
        res.status(200).json({
          msg: `Course id ${req.params.id} is deleted.`,
        });
      });
    };
    
  exports.getCourseByName = (req, res) => {
    Course.find({ 
      name: new RegExp(req.params.name)
    }).then((result) => {
      res.status(200).json({
        msg: "Search OK",
        data: result,
      });
    });
  };

  exports.getCourseByCategory = (req, res) => {
    Course.find({ 
      category: new RegExp(req.params.category)
    }).then((result) => {
      res.status(200).json({
        msg: "Search OK",
        data: result,
      });
    });
  };
  