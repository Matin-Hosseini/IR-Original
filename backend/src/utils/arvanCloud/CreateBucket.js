const { CreateBucketCommand } = require("@aws-sdk/client-s3");

const s3 = require("../../config/arvanCloud");

const createBucketCommand = async (bucketName) => {
  try {
    const data = await s3.send(
      new CreateBucketCommand({
        Bucket: bucketName,
        ACL: "public-read",
      })
    );

    console.log(data);
  } catch (err) {
    console.log("Error", err);
  }
};
module.exports = createBucketCommand;
