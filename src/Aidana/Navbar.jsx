 import { NavLink } from "react-router-dom";

function Navbar() {
  const linkBaseStyle =
    "px-4 py-2 rounded-md text-sm font-medium transition duration-200";
  const getLinkClass = ({ isActive }) =>
    isActive
      ? `${linkBaseStyle} bg-blue-600 text-white shadow-md`
      : `${linkBaseStyle} text-gray-700 hover:text-blue-600 hover:bg-blue-50`;

  return (
    <nav className="bg-white shadow-lg fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <NavLink to="/" className="text-2xl font-extrabold text-blue-600 tracking-tight">
            🎓 StudentHelp.kz
          </NavLink>

          <div className="hidden md:flex space-x-3">
            <NavLink to="/dormitories" className={getLinkClass}>
              Жатақхана
            </NavLink>
            <NavLink to="/jobs" className={getLinkClass}>
              Жұмыс
            </NavLink>
            <NavLink to="/education" className={getLinkClass}>
              Оқу
            </NavLink>
            <NavLink to="/ReadMore" className={getLinkClass}>
              Біз туралы
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
