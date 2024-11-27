import { Logo } from "./Logo";

export function Header() {
  return (
    <header className="flex justify-between items-center">
      <div className="flex items-center">
        <Logo size={50} />
        <h1 className="text-2xl font-bold">TV Sherpa</h1>
      </div>
      <nav>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full mr-4 transition duration-300">
          Login
        </button>
        <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full transition duration-300">
          Sign Up
        </button>
      </nav>
    </header>
  );
}
