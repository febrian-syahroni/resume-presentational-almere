export default function Header() {
  return (
    <div className="fixed z-20 top-0 flex w-screen px-[10px] lg:px-[50px] justify-center bg-black/40">
      <div className="flex text-white h-[50px] lg:relative w-[1280px] justify-between lg:justify-center items-center">
        {/* Navbar */}
        <div className="flex h-full">
          <button className="relative h-full px-[10px] items-center flex">
            <h1>Plans</h1>
          </button>
          <button className="relative h-full px-[10px] items-center flex">
            <h1>Templates</h1>
            <div className="absolute rounded-full w-1/2 start-[25px] bottom-0 container h-1 border-yellow-200 border-[3px]"></div>
          </button>
        </div>

        {/* Dashboard */}
        <div className="lg:absolute end-0 flex gap-[10px] items-center">
          <button className="flex px-[20px] py-[5px] rounded-md hover:bg-white hover:text-black text-white border-white border">
            <h1>Signup</h1>
          </button>
          <button className="flex px-[20px] py-[5px] rounded-md text-black bg-yellow-100 border">
            <h1>Login</h1>
          </button>
        </div>
      </div>
    </div>
  );
}
