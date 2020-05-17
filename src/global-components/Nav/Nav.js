// Components==============
import { Navigation, SideBurger } from "components-react-lib";
import { graphql, Link, useStaticQuery } from "gatsby";
import React from "react";
import navItems from "./navItems";
// =========================

export default function Nav() {
  const data = useStaticQuery(graphql`
    query logoQuery {
      sanityQBlox {
        logo {
          asset {
            url
          }
        }
      }
    }
  `);

  const Logo = () => {
    return (
      <Link to="/">
        <img src={data.sanityQBlox.logo.asset.url} alt="logo" />
      </Link>
    );
  };

  return (
    <Navigation
      logo={<Logo width="45px" />}
      items={navItems}
      breakPoint={825}
      hamburger={<SideBurger items={navItems} />}
      itemSpacing={9}
      sticky
    />
  );
}
