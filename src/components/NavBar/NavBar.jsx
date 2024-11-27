import { useState } from "react";

import { RiMenu2Fill,RiCloseLargeFill } from "react-icons/ri";


import Links from "../Links/Links";


const NavBar = () => {
  //onclick kore change korar jonno icon e
    const [open, setOpen] = useState(false)
    const routes = [
        { id: 1, path: "/", name: "Home" },
        { id: 2, path: "/about", name: "About" },
        { id: 3, path: "/services", name: "Services" },
        { id: 4, path: "/contact", name: "Contact" },
        { id: 5, path: "*", name: "NotFound" }
      ];
    return (
        <nav className="p-6 bg-yellow-200">
            <div className=" md:hidden text-3xl" onClick={()=>setOpen(!open)}>
              {
                open === true ? <RiCloseLargeFill />  : <RiMenu2Fill  />

              }

            </div>
       
          <ul className={`md:flex absolute  md:static duration-1000
            ${open ? 'top-16' : '-top-60'}
            px-6  bg-yellow-200`}>
          {
                routes.map(route=> <Links key={route.id} route={route}></Links>)
            }
          </ul>
        </nav>
    );
};

export default NavBar;