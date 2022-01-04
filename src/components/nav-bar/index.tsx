import React, { useMemo } from "react";
import { IMenuItem, NavBarItems } from "./types";
import { Icon } from "@material-ui/core";
import { Link } from "react-router-dom";

const generateMenuItems = (length = 8, name = "Menu"): IMenuItem[] =>
  Array.from(Array(length)).map((_, index) => {
    const subMenuLength = Math.floor(Math.random() * 10 + 1);

    const subMenu =
      name === "Menu" || (name === "Menu Item" && subMenuLength >= 5)
        ? generateMenuItems(
            subMenuLength,
            name !== "Menu Item" ? "Menu Item" : "Sub Menu Item"
          )
        : [];

    return {
      displayText: `${name} ${index + 1}`,
      subMenu,
    };
  });

const NavBar: React.FC = () => {
  return (
    <nav className="menu-wrapper">
      <ul>
        {NavBarItems.map((menuItem, idx) => (
          <li key={idx}>
            <Link className="hover:text-indigo-700" to="#">
              {menuItem.displayText}
              {!!menuItem.subMenu?.length && (
                <Icon fontSize="small">expand_more</Icon>
              )}
            </Link>
            {!!menuItem.subMenu?.length && (
              <ul>
                {menuItem.subMenu?.map((subMenuItem, idx) => (
                  <li key={idx}>
                    <Link className="hover:text-indigo-400" to="#">
                      {subMenuItem.displayText}
                      {!!subMenuItem.subMenu?.length && (
                        <Icon fontSize="small">chevron_right</Icon>
                      )}
                    </Link>
                    {!!subMenuItem.subMenu?.length && (
                      <ul>
                        {subMenuItem.subMenu?.map((subMenuItem, idx) => (
                          <li key={idx}>
                            <Link className="hover:text-indigo-400" to="#">
                              {subMenuItem.displayText}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default React.memo(NavBar);
