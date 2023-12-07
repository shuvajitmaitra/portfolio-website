const Navbar = () => {
  return (
    <div className="max-w-screen-xl mx-auto border-b py-7 border-zinc-600 text-white flex justify-between items-center">
      <div>Shuvajit Maitra</div>
      <div>
        <ul className="flex gap-3 ">
          <li>Home</li>
          <li>Skill</li>
          <li>Project</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
