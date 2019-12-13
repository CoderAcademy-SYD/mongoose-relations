const mongoose = require("mongoose");

async function connect(dbname) {
    await mongoose.connect(`mongodb://localhost/${dbname}`, { useNewUrlParser: true });
    mongoose.Promise = global.Promise;

    mongoose.connection.on("error", err => console.log(err));

    return mongoose;
}

module.exports = connect;