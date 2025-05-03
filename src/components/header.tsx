export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-white bg-opacity-80 backdrop-blur-md shadow z-50">
      <nav className="max-w-5xl mx-auto flex justify-between items-center p-4 text-sm">
        <span className="font-bold">Nikolas Marcellino</span>
        <ul className="flex space-x-6">
          <li><a href="#about" className="hover:underline">About</a></li>
          <li><a href="#projects" className="hover:underline">Projects</a></li>
          <li><a href="#contact" className="hover:underline">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}
