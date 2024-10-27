import logo from "../../assets/assets/logo.png";
import dollor from "../../assets/assets/dollar.png";

export default function Navbar({ claimFreeCredit }) {
  return (
    <div className="navbar py-6 sticky top-0 bg-slate-100 bg-opacity-95">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Home</a>
            </li>
            <a>Fixture</a>
            <li>
              <a>Teams</a>
            </li>
            <li>
              <a>Schedules</a>
            </li>
          </ul>
        </div>
        <img src={logo} alt="" />
      </div>

      <div className="navbar-end">
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Fixture</a>
            </li>
            <li>
              <a>Teams</a>
            </li>
            <li>
              <a>Schedules</a>
            </li>
          </ul>
        </div>
        <div className=""></div>
        <span className="outline outline-slate-200 py-2 px-4 rounded-md">
          {claimFreeCredit} Coin
          <img className="w-8 inline-block pl-2" src={dollor} alt="" />
        </span>
      </div>
    </div>
  );
}
