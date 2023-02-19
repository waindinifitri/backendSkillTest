const express = require("express");
const app = express();
require("dotenv").config({path: '.env'});

const PORT = process.env.PORT || 4000;

const errorHandling = require('./middlewares/errorHandling')
// const router = require('./routes');

const indexRoutes = require("./routes/index")
const studentRoutes = require("./routes/student");
const subjectRoutes = require('./routes/subject');
const studyPlanRoutes = require('./routes/study_plan')

const errorHandler = require("./middlewares/errorHandler");

app.use("/", indexRoutes);
app.use("/student", studentRoutes);
app.use("/subject", subjectRoutes);
app.use("/study_plan", studyPlanRoutes);


// app.use('/', routes)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router);

app.listen(PORT, () => {
	console.log(`This Server brought you by port : ${PORT}`);
});