const { S3Client } = require("@aws-sdk/client-s3");

const s3 = new S3Client({
  region: "default",
  endpoint: process.env.ARVANCLOUD_SIMIN_ENDPOINT,
  credentials: {
    accessKeyId: process.env.ARVANCLOUD_ACCESS_KEY,
    secretAccessKey: process.env.ARVANCLOUD_SECRET_KEY,
  },
});

module.exports = s3;
