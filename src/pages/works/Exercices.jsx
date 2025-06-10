// src/pages/works/Exercices.jsx
export default function Exercices() {
    const titles = [
      'Video Game informations',
      'The notepad',
      'React Router'
    ];
    return (
      <div>
        {titles.map(t => (
          <div key={t} className="card">{t}</div>
        ))}
      </div>
    );
  }
  