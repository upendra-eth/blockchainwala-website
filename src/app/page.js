import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import BlockchainTech from "@/components/BlockchainTech";
import Link from 'next/link';

const Home = () => {
  return (
    <div className="bg-web3-dark text-white min-h-screen overflow-y-auto">
      <section className="py-20 px-4 bg-web3-gradient">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to Blockchain Wala</h1>
          <p className="text-xl mb-8">
            Your one-stop solution for Blockchain project development, consultancy, and more.
          </p>

            <a  href="https://www.youtube.com/channel/blockchainwala" className="bg-web3-blue hover:bg-web3-purple text-white px-4 py-2 rounded transition-colors duration-300">
              Subscribe to our YouTube Channel
            </a>
        </div>
      </section>

      <Experience />

      <Projects />

      <BlockchainTech />

      {/* Add more sections/components as needed */}
    </div>
  );
};

export default Home;
