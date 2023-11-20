const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/Countries', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const countrySchema = new mongoose.Schema({
  name: String,
  population: Number,
  // Add other fields as needed
});

const Country = mongoose.model('Country', countrySchema);

app.use(cors());
app.use(express.json());

// API endpoint to get country data
app.get('/country/:name', async (req, res) => {
  const countryName = req.params.name;

  try {
    const countryData = await Country.findOne({ name: countryName });
    res.json(countryData);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Root path handler
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});