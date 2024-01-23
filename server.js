const express = require('express');
const { connectDB } = require('./config/db');
const bodyParser = require('body-parser');
const patientsRouter = require('./routes/patients');
const psychiatristsRouter = require('./routes/psychiatrists');
const hospitalRouter = require('./routes/hospital');
const doctorRouter = require('./routes/doctor');
connectDB();
const app = express();

const port = 8000;
app.use(bodyParser.json());
app.use('/api',hospitalRouter);
app.use('/api',doctorRouter);
app.use('/api/patients', patientsRouter);
app.use('/api', psychiatristsRouter);
app.listen(port,()=>{
    console.log(`server started at port ${port}`);
})