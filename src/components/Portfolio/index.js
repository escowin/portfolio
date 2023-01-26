function Portfolio(props) {
  const { selectedPortfolio } = props;

  const frontend = [
    { project: "frontend 1", description: "description goes here" },
    {
      project: "frontend 2",
      description: "description goes here",
    },
    {
      project: "frontend 3",
      description: "description goes here but more stuff",
    },
  ];

  const backend = [
    { project: "backend 1", description: "description goes here" },
    {
      project: "backend 2",
      description: "description goes here",
    },
    {
      project: "backend 3",
      description: "description goes here but more stuff",
    },
  ];

  const fullstack = [
    { project: "fullstack 1", description: "description goes here" },
    {
      project: "fullstack 2",
      description: "description goes here",
    },
    {
      project: "fullstack 2",
      description: "description goes here but more stuff",
    },
  ];
  
  let portfolioData;
  if (selectedPortfolio === "Frontend") {
    portfolioData = frontend;
  } else if (selectedPortfolio === "Backend") {
    portfolioData = backend;
  } else if (selectedPortfolio === "Fullstack") {
    portfolioData = fullstack;
  }

  return <section>{portfolioData}</section>;
}

export default Portfolio;
