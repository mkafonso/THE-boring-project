export function Home() {
  return (
    <div className="flex gap-8 relative">
      <div className="w-80 h-[41rem] shadown-md rounded-md bg-main-800 flex flex-col p-4 fixed top-24">
        <span>It's</span>
        <span className="text-primary-300 font-semibold">
          Sunday, the 16th june 2023
        </span>
      </div>

      <div className="flex-1 h-[200vh] ml-[22rem] mt-24 flex flex-col gap-4 mb-40">
        <div className="flex gap-4">
          <div className="flex flex-col gap-4">
            <div className="flex gap-4">
              <div className="w-64 h-80 bg-main-800 shadown-md cursor-pointer rounded-md"></div>
              <div className="w-64 h-80 bg-main-800 shadown-md cursor-pointer rounded-md"></div>
            </div>
            <div className="flex gap-4">
              <div className="w-64 h-80 bg-main-800 shadown-md cursor-pointer rounded-md"></div>
              <div className="w-64 h-80 bg-main-800 shadown-md cursor-pointer rounded-md"></div>
            </div>
          </div>

          <div className="flex-1 h-[41rem] bg-main-800 shadown-md cursor-pointer rounded-md"></div>
        </div>

        <div className="flex gap-4">
          <div className="flex-1 h-[41rem] bg-main-800 shadown-md cursor-pointer rounded-md"></div>

          <div className="flex flex-col gap-4">
            <div className="flex gap-4">
              <div className="w-64 h-80 bg-main-800 shadown-md cursor-pointer rounded-md"></div>
              <div className="w-64 h-80 bg-main-800 shadown-md cursor-pointer rounded-md"></div>
            </div>
            <div className="flex gap-4">
              <div className="w-64 h-80 bg-main-800 shadown-md cursor-pointer rounded-md"></div>
              <div className="w-64 h-80 bg-main-800 shadown-md cursor-pointer rounded-md"></div>
            </div>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="flex flex-col gap-4">
            <div className="flex gap-4">
              <div className="w-64 h-80 bg-main-800 shadown-md cursor-pointer rounded-md"></div>
              <div className="w-64 h-80 bg-main-800 shadown-md cursor-pointer rounded-md"></div>
            </div>
            <div className="flex gap-4">
              <div className="w-64 h-80 bg-main-800 shadown-md cursor-pointer rounded-md"></div>
              <div className="w-64 h-80 bg-main-800 shadown-md cursor-pointer rounded-md"></div>
            </div>
          </div>

          <div className="flex-1 h-[41rem] bg-main-800 shadown-md cursor-pointer rounded-md"></div>
        </div>
      </div>
    </div>
  );
}
