const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const helmet = require("helmet");

const app = express();
app.use(cors({ allowedOrigins: ["*"] }));
app.use(bodyParser.json());
app.use(bodyParser.raw());
app.use(helmet());

// const createBucketCommand = require("./src/utils/arvanCloud/CreateBucket");

// createBucketCommand("salesPDFs");

const {
  S3Client,
  CreateBucketCommand,
  HeadBucketCommand,
  ListBucketsCommand,
  PutObjectCommand,
} = require("@aws-sdk/client-s3");

const fs = require("fs");
const path = require("path");

// Create an S3 client service object
const s3 = new S3Client({
  region: "ir-thr-at1",
  endpoint: "https://s3.ir-thr-at1.arvanstorage.ir ",
  credentials: {
    accessKeyId: "9e2bc73f-f357-48df-877f-d2a38fd6cd6b",
    secretAccessKey:
      "2643e6cad24ec4217dc70b2711c801662881f40eff0099e600ade0fde204124c",
  },
});

//creates bucket
// const run = async () => {
//   try {
//     const data = await s3.send(
//       new CreateBucketCommand({
//         Bucket: "iroriginalsalespdfbucket",
//         ACL: "public-read", // 'private' | 'public-read'
//       })
//     );

//     console.log(data);
//   } catch (err) {
//     console.log("Error", err);
//   }
// };

//if one bucket exists
// const run = async () => {
//   try {
//     const data = await s3.send(
//       new HeadBucketCommand({
//         Bucket: "iroriginalsalespdfbucket",
//       })
//     );
//     console.log(data);
//   } catch (err) {
//     console.log("Error", err);
//   }
// };

// const run = async () => {
//   try {
//     const data = await s3.send(new ListBucketsCommand({}));
//     console.log("Success", data.Buckets);
//   } catch (err) {
//     console.log("Error", err);
//   }
// };

//upload file

const uploadParams = {
  Bucket: "iroriginalsalespdfbucket", // bucket name
  Key: "first-pdf.pdf", // the name of the selected file
  ACL: "public-read", // 'private' | 'public-read'
  Body: "BODY",
};

// const file = "first-pdf.pdf";

// const run = async () => {
//   // Configure the file stream and obtain the upload parameters
//   const fileStream = fs.createReadStream(file);
//   fileStream.on("error", function (err) {
//     console.log("File Error", err);
//   });
//   uploadParams.Key = path.basename(file);
//   // call S3 to upload file to specified bucket
//   uploadParams.Body = fileStream;

//   try {
//     const data = await s3.send(new PutObjectCommand(uploadParams));
//     console.log("Success", data);
//   } catch (err) {
//     console.log("Error", err);
//   }
// };

// run();

app.post("/upload", (req, res) => {
  console.log(req.file);

  return res.status(200).json({ data: "ok" });
});

module.exports = app;
