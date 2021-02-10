import React from "react";
import { MDXProvider } from "@mdx-js/react";
import * as path from "path";
import { Playground } from "@divriots/dockit-react/playground/dist/index.js";
import "@divriots/markdown-github/dist/index.css";

const navItemStyle = {
  display: "flex",
  padding: ".5rem 2rem .5rem 0",
  margin: 0,
  textTransform: "capitalize",
} as any;

export const NavHeading = ({ children }) => (
  <h4 style={navItemStyle}>{children}</h4>
);

const NavLink = ({ pkg, ...props }) => {
  const { pages, packages } = props;
  const page = pages.find(
    (p) =>
      p.url === pkg ||
      p.url.startsWith(`${path.join(packages.dir || "", pkg, "doc")}`)
  );
  return page ? (
    <a
      style={{ ...navItemStyle, color: "currentcolor", userSelect: "none" }}
      href={path.join(path.relative(page.url, packages.dir), page.url)}
    >
      {pkg}
    </a>
  ) : (
    <span style={{ ...navItemStyle, opacity: ".3" }}>{pkg}</span>
  );
};

export const NavList = ({ children }) => (
  <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>{children}</ul>
);

export const NavGroup = ({ pkg, ...props }) => {
  const [group, items] = pkg;
  return (
    <div>
      <NavHeading>{group}</NavHeading>
      <NavList>
        {items.map((pkg: string) => (
          <li key={pkg} style={{ padding: 0, margin: 0 }}>
            <NavLink pkg={pkg} {...props} />
          </li>
        ))}
      </NavList>
    </div>
  );
};

const NavBar = ({ pages, packages }) => {
  const childrenProps = { pages, packages };
  return (
    <div>
      {packages.menu?.map((i: any) =>
        typeof i === "string" ? (
          <NavLink key={i} pkg={i} {...childrenProps} />
        ) : (
          <NavGroup key={i} pkg={i} {...childrenProps} />
        )
      )}
    </div>
  );
};

export default ({ __staticProps, ...props }) => {
  const navbarProps = { ...__staticProps, ...props };
  return (
    <MDXProvider components={{ Playground }}>
      <div
        style={{ display: "flex", boxSizing: "border-box" }}
        className="markdown-body"
      >
        <NavBar {...navbarProps} />
        <main>{props.children}</main>
      </div>
    </MDXProvider>
  );
};

// TODO next, previous, inEditor,
