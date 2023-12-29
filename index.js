const express = require('express');
const fileRoutes = require('./src/routes/fileRoutes');

const app = express();
const port = 3000;

app.use(express.json());
app.use('/uploads', express.static('uploads')); // Serve uploaded files statically

app.use('/api/files', fileRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
