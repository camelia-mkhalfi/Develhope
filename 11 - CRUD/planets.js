const { Request, Response } = require("express");
const { planetSchema } = require("../data/planets");
const Joi = require("joi");

let planets = [
  {
    id: 1,
    name: "Earth",
  },
  {
    id: 2,
    name: "Mars",
  },
];

const getAll = (req, res) => {
  res.status(200).json(planets);
};

const getPlanetById = (req, res) => {
  const { id } = req.params;
  const planet = planets.find((p) => p.id == Number(id));
  res.status(200).json(planet);
};

const create = (req, res) => {
  const { id, name } = req.body;
  const newPlanet = { id: id, name: name };
  const validation = planetSchema.validate(newPlanet);
  if (validation.error) {
    return res.status(400).json({ msg: validation.error.details[0].message });
  }
  planets = [...planets, validation.value];
  res.status(201).json({ msg: "Planet created" });
};

const updatePlanetById = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  planets = planets.map((planet) =>
    planet.id === Number(id) ? { ...planet, name } : planet
  );

  res.status(200).json({ msg: "Planet updated" });
};

const deletePlanetById = (req, res) => {
  const { id } = req.params;
  planets = planets.filter((planet) => planet.id !== Number(id));

  res.status(200).json({ msg: "Planet deleted" });
};

module.exports = {
  getAll,
  getPlanetById,
  create,
  updatePlanetById,
  deletePlanetById,
};