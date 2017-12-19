var mongoose = require('mongoose');
var config = require('../config/index');

mongoose.connect("mongodb://localhost/kurs");
mongoose.exports = mongoose;