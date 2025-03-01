import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu } from 'lucide-react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle menu visibility
  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  // Close menu when a link is clicked
  const closeMenu = () => {
    setMenuOpen(false);
  };

  // Close menu when resizing (if menu button disappears)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="fixed top-0 left-0 flex flex-row w-full h-16 items-center justify-between py-8 px-[10%] bg-background shadow-md ">
      <Link href="/" className="flex-shrink-0">
        <div className="logo cursor-pointer transition-colors duration-300 hover:scale-110 hover:text-highlight1">Colors</div>
      </Link>
      <nav>
        <ul className="hidden sm:flex space-x-6">
          <li>
            <Link href="/generator" className="navlinks transition-colors duration-300 hover:text-primary hover:font-bold">
              generator
            </Link>
          </li>
          <li>
            <Link href="/builder" className="navlinks transition-colors duration-300 hover:text-primary hover:font-bold">
              builder
            </Link>
          </li>
          <li>
            <Link href="/tester" className="navlinks transition-colors duration-300 hover:text-primary hover:font-bold">
              tester
            </Link>
          </li>
          <li>
            <Link href="/picker" className="navlinks transition-colors duration-300 hover:text-primary hover:font-bold">
              picker
            </Link>
          </li>
        </ul>
      </nav>

      <div className="flex space-x-4">
        <button className="cursor-pointer transition-colors duration-300 hover:text-primary hover:scale-110 sm:hidden"
          onClick={toggleMenu}>
          <Menu />
        </button>

        {menuOpen && (
          <div className="absolute top-12 right-8 pl-4 pr-2 rounded-md shadow-md sm:hidden">
            <ul className="flex flex-col text-right space-y-4 py-4">
              {["generator", "builder", "tester", "picker"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item}`}
                    className="menunavlinks transition-colors duration-300 hover:text-primary hover:font-bold"
                    onClick={closeMenu}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
