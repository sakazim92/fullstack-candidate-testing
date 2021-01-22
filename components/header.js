const Header = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap p-6  bg-yellow-400">
      <div className="flex items-center flex-no-shrink mr-6 text-blue-600">
        <span className="font-semibold text-xl tracking-tight">
          HEALTH EXPLORE
        </span>
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white">
          <svg
            className="h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="hidden md:inline-block text-sm lg:flex-grow mt-1 text-center text-gray-600">
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-5"
          >
            <b>PROFILE</b>
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-5"
          >
            <b>JOBS</b>
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white  mr-5"
          >
            <b>PROFESSIONAL NETWORK</b>
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white  mr-5"
          >
            <b>LOUNGE</b>
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white"
          >
            <b>SALARY</b>
          </a>
        </div>
        <div className="mr-2">
          <a
            href="#"
            className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal hover:bg-blue-600 mt-4 lg:mt-0"
          >
            CREATE JOB
          </a>
        </div>
        <div>
          <a
            href="#"
            className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal hover:bg-blue-600 mt-4 lg:mt-0"
          >
            LOGOUT
          </a>
        </div>
      </div>
    </nav>
  );
};
export default Header;
