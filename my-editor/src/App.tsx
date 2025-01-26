import { Search } from "lucide-react";

export default function App() {
  return (
    <>
      <nav className="shadow-lg py-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="text-xl">لوجو</div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="top-0 right-2 absolute w-3" />
              <input
                type="text"
                name="search"
                id="search"
                className="w-32 rounded-lg border border-black"
              />
            </div>
            <ul className="flex items-center gap-2">
              <li>
                <a href="">عبط</a>
              </li>
              <li>
                <a href="">عبط</a>
              </li>
              <li>
                <a href="">عبط</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="content">
        <div className="w-1/3"></div>
        <div className="w-1/3"></div>
        <div className="w-1/3"></div>
      </div>
    </>
  );
}
