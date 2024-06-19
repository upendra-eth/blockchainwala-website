const BlockchainTech = () => {
    return (
      <section className="bg-web3-gray text-web3-dark py-20">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-8">Explore New Blockchain Technologies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold mb-4">Decentralized Finance (DeFi)</h3>
              <p className="mb-4">Learn about decentralized finance applications transforming the financial sector.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold mb-4">Non-Fungible Tokens (NFTs)</h3>
              <p className="mb-4">Discover how non-fungible tokens are revolutionizing digital ownership and creativity.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold mb-4">Layer 2 Solutions</h3>
              <p className="mb-4">Explore scaling solutions like layer 2 protocols enhancing blockchain scalability.</p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default BlockchainTech;
  