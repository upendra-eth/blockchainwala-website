import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-black text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Blockchain Wala</h1>
        <div>
          <Link href="/" className="mr-4 hover:underline">Home</Link>
          <Link href="/youtube" className="hover:underline">YouTube Videos</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
