import { DropdownButton } from "components-react-lib";
import { Link } from "gatsby";
import React from "react";
import SubMenu from "./SubMenu";
import SubMenuBurger from "./SubMenuBurger";

const navItems = [
  {
    content: "Home",
    link: "",
  },
  {
    content: (
      <DropdownButton
        button={<Link to="/products">Products</Link>}
        menu={<SubMenu menu="products" />}
        menuPosition="90%"
        menuWidth="100%"
        menuIsFullWidth
        hover
      />
    ),
    hamburgerContent: <SubMenuBurger menu="products">Products</SubMenuBurger>,
    link: "noLink",
  },
  {
    content: "News",
    link: "news",
  },
  {
    content: (
      <DropdownButton
        button={<div>About us</div>}
        menu={<SubMenu menu="about" />}
        menuPosition="90%"
        menuWidth="100%"
        menuIsFullWidth
        hover
      />
    ),
    hamburgerContent: <SubMenuBurger menu="about">About us</SubMenuBurger>,
    link: "noLink",
  },
  {
    content: "Contact",
    link: "contact",
  },
];

export default navItems;
