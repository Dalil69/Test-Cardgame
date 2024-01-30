import './Card.css';

function Card({ name, cost, strength, health, onClick }) {
  return (
      <div className="card" onClick={() => onClick(name)}>
          <div>Nom: {name}</div>
          <div>Coût: {cost}</div>
          <div>Force: {strength}</div>
          <div>Vie: {health}</div>
      </div>
  );
}

  export default Card;