function App() {
  return (
    // <header className=" relative">
    //   <div className="container mx-auto bg-gray-300  group-hover:mx-4 transition h-16 justify-center  flex flex-col px-8 group">
    //     <div className="">
    //       <div className="flex w-full items-center justify-between place-self-center">
    //         <h1>LOGO</h1>
    //         <p>Toggle</p>
    //       </div>
    //     </div>

    //     <nav className="absolute h-0 top-full invisible group-hover:visible transition-normal duration-300 group-hover:opacity-100 group-hover:h-32 opacity-0 left-0 w-full bg-gray-300 ease-[cubic-bezier(0.95,0.05,0.795,0.035)]">
    //       <ul className="flex items-center gap-4">
    //         <li>
    //           <a href="">blah</a>
    //         </li>
    //       </ul>
    //       <ul>
    //         <li>
    //           <a href="">blah</a>
    //         </li>
    //       </ul>
    //       <ul>
    //         <li>
    //           <a href="">blah</a>
    //         </li>
    //       </ul>
    //       <ul>
    //         <li>
    //           <a href="">blah</a>
    //         </li>
    //       </ul>
    //     </nav>
    //   </div>
    // </header>
    <main className="flex items-center justify-center h-screen">
      {/* <nav className="mt-4">
        <div className="container mx-auto">
          <div className="mx-2 md:mx-0 bg-zinc-900 shadow-2xl text-white rounded-full p-4 flex items-center justify-between">
            <p>LOGO</p>
            <i className="flex flex-col items-center justify-center group">
              <span className="border-white border-b-2 group-hover:-rotate-45 group-hover:translate-y-2 transition duration-500  h-1 w-4"></span>
              <span className="border-white border-b-2 group-hover:opacity-0 transition duration-300 h-1 w-4"></span>
              <span className="border-white border-b-2 group-hover:rotate-45  transition duration-500 h-1 w-4"></span>
            </i>
          </div>
        </div>
      </nav> */}

      <div className="flex flex-col items-center">
        <div className="flex gap-2">
          <div className="size-18 rounded-full bg-zinc-950 p-4 animate-spin">
            <div className="rounded-full bg-white size-9"></div>
          </div>
          <div className="size-18 rounded-full bg-zinc-950 p-4 animate-spin">
            <div className="rounded-full bg-white size-9"></div>
          </div>
        </div>

        <div className="bg-gradient-to-b from-white from-50% via-zinc-950 rotate-180 to-zinc-950 size-18 rounded-full mt-4 flex items-center justify-center">
          <div className="w-2 h-full rotate-90 translate-y-4 rounded-full bg-gradient-to-l from-white via-zinc-950 to-zinc-950"></div>
        </div>
      </div>
    </main>
  );
}

export default App;
