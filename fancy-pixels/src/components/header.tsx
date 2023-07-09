export function Header() {
  return (
    <header className="fixed top-0 left-80 right-0 py-3 border-b border-main-500/20 backdrop-blur">
      <div className="flex justify-between items-center max-w-7xl m-auto">
        <div className="flex gap-8 items-center">
          <a
            href="#"
            className="font-bold text-main-100 hover:text-main-200 transition mr-8 text-xl"
          >
            The Boring Project.
          </a>

          <div className="flex items-center gap-2 cursor-pointer text-main-400 hover:text-main-500 transition">
            <span className="font-semibold">Challenges:</span>
            <span className="font-bold text-primary-300">3</span>
          </div>

          <div className="flex items-center gap-2 cursor-pointer text-main-400 hover:text-main-500 transition">
            <span className="font-semibold">My Wallet:</span>
            <span className="font-bold text-primary-300">1000 BP</span>
          </div>
        </div>

        <strong className="font-bold text-main-100 hover:text-main-200 transition cursor-pointer">
          Dolores Madrigal
        </strong>
      </div>
    </header>
  );
}
