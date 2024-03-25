const Nav = () => {
  return (
    <div className="max-w-[1440px] py-10 mx-auto px-4 md:px-[135px] flex justify-between items-center">
      <a className="text-3xl font-bold">BookVerse</a>
      <ul className="gap-4 hidden lg:flex items-center text-lg">
        <li>
          <a>Home</a>
        </li>
        <li>
          <a>Listed Books</a>
        </li>
        <li>
          <a>Pages to Read</a>
        </li>
      </ul>
      <div className="flex items-center gap-4">
        <a className="px-4 py-2 rounded-md font-semibold text-lg bg-[#23BE0A] text-white transition duration-300 hover:bg-white hover:text-[#23BE0A] border-[1px] hover:border-[#23BE0A] cursor-pointer">
          Sign In
        </a>
        <a className="hidden md:block px-4 py-2 rounded-md font-semibold text-lg bg-[#59C6D2] text-white transition duration-300 hover:bg-white hover:text-[#59C6D2] border-[1px] hover:border-[#59C6D2] cursor-pointer">
          Sign Up
        </a>
      </div>
    </div>
  );
};

export default Nav;
