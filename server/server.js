const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const pdfRoute = require('./routes/pdfRoute');
const path = require('path')
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/pdf', express.static(path.join(__dirname, 'pdfs')));
app.use('/api/pdf', pdfRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
