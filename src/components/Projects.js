const Projects = () => {
    return (
      <section className="py-20 bg-web3-gradient text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8">Highlighted Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-web3-purple p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold mb-4">Project X</h3>
              <p className="mb-4">Description of Project X.</p>
            </div>
            <div className="bg-web3-purple p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold mb-4">Project Y</h3>
              <p className="mb-4">Description of Project Y.</p>
            </div>
            <div className="bg-web3-purple p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold mb-4">Project Z</h3>
              <p className="mb-4">Description of Project Z.</p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Projects;
  