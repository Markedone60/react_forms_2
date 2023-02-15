export default function FormList({ steps, toDelete }) {
  return (
    <div className="distance-list">
      <div className="header-list">
        <span className="header">Дата(дд.мм.гг)</span>
        <span className="header">Пройдено, км</span>
        <span className="header">Действия</span>
      </div>
      <div className="distance-item">
        <ul className="item-list">
          {steps.map(o =>
            <li className="item" key={o.id}>
              <span className="item-date">{new Date(o.date).toLocaleDateString()}</span>
              <span className="item-distance">{o.distance}</span>
              <button className="btn delete-button" onClick={() => toDelete(o.id)}>✘</button>
            </li>)}
        </ul>
      </div>
    </div>
  )
}