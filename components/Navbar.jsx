export default function Navbar() {
  return (
    <nav className="p-4 md:px-20 flex justify-between items-center bg-white shadow-sm">
      <span className="font-serif text-2xl text-olive-800">Mayaa</span>
      <ul className="flex gap-6 text-sm font-light">
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Services</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}