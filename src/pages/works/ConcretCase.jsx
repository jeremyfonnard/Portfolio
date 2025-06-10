export default function ConcretCase() {
    const titles = [
      'My grandparent bridge club website',
      'My friend bakery'
    ];
  
    return (
      <div>
        {titles.map(title => (
          <div key={title} className="card">
            {title}
          </div>
        ))}
      </div>
    );
  }
  