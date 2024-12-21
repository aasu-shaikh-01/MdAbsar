import { useState } from "react";
import { Link } from "react-scroll";
// import { Link } from "react-router-dom";

// const NavItems = () => {
//   return (
//     <ul className="sm:flex-row sm:gap-8 flex flex-col gap-4">
//       {indexJs.Links.map(({ id, name, href }) => (
//         <Link
//           to={"/"}
//           className={`${(isActive) => {
//             isActive ? "text-yellow-400" : "";
//           }}"cursor-pointer text-white sm:font-bold sm:text-lg transition-colors py-1 px-2 rounded-sm hover:text-blue-500 sm:hover:bg-transparent"`}
//         >
//           {name}
//           {/* <a href={href}>{name}</a> */}
//         </Link>
//       ))}
//     </ul>
//   );
// };
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center p-4">
          <a
            href="/"
            className="text-white font-bold text-xl hello hover:text-blue-500 transition-colors"
          >
            <img
              src="MyLogos.jpg"
              alt=""
              // width={"120rem"}
              className="h-8 sm:h-10 w-16 sm:w-20 brightness-150"
            />
          </a>
          <button
            className="text-white sm:hidden focus:outline-none font-bold text-xl hover:text-blue-500 transition-colors"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            {isOpen ? (
              <img src="assets/close.svg" alt="open" className="h-6 w-6" />
            ) : (
              <img src="assets/menu.svg" alt="open" className="h-6 w-6" />
            )}
          </button>
          <nav className="hidden sm:flex">
            <ul className="sm:flex-row sm:gap-8 flex flex-col gap-4">
              <li>
                <Link
                  to={"home"}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={400}
                  // activeClass="bg-gray-500 text-white rounded-md"
                  className="cursor-pointer text-white sm:font-bold sm:text-lg transition-colors py-1 px-2  hover:text-blue-500"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to={"about"}
                  spy={true}
                  smooth={true}
                  // offset={-100}
                  offset={-100}
                  duration={400}
                  // activeClass="bg-gray-500 text-white rounded-md"
                  className="cursor-pointer text-white sm:font-bold sm:text-lg transition-colors py-1 px-2 rounded-sm hover:text-blue-500 sm:hover:bg-transparent"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to={"education"}
                  spy={true}
                  smooth={true}
                  offset={-30}
                  duration={400}
                  // activeClass="bg-gray-500 text-white rounded-md"
                  className="cursor-pointer text-white sm:font-bold sm:text-lg transition-colors py-1 px-2 rounded-sm hover:text-blue-500 sm:hover:bg-transparent"
                >
                  Education
                </Link>
              </li>
              <li>
                <Link
                  to="techstack"
                  spy={true}
                  smooth={true}
                  // offset={-100}
                  offset={-30}
                  duration={400}
                  // activeClass="bg-gray-500 text-white rounded-md"
                  className="cursor-pointer text-white sm:font-bold sm:text-lg transition-colors py-1 px-2 rounded-sm hover:text-blue-500 sm:hover:bg-transparent"
                >
                  Techstack
                </Link>
              </li>
              <li>
                <Link
                  to="portfolio"
                  spy={true}
                  smooth={true}
                  offset={-60}
                  duration={400}
                  // activeClass="bg-gray-500 text-white rounded-md"
                  className="cursor-pointer text-white sm:font-bold sm:text-lg transition-colors py-1 px-2 rounded-sm hover:text-blue-500 sm:hover:bg-transparent"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  to="showcase"
                  spy={true}
                  smooth={true}
                  // offset={-100}
                  duration={400}
                  // activeClass="bg-gray-500 text-white rounded-md"
                  className="cursor-pointer text-white sm:font-bold sm:text-lg transition-colors py-1 px-2 rounded-sm hover:text-blue-500 sm:hover:bg-transparent"
                >
                  webOn
                </Link>
              </li>
              <li>
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={400}
                  // activeClass="bg-gray-500 text-white rounded-md"
                  className="cursor-pointer text-white sm:font-bold sm:text-lg transition-colors py-1 px-2 rounded-sm hover:text-blue-500 sm:hover:bg-transparent"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div
        className={`${
          isOpen ? "max-h-screen" : "max-h-0"
        } overflow-hidden transition-all duration-3400sm:hidden`}
      >
        <nav className="p-4 bg-slate-900">
          {/* <NavItems /> */}

          <ul className="sm:flex-row sm:gap-8 flex flex-col gap-4">
            {/* <li> */}
            <Link
              to={"home"}
              spy={true}
              smooth={true}
              offset={-100}
              duration={400}
              onClick={() => {
                setIsOpen(false);
              }}
              // activeClass="bg-gray-500 text-white rounded-md"
              className="cursor-pointer text-white sm:font-bold sm:text-lg transition-colors py-1 px-2  hover:text-blue-500 hover:bg-gray-500 rounded-md"
            >
              Home
            </Link>
            {/* </li> */}
            {/* <li className="hover:bg-gray-500 rounded-md w-full"> */}
            <Link
              to={"about"}
              spy={true}
              smooth={true}
              // offset={-100}
              offset={-100}
              duration={400}
              onClick={() => {
                setIsOpen(false);
              }}
              // activeClass="bg-gray-500 text-white rounded-md"
              className="cursor-pointer text-white sm:font-bold sm:text-lg transition-colors py-1 px-2 rounded-sm hover:text-blue-500 sm:hover:bg-transparent hover:bg-gray-500"
            >
              About
            </Link>
            {/* </li> */}
            {/* <li> */}
            <Link
              to={"education"}
              spy={true}
              smooth={true}
              // offset={-100}
              duration={400}
              onClick={() => {
                setIsOpen(false);
              }}
              // activeClass="bg-gray-500 text-white rounded-md"
              className="cursor-pointer text-white sm:font-bold sm:text-lg transition-colors py-1 px-2 rounded-sm hover:text-blue-500 sm:hover:bg-transparent hover:bg-gray-500"
            >
              Education
            </Link>
            {/* </li> */}
            {/* <li> */}
            <Link
              to="techstack"
              spy={true}
              smooth={true}
              // offset={-100}
              offset={-30}
              duration={400}
              onClick={() => {
                setIsOpen(false);
              }}
              // activeClass="bg-gray-500 text-white rounded-md"
              className="cursor-pointer text-white sm:font-bold sm:text-lg transition-colors py-1 px-2 rounded-sm hover:text-blue-500 sm:hover:bg-transparent hover:bg-gray-500"
            >
              Techstack
            </Link>
            {/* </li> */}
            {/* <li> */}
            <Link
              to="portfolio"
              spy={true}
              smooth={true}
              offset={-100}
              duration={400}
              onClick={() => {
                setIsOpen(false);
              }}
              // activeClass="bg-gray-500 text-white rounded-md"
              className="cursor-pointer text-white sm:font-bold sm:text-lg transition-colors py-1 px-2 rounded-sm hover:text-blue-500 sm:hover:bg-transparent hover:bg-gray-500"
            >
              Portfolio
            </Link>
            {/* </li> */}
            {/* <li> */}
            <Link
              to="showcase"
              spy={true}
              smooth={true}
              // offset={-100}
              duration={400}
              onClick={() => {
                setIsOpen(false);
              }}
              // activeClass="bg-gray-500 text-white rounded-md"
              className="cursor-pointer text-white sm:font-bold sm:text-lg transition-colors py-1 px-2 rounded-sm hover:text-blue-500 sm:hover:bg-transparent hover:bg-gray-500"
            >
              webOn
            </Link>
            {/* </li> */}
            {/* <li> */}
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-100}
              duration={400}
              onClick={() => {
                setIsOpen(false);
              }}
              // activeClass="bg-gray-500 text-white rounded-md"
              className="cursor-pointer text-white sm:font-bold sm:text-lg transition-colors py-1 px-2 rounded-sm hover:text-blue-500 sm:hover:bg-transparent hover:bg-gray-500"
            >
              Contact
            </Link>
            {/* </li> */}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

// import { useState } from "react";
// import { Link } from "react-scroll";
// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   return (
//     <header className="fixed top-0 left-0 right-0 z-50 bg-black/90">
//       <div className="max-w-7xl mx-auto">
//         <div className="flex justify-between items-center p-4">
//           <a
//             href="/"
//             className="text-white font-bold text-xl hello hover:text-blue-500 transition-colors"
//           >
//             <img
//               src="MyLogos.jpg"
//               alt=""
//               width={"100rem"}
//               className="h-10 brightness-150"
//             />
//           </a>

//           <button
//             className="text-white sm:hidden focus:outline-none font-bold text-xl hover:text-blue-500 transition-colors"
//             onClick={() => {
//               setIsOpen(!isOpen);
//             }}
//           >
//             {isOpen ? (
//               <img src="assets/close.svg" alt="open" className="h-6 w-6" />
//             ) : (
//               <img src="assets/menu.svg" alt="open" className="h-6 w-6" />
//             )}
//           </button>
//           <nav className="hidden sm:flex">
//             <ul className="sm:flex-row sm:gap-8 flex flex-col gap-4">
//               <li>
//                 <Link
//                   to={"home"}
//                   spy={true}
//                   smooth={true}
//                   offset={-100}
//                   duration={400}
//                   // activeClass="bg-gray-500 text-white rounded-md"
//                   className="cursor-pointer text-white sm:font-bold sm:text-lg transition-colors py-1 px-2  hover:text-blue-500"
//                 >
//                   Home
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to={"about"}
//                   spy={true}
//                   smooth={true}
//                   // offset={-100}
//                   offset={-100}
//                   duration={400}
//                   // activeClass="bg-gray-500 text-white rounded-md"
//                   className="cursor-pointer text-white sm:font-bold sm:text-lg transition-colors py-1 px-2 rounded-sm hover:text-blue-500 sm:hover:bg-transparent"
//                 >
//                   About
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to={"education"}
//                   spy={true}
//                   smooth={true}
//                   // offset={-100}
//                   duration={400
//                   // activeClass="bg-gray-500 text-white rounded-md"
//                   className="cursor-pointer text-white sm:font-bold sm:text-lg transition-colors py-1 px-2 rounded-sm hover:text-blue-500 sm:hover:bg-transparent"
//                 >
//                   Education
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="techstack"
//                   spy={true}
//                   smooth={true}
//                   // offset={-100}
//                   offset={-30}
//                   duration={400}
//                   // activeClass="bg-gray-500 text-white rounded-md"
//                   className="cursor-pointer text-white sm:font-bold sm:text-lg transition-colors py-1 px-2 rounded-sm hover:text-blue-500 sm:hover:bg-transparent"
//                 >
//                   Techstack
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="portfolio"
//                   spy={true}
//                   smooth={true}
//                   offset={-100}
//                   duration={400}
//                   // activeClass="bg-gray-500 text-white rounded-md"
//                   className="cursor-pointer text-white sm:font-bold sm:text-lg transition-colors py-1 px-2 rounded-sm hover:text-blue-500 sm:hover:bg-transparent"
//                 >
//                   Portfolio
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="showcase"
//                   spy={true}
//                   smooth={true}
//                   // offset={-100}
//                   duration={400}
//                   // activeClass="bg-gray-500 text-white rounded-md"
//                   className="cursor-pointer text-white sm:font-bold sm:text-lg transition-colors py-1 px-2 rounded-sm hover:text-blue-500 sm:hover:bg-transparent"
//                 >
//                   Showcase
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="contact"
//                   spy={true}
//                   smooth={true}
//                   offset={-100}
//                   duration={400}
//                   // activeClass="bg-gray-500 text-white rounded-md"
//                   className="cursor-pointer text-white sm:font-bold sm:text-lg transition-colors py-1 px-2 rounded-sm hover:text-blue-500 sm:hover:bg-transparent"
//                 >
//                   Contact
//                 </Link>
//               </li>
//             </ul>
//           </nav>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Navbar;
