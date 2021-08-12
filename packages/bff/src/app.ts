import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Server is up and running.' });
});

const PORT = 4000;
app.listen(PORT, () => console.log(`Sever listens on port ${PORT}`));
