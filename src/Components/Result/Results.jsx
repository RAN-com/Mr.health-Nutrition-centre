const cardsData = [
    {
      id: 1,
      photo: 'https://via.placeholder.com/150',
      name: 'John Doe',
      content: 'This is some content about John .',
    },
    {
      id: 2,
      photo: 'https://via.placeholder.com/150',
      name: 'Jane Smith',
      content: 'This is some content about Jane Smith.',
    },
    {
      id: 3,
      photo: 'https://via.placeholder.com/150',
      name: 'Alice Johnson',
      content: 'This is some content about Alice Johnson.',
    },
  ];
  
  const Results = () => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {cardsData.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </div>
    );
  };
  export default Results