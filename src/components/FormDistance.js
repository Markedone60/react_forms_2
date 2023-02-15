import { useState } from "react";
import shortid from "shortid";

export default function FormDistance({toAdd}) {
  const [form, setForm] = useState({ date: '', distance: '' });

  const handleChange = ({ target }) => {
    const name = target.name;
    const value = target.value;
    setForm(prevForm => ({ ...prevForm, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const step = {
      id: shortid.generate(),
      date: form.date,
      distance: Number(form.distance)
    }

    toAdd(step);
    setForm({ date: '', distance: '' });
  }

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <div className="form-item">
        <label className="description" htmlFor="date">Дата(дд.мм.гг)</label>
        <input className="input" type="date" id="date" name="date" value={form.date} onChange={handleChange} required />
      </div>
      <div className="form-item">
        <label className="description" htmlFor="distance">Пройдено, км</label>
        <input className="input" type="number" id="distance" name="distance" step="0.1" value={form.distance} onChange={handleChange} required />
      </div>
      <button className="btn add-button" type="submit">OK</button>
    </form>
  )
}