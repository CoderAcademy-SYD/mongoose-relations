const dbconnect = require("./database/connection");
dbconnect("books_r_us2");

const app = require("./app");
const port = 3000;

app.listen(port, () => console.log(`Server is listening on port ${port}`));