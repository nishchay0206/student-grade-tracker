const express = require('express');
const cors = require('cors');
const gradeRoutes = require('./routes/grades');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use('/api/grades', gradeRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));