export function Footer() {
  return (
    <header className="fixed bottom-0 left-80 right-0 px-4 py-6 border-t border-main-500/20 backdrop-blur">
      <div className="flex justify-between items-center max-w-7xl m-auto">
        <p className="text-main-400">
          Copyright © 2023 The Boring Project Inc.
        </p>

        <div className="flex item-center gap-6">
          <span className="font-semibold cursor-pointer text-main-400 hover:text-main-500 transition">
            About the artist
          </span>
          <span className="font-semibold cursor-pointer text-main-400 hover:text-main-500 transition">
            Rules of the challenge
          </span>
        </div>
      </div>
    </header>
  );
}
