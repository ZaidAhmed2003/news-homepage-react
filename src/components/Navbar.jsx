import { useState } from "react";

const Navbar = () => {
  const navLinks = ["Home", "New", "Popular", "Trending", "Categories"];
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => {
    setIsOpen(true);
  };
  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <nav className="flex items-center justify-between">
      <div>
        <img className="w-14 md:w-16" src="/images/logo.svg" alt="logo" />
      </div>

      <div className="md:hidden">
        <button onClick={onOpen}>
          <img
            src="/images/icon-menu.svg"
            className={isOpen && "hidden"}
            alt="menubtn"
          />
        </button>
      </div>

      <div
        className={`fixed inset-y-0 right-0 z-50 w-2/3 transform bg-white shadow-xl transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="my-10 px-5 md:my-20">
          <div className="text-right md:hidden">
            <button onClick={onClose}>
              <img src="/images/icon-menu-close.svg" alt="menubtnclose" />
            </button>
          </div>
          <ul className="mt-24 space-y-6 px-4 text-2xl">
            {navLinks.map((nav, index) => (
              <li
                key={index}
                className="cursor-pointer transition-colors duration-300 hover:text-soft-red"
              >
                {nav}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <ul className="text-dark-grayish-blue hidden items-center justify-between gap-10 text-lg md:flex">
        {navLinks.map((nav, index) => (
          <li
            className="cursor-pointer transition-colors duration-300 hover:text-soft-red"
            key={index}
          >
            {nav}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
