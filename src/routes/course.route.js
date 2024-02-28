const express = require('express');
const app = express.Router();
const controller = require('../controllers/course.controller')

app.get("/", controller.getCourse);
app.get("/:id",controller.getCourseById);
app.post("/",controller.createCourse);
app.put("/:id",controller.updateCourse);
app.patch("/:id",controller.addReview);
app.delete("/:id",controller.deleteCourse);
app.get("/name/:name",controller.getCourseByName);
app.get("/category/:category",controller.getCourseByCategory);
module.exports = app;
