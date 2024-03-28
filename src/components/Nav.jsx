import { Link, NavLink } from "react-router-dom";
import { AiOutlineMenuUnfold } from "react-icons/ai";

const Nav = () => {
  return (
    <nav className="navbar bg-base-100 max-w-[1440px] py-10 mx-auto px-4 md:px-[135px] flex justify-between items-center">
      <div className="navbar-start flex items-center">
        <div className="dropdown flex items-center">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <AiOutlineMenuUnfold className="text-2xl " />
          </div>
          <ul
            tabIndex={0}
            className="menu font-medium text-lg menu-sm dropdown-content lg:mt-3 mt-[250px] z-[100] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-[#23BE0A] border-[1px] border-[#23BE0A] rounded-lg py-1 px-3"
                  : "py-1 px-3"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/listedbooks"
              className={({ isActive }) =>
                isActive
                  ? "text-[#23BE0A] border-[1px] border-[#23BE0A] rounded-lg py-1 px-3"
                  : "py-1 px-3"
              }
            >
              Listed Books
            </NavLink>
            <NavLink
              to="/pagestoread"
              className={({ isActive }) =>
                isActive
                  ? "text-[#23BE0A] border-[1px] border-[#23BE0A] rounded-lg py-1 px-3"
                  : "py-1 px-3"
              }
            >
              Pages to Read
            </NavLink>
            <NavLink
              to="/review"
              className={({ isActive }) =>
                isActive
                  ? "text-[#23BE0A] border-[1px] border-[#23BE0A] rounded-lg py-1 px-3"
                  : "py-1 px-3"
              }
            >
              Review
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "text-[#23BE0A] border-[1px] border-[#23BE0A] rounded-lg py-1 px-3"
                  : "py-1 px-3"
              }
            >
              Contact
            </NavLink>
          </ul>
        </div>
        <Link
          to="/"
          className="text-2xl md:text-[36px] font-bold bg-300% bg-gradient-to-r from-[#23BE0A] via-blue-500 to-[#59C6D2] text-transparent bg-clip-text animate-gradient"
        >
          BookVerse
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu font-medium text-lg menu-horizontal px-1">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-[#23BE0A] border-[1px] border-[#23BE0A] rounded-lg py-1 px-3"
                : "py-1 px-3"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/listedbooks"
            className={({ isActive }) =>
              isActive
                ? "text-[#23BE0A] border-[1px] border-[#23BE0A] rounded-lg py-1 px-3"
                : "py-1 px-3"
            }
          >
            Listed Books
          </NavLink>
          <NavLink
            to="/pagestoread"
            className={({ isActive }) =>
              isActive
                ? "text-[#23BE0A] border-[1px] border-[#23BE0A] rounded-lg py-1 px-3"
                : "py-1 px-3"
            }
          >
            Pages to Read
          </NavLink>
          <NavLink
            to="/review"
            className={({ isActive }) =>
              isActive
                ? "text-[#23BE0A] border-[1px] border-[#23BE0A] rounded-lg py-1 px-3"
                : "py-1 px-3"
            }
          >
            Review
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-[#23BE0A] border-[1px] border-[#23BE0A] rounded-lg py-1 px-3"
                : "py-1 px-3"
            }
          >
            Contact
          </NavLink>
        </ul>
      </div>
      <div className="navbar-end items-center gap-4">
        <a className="btn px-4 py-2 rounded-md font-semibold text-lg bg-[#23BE0A] text-white transition duration-300 hover:bg-white hover:text-[#23BE0A] border-[1px] hover:border-[#23BE0A] cursor-pointer">
          Sign In
        </a>
        <a className="btn hidden md:block px-4 py-2 rounded-md font-semibold text-lg bg-[#59C6D2] text-white transition duration-300 hover:bg-white hover:text-[#59C6D2] border-[1px] hover:border-[#59C6D2] cursor-pointer">
          Sign Up
        </a>
      </div>
    </nav>
  );
};

export default Nav;
