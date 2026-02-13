const code = `
function createExperience() {
  const skills = ['React', 'Next.js', 'AI'];
  const passion = 100;

  return {
    buildAmazing: (idea) => {
      return idea
        .map(concept => enhance(concept))
        .filter(isInnovative)
        .reduce((product, feature) => {
          return product.add(feature);
        }, new Experience());
    }
  };
}
`;

const BodyBackground = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-purple-600/10 blur-3xl floating"></div>
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-cyan-500/10 blur-3xl floating floating-delay-1"></div>
      <div className="absolute top-1/2 right-1/3 w-40 h-40 rounded-full bg-blue-500/10 blur-3xl floating floating-delay-2"></div>
      <div className="absolute top-1/2 right-1/8 w-40 h-40 rounded-full bg-blue-500/10 blur-3xl floating floating-delay-2"></div>
      <div className="absolute top-1/2 left-1/8 w-64 h-64 rounded-full bg-purple-600/10 blur-3xl floating"></div>
    </div>
  );
};

export default BodyBackground;
