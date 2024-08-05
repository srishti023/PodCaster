const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const userApi = require("./routes/user");
const catApi = require("./routes/categories");
const podcastApi = require("./routes/podcast");
const cors = require("cors");

require("dotenv").config();
require("./conn/conn");
app.use(cors);
app.use(express.json());
app.use(cookieParser());

//all routes
app.use("/api/v1", userApi);
app.use("/api/v1", catApi);
app.use("/api/v1", podcastApi);

app.listen(process.env.PORT, () => {
    console.log(`Server started on port : ${process.env.PORT}`);
});