const ImageKit = require("@imagekit/nodejs");
const { response } = require("../app");

const client = new ImageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
});

const uploadFile = async (buffer) => {
  const response = await client.files.upload({
    file: buffer.toString("base64"),
    fileName: "image.jpg",
  });
  return response;
};

module.exports = uploadFile;
