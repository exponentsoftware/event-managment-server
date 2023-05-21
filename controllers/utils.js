
const util = require("util");
const { GridFsStorage } = require("multer-gridfs-storage");
require("dotenv").config();
var storage = new GridFsStorage({
  url: process.env.MONGO_DB_URL,
  options: { useNewUrlParser: true, useUnifiedTopology: true },
  file: (req, file) => {
    const match = ["image/png", "image/jpeg"];

    if (match.indexOf(file.mimetype) === -1) {
      const filename = `${Date.now()}-event-${file.originalname}`;
      return filename;
    }

    return {
      bucketName: process.env.imgBucket,
      filename: `${Date.now()}-event-${file.originalname}`,
    };
  },
});

const upload = multer({ storage: storage });
var uploadFiles = multer({ storage: storage }).single("image");
var uploadFilesMiddleware = util.promisify(uploadFiles);
module.exports = uploadFilesMiddleware;