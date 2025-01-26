import Logo from "../assets/images/8a7b9125464363.56345b1cb1ec8.png";
import Vision2030 from "../assets/images/vision-2030.svg";
import KSAImg from "../assets/images/ksa.svg";

import {
  EyeOff,
  Flag,
  Languages,
  Search,
  User2Icon,
  UserCircle2,
} from "lucide-react";

const NavBar = () => {
  return (
    <nav className="hidden h-screen bg-gray-200 sm:block">
      <div className="container">
        <div className="flex flex-col pt-4">
          <div className="flex items-center gap-2 ms-auto">
            <button className="flex transition-colors border-2 border-black btn hover:bg-primary hover:border-primary">
              <User2Icon />
              <p>أنشئ حسابك الجديد</p>
            </button>
            <button className="flex items-center gap-2 text-white transition-colors btn bg-secondary hover:text-secondary hover:bg-primary">
              <UserCircle2 />
              <p>تسجيل دخول</p>
            </button>
            <div className="flex items-center gap-2 mx-4">
              <Languages />
              <Search />
              <EyeOff />
              <Flag />
            </div>
            <img src={Vision2030} />
          </div>
          <div className="flex items-center justify-around gap-4">
            <img className="bg-contain h-36 w-72" src={Logo} alt="" />
            <ul className="flex gap-8 text-xl font-mada ">
              <li className="transition-colors text-secondary hover:text-primary">
                <a href="">الرئيسية</a>
              </li>
              <li className="transition-colors text-secondary hover:text-primary">
                <a href="">السلع</a>
              </li>
              <li className="transition-colors text-secondary hover:text-primary">
                <a href="">عن سلعة</a>
              </li>
              <li className="transition-colors text-secondary hover:text-primary">
                <a href="">الخدمات</a>
              </li>
              <li className="transition-colors text-secondary hover:text-primary">
                <a href="">تواصل معنا</a>
              </li>
            </ul>
          </div>
        </div>

        <header className="relative flex items-center justify-between">
          <div className="absolute top-0 z-10 w-64 h-full -right-72 blur-3xl bg-gradient-to-l to-primary from-transparent"></div>
          <div className="z-40 flex flex-col gap-2">
            <h1 className="font-black text-secondary text-7xl [text-shadow:_0_8px_4px_rgb(249_110_113_/_50%)]">
              سلعة
            </h1>
            <p className="text-xl font-medium font-mada text-secondary/70">
              هنا تجد كل سلعة تريدها.
            </p>
          </div>
          <img src={KSAImg} className="z-30 w-96" />
          <div className="absolute top-0 z-10 w-64 h-full -left-24 blur-3xl bg-gradient-to-l to-slate-400/30 from-transparent"></div>
        </header>
      </div>
    </nav>
  );
};

export default NavBar;
