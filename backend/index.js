const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(cors({ allowedOrigins: ["*"] }));
app.use(bodyParser.json());
app.use(bodyParser.raw());

const mongoose = require("mongoose");
// mongoose
//   .connect(
//     "mongodb://root:jy83v3UOp0MDyJu01vsShx7a@apo.liara.cloud:34583/my-app?authSource=admin&replicaSet=rs0&directConnection=true"
//   )
//   .then(() => {
//     console.log("database connected");
//   });

// const usersModel = new mongoose.Schema({
//   ip: String,
//   count: Number,
// });

// const Users = mongoose.model("users", usersModel);

// app.post("/userIp", async (req, res) => {
//   const { ip } = req.body;

//   const targetUser = await Users.findOne({ ip });

//   if (targetUser) {
//     targetUser.count = targetUser.count += 1;
//     await targetUser.save();

//     return res.json({ status: "ok" });
//   }

//   await Users.create({ ip, count: 1 });

//   res.json({ status: "ok" });
// });

const getData = async () => {
  const res = await fetch("https://www.digikala.com/");
  const data = await res.text();
  console.log(data);
};

getData();

app.listen(3000, () => {
  console.log("app running on port 3000");
});
