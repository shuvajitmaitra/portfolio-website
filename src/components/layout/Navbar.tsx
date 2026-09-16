import logo from "../../assets/images/brand/shuvajit-maitra-logo.png";
const Navbar = () => {
  const navLinks = ["Home", "Skills", "Experience", "Project", "Education", "About", "Contact"];

  const handleNavLink = (nav: string) => {
    const handleClickNavLink = () => {
      document.getElementById(nav)?.scrollIntoView({ behavior: "smooth" });
    };
    return (
      <ul key={nav}>
        <li className="cursor-pointer" onClick={handleClickNavLink}>
          {nav}
        </li>
      </ul>
    );
  };

  return (
    <div className="max-w-screen-xl mx-auto border-b border-white/10 py-5 text-white flex justify-between items-center flex-col md:flex-row px-5 xl:px-0 gap-4">
      <div className="flex justify-center items-center gap-2 text-sm uppercase tracking-[0.2em] text-gray-200">
        <img src={logo} alt="logo" className="w-9 h-9" />
        <span>Shuvajit Maitra</span>
      </div>
      <div className="flex gap-5 flex-wrap justify-center text-sm text-gray-400">{navLinks.map((nav) => handleNavLink(nav))}</div>
    </div>
  );
};
export default Navbar;
