const express = require('express');
const app = express();
const pgp = require('pg-promise')();
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const db = pgp('postgres://postgres:postgres@localhost:5432/postgres');

app.use(express.json());

app.get('/planets', async (req, res) => {
  try {
    const planets = await db.any('SELECT * FROM develhope.planets');
    res.json(planets);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/planets/:id', async (req, res) => {
  try {
    const planet = await db.one('SELECT * FROM develhope.planets WHERE id = $1', req.params.id);
    res.json(planet);
  } catch (error) {
    res.status(404).json({ error: 'Planet not found' });
  }
});

app.post('/planets', async (req, res) => {
  try {
    const { name } = req.body;
    await db.none('INSERT INTO develhope.planets (name) VALUES ($1)', name);
    res.status(201).json({ msg: 'Planet created successfully' });
  } catch (error) {
    res.status(400).json({ error: 'Failed to create planet' });
  }
});

app.put('/planets/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    await db.none('UPDATE develhope.planets SET name = $1 WHERE id = $2', [name, id]);
    res.status(200).json({ msg: 'Planet updated successfully' });
  } catch (error) {
    res.status(404).json({ error: 'Planet not found' });
  }
});

app.post('/planets/:id/image', upload.single('image'), async (req, res) => {
  try {
    const { id } = req.params;
    const imagePath = req.file.path;
    console.log(req.file);

    await db.none('UPDATE develhope.planets SET image = $1 WHERE id = $2', [imagePath, id]);

    res.status(200).json({ msg: 'Image uploaded successfully' });
  } catch (error) {
    res.status(400).json({ error: 'Failed to upload image' });
  }
});

app.delete('/planets/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await db.none('DELETE FROM develhope.planets WHERE id = $1', id);
    res.status(200).json({ msg: 'Planet deleted successfully' });
  } catch (error) {
    res.status(404).json({ error: 'Planet not found' });
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
