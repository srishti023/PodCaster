import React from "react";

const Navbar = () => {
  const navLinks = [
    {
      name : "Home",
      path : "/",
    },
    {
      name : "Categories",
      path : "/categories",
    },
    {
      name : "All Podcasts",
      path : "/all-podcasts",
    },
  ];
  return (
  <nav className="px-4 md:px-8 lg:px-12 py-2">
    <div>
      <div className="logo brand-name w-2/6">
        <Link to="/" className="text-2xl font-bold">Podcaster</Link>
      </div>
      <div></div>
      <div></div>
    </div>
  </nav>);
};

export default Navbar;
