import logo from "../assets/logo-text.png";

export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-[#fceaea]">
      <div className="container relative mx-auto flex items-center justify-between px-4 py-4 md:px-6">

  
        <button className="text-2xl text-[#767a80] md:hidden">
          ☰
        </button>


        <div className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0">
          <img
            className="w-[75px] sm:w-[85px] md:w-[95px]"
            src={logo}
            alt="Logo"
          />
        </div>

        <ul className="hidden items-center gap-6 text-lg text-[#686b70] md:flex lg:text-xl">
          <li className="cursor-pointer text-red-400">Home</li>
          <li className="cursor-pointer">Technologies</li>
          <li className="cursor-pointer">Projects</li>
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Contact</li>
        </ul>

        <div className="ml-auto flex gap-2 md:ml-0">
          <button
            className="rounded-3xl border border-[#e28787] px-3 py-1.5 text-xs text-[#5a5b5e] transition hover:bg-[#e5a6a6] hover:text-white sm:px-4 sm:text-sm"
          >
            Sign In
          </button>

          <button
            className="rounded-3xl bg-[#f58c8c] px-3 py-1.5 text-xs text-white transition hover:bg-[#d98f8f] sm:px-4 sm:text-sm"
          >
            Sign Up
          </button>
        </div>

      </div>
    </nav>
  );
}