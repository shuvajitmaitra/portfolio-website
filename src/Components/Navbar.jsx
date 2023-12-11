import logo from "../assets/shuvajit-maitra-logo.png";
const Navbar = () => {
  const navLinks = ["Home", "Project", "About"];

  const handleNavLink = (nav) => {
    const handleClickNavLink =()=>{
      document.getElementById(nav).scrollIntoView({behavior: "smooth"})
    }
    return (
      <ul
        key={nav}
      >
        <li onClick={handleClickNavLink} >{nav}</li>
      </ul>
    );
  };

  return (
    <div id="Home" className="max-w-screen-xl mx-auto border-b py-7 border-zinc-600 text-white flex justify-between items-center">
      <div className="flex justify-center items-center gap-1">
        <img
          src={logo}
          alt="logo"
          className="w-10 h-10"
        />
        Shuvajit Maitra
      </div>
      <div  className="flex gap-3 ">{navLinks.map((nav) => handleNavLink(nav))}</div>
    </div>
  );
};
export default Navbar;
