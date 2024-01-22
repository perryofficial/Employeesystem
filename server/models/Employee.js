// models/Employee.js
const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  id: String,
  name: String,
  salary: String,
});

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;
