// server.js (Express example)

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

// Connect to MongoDB (replace 'your-mongodb-connection-string' with your actual MongoDB connection string)
mongoose.connect('mongodb://localhost:27017/Project_Countries', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define a MongoDB schema and model (assuming Mongoose is used)
const countrySchema = new mongoose.Schema({
  countryId: String,
  population: Number,
  capital: String,
  language: String,
});

const Country = mongoose.model('Country', countrySchema);

// Route to get country data
app.get('/api/countries/:countryId', async (req, res) => {
  const { countryId } = req.params;
  console.log(`Fetching data for countryId: ${countryId}`);

  try {
    const country = await Country.findOne({ countryId });
    console.log('Fetched data:', country);
    res.json({ data: country ? country : null });
  } catch (error) {
    console.error('Error fetching data from MongoDB:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Route to add/update country data
app.post('/api/countries/:countryId', async (req, res) => {
  const { countryId } = req.params;
  const { population, capital, language } = req.body;

  try {
    // Upsert (update or insert) the country data
    await Country.updateOne(
      { countryId },
      { $set: { population, capital, language } },
      { upsert: true }
    );
    res.json({ success: true });
  } catch (error) {
    console.error('Error updating data in MongoDB:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
