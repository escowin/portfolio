function Portfolio({ selectedPortfolio }) {
  const portfolioData = {
    Frontend: [
      { project: "frontend 1", description: "description goes here" },
      {
        project: "frontend 2",
        description: "description goes here",
      },
      {
        project: "frontend 3",
        description: "description goes here but more stuff",
      },
    ],
    Backend: [
      { project: "backend 1", description: "description goes here" },
      {
        project: "backend 2",
        description: "description goes here",
      },
      {
        project: "backend 3",
        description: "description goes here but more stuff",
      },
    ],
    Fullstack: [
      { project: "fullstack 1", description: "description goes here" },
      {
        project: "fullstack 2",
        description: "description goes here",
      },
      {
        project: "fullstack 2",
        description: "description goes here but more stuff",
      },
    ],
  };

  console.log(portfolioData[selectedPortfolio]);

  return (
    // JSX
    <section>
      {portfolioData[selectedPortfolio] &&
        portfolioData[selectedPortfolio].map((item, index) => (
          <section key={index} id={index}>
            <h2>{item.project}</h2>
            <p>{item.description}</p>
          </section>
        ))}
    </section>
  );
}

export default Portfolio;
