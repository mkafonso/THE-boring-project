export function Header() {
  return (
    <header className="fixed top-0 left-80 right-0 py-3 border-b border-main-500/20 backdrop-blur z-10">
      <div className="flex justify-between items-center max-w-7xl m-auto">
        <div className="flex gap-8 items-center">
          <a
            href="#"
            className="font-bold hover:text-main-800 text-main-700 transition mr-8 text-xl"
          >
            The Boring Project.
          </a>

          <div className="flex items-center gap-2 cursor-pointer text-main-700 hover:text-main-800 transition">
            <span className="font-semibold">Challenges:</span>
            <span className="font-bold text-primary-600">3</span>
          </div>

          <div className="flex items-center gap-2 cursor-pointer text-main-700 hover:text-main-800 transition">
            <span className="font-semibold">My Wallet:</span>
            <span className="font-bold text-primary-600">1000 BP</span>
          </div>
        </div>

        <strong className="font-bold hover:text-main-200 transition cursor-pointer">
          0xA8bCe1bd5Ff836959F3993D2c97eD3a943812524
        </strong>
      </div>
    </header>
  );
}
