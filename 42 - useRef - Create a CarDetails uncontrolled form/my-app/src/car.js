import React, { useState, useEffect } from 'react';

export function Car({ initialData = {} }) {
  const [carModel, setCarModel] = useState('');
  const [year, setYear] = useState('');
  const [color, setColor] = useState('');

  useEffect(() => {
    setCarModel(initialData.model || '');
    setYear(initialData.year || '');
    setColor(initialData.color || '');
  }, [initialData]);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Model: ${carModel}, Year: ${year}, Color: ${color}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Model:
        <input type="text" value={carModel} onChange={(event) => setCarModel(event.target.value)} />
      </label>
      <br />
      <label>
        Year:
        <input type="text" value={year} onChange={(event) => setYear(event.target.value)} />
      </label>
      <br />
      <label>
        Color:
        <input type="text" value={color} onChange={(event) => setColor(event.target.value)} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}