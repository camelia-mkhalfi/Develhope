const express = require('express');
const Joi = require('joi');

const router = express.Router();

const planets = [
  { id: 1, name: 'Mercury' },
  { id: 2, name: 'Venus' }
];

const planetSchema = Joi.object({
  id: Joi.number().integer().required(),
  name: Joi.string().required(),
});

router.get('/', (req, res) => {
  res.json(planets);
});

router.get('/:id', (req, res) => {
  const planet = planets.find(p => p.id === parseInt(req.params.id));
  if (!planet) return res.status(404).json({ error: 'Planet not found' });

  res.json(planet);
});

router.post('/', (req, res) => {
  const { error } = planetSchema.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });

  const planet = {
    id: req.body.id,
    name: req.body.name,
  };
  planets.push(planet);

  res.status(201).json({ msg: 'Planet created successfully' });
});

router.put('/:id', (req, res) => {
  const planet = planets.find(p => p.id === parseInt(req.params.id));
  if (!planet) return res.status(404).json({ error: 'Planet not found' });

  const { error } = planetSchema.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });

  planet.name = req.body.name;

  res.status(200).json({ msg: 'Planet updated successfully' });
});

router.delete('/:id', (req, res) => {
  const index = planets.findIndex(p => p.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ error: 'Planet not found' });

  planets.splice(index, 1);

  res.status(200).json({ msg: 'Planet deleted successfully' });
});

module.exports = router;
