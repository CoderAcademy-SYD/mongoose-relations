const dbConnect = require("./../database/connection");

module.exports = (() => {
    let mongoose;

    beforeAll(async () => {
        mongoose = await dbConnect("books_r_us2_test");
    })

    afterAll(async () => {
        await mongoose.connection.close()
    })
})()