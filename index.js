const express = require("express");

const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/authentication");
const userRoute = require("./routes/users");
const articleRoute = require("./routes/articles");
const cors = require("cors")
const PORT = process.env.PORT || 5000
dotenv.config();
const app = express();
app.use(cors())
app.use(express.json());

mongoose.connect(process.env.db_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
    // useCreateIndex: true,
    // useFindAndModify:true
})
.then(console.log("Connected to MongoDB"))
.catch((err) => console.log(err));

app.use("/route/auth", authRoute);
app.use("/route/user", userRoute);
app.use("/route/article", articleRoute);

app.listen(PORT, () => {
    console.log("It is working");
})