const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/books_r_us2", { useNewUrlParser: true });
mongoose.Promise = global.Promise;

mongoose.connection.on("error", err => console.log(err));