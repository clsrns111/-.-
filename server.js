const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://clsrns111:4565123@cluster0.vqh13.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log(" db conneted"))
  .catch((err) => console.log(err));
app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`server connected`));
