import { useEffect, useState } from "react";
import { NavBar } from "./Nav.style";

const Nav = ({ children }) => {
  const [hasChildren, setHasChildren] = useState(true);

  useEffect(() => {
    children === undefined && setHasChildren(false);
  }, [children]);

  return (
    <NavBar hasChildren={hasChildren}>
      <h1 className="Logo">Kenzie Hub</h1>
      {children}
    </NavBar>
  );
};

export default Nav;
