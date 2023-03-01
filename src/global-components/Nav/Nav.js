// Components==============
import { graphql, Link, useStaticQuery } from "gatsby";
import React from "react";
import { Navigation } from "./navigation";
import navItems from "./navItems";
import { SideBurger } from "./sideBurger";
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
      <Link to="/" style={{ paddingBottom: 5 }}>
        <img src={data.sanityQBlox.logo.asset.url} alt="logo" />
      </Link>
    );
  };

  return (
    <Navigation
      logo={<Logo width="45px" />}
      items={navItems}
      breakPoint={975}
      hamburger={<SideBurger items={navItems} />}
      itemSpacing={9}
      sticky
    />
  );
}
