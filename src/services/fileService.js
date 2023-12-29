const fs = require('fs');
const path = require('path');

const uploadFile = (req, res) => {
  try {
    // Access the uploaded file via req.file
    const { file } = req;

    // Process the file as needed (e.g., save it, perform operations)
    // In this example, just log the file details
    console.log('File uploaded:', file);

    // You can also move the file to a different location if needed
    const destinationPath = path.join(__dirname, '../uploads', file.originalname);
    fs.renameSync(file.path, destinationPath);

    res.status(200).json({ message: 'File uploaded successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = { uploadFile };
