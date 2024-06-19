const Experience = () => {
    return (
      <section className="py-20 bg-web3-dark text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-web3-blue">Our Blockchain Experience</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold mb-4 text-web3-blue">Project A</h3>
              <p className="mb-4">Description of Project A.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold mb-4 text-web3-blue">Project B</h3>
              <p className="mb-4">Description of Project B.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold mb-4 text-web3-blue">Project C</h3>
              <p className="mb-4">Description of Project C.</p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Experience;
  