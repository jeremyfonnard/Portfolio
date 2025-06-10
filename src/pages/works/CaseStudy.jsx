export default function CaseStudy() {
    const titles = [
      'Nike, the new website',
      'Paypal, how their data are stored'
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
  