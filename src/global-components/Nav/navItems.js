import { Link } from "gatsby";
import React from "react";
import { DropdownButton } from "./dropdown";
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
    content: (
      <DropdownButton
        button={<div className="hoverPointer">Applications</div>}
        menu={<SubMenu menu="applications" />}
        menuPosition="90%"
        menuWidth="100%"
        menuIsFullWidth
        hover
      />
    ),
    hamburgerContent: (
      <SubMenuBurger menu="application">Application</SubMenuBurger>
    ),
    link: "noLink",
  },
  {
    content: (
      <DropdownButton
        button={<div className="hoverPointer">News</div>}
        menu={<SubMenu menu="news" />}
        menuPosition="90%"
        menuWidth="100%"
        menuIsFullWidth
        hover
      />
    ),
    hamburgerContent: <SubMenuBurger menu="news">News</SubMenuBurger>,
    link: "noLink",
  },
  {
    content: (
      <DropdownButton
        button={<div className="hoverPointer">About us</div>}
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
