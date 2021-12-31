import { Icon } from "@material-ui/core";
import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import { IMenuItem } from "./types";

const generateMenuItems = (length = 8, name = "Menu"): IMenuItem[] =>
  Array.from(Array(length)).map((_, index) => {
    const subMenuLength = Math.floor(Math.random() * 10 + 1);

    const subMenu =
      name === "Menu" || (name === "Menu Item" && subMenuLength >= 5)
        ? generateMenuItems(subMenuLength, name !== "Menu Item" ? "Menu Item" : "Sub Menu Item")
        : [];

    return {
      displayText: `${name} ${index + 1}`,
      subMenu,
    };
  });

const Menu: React.FC = () => {
  const menuItems = useMemo(() => generateMenuItems(), []);

  return (
    <nav id="menu-wrapper">
      <ul>
        {menuItems.map((menuItem, idx) => (
          <li key={idx}>
            <Link to="#">
              {menuItem.displayText}
              {!!menuItem.subMenu.length && <Icon fontSize="small">expand_more</Icon>}
            </Link>
            {!!menuItem.subMenu.length && (
              <ul>
                {menuItem.subMenu.map((subMenuItem, idx) => (
                  <li key={idx}>
                    <Link to="#">
                      {subMenuItem.displayText}
                      {!!subMenuItem.subMenu.length && <Icon fontSize="small">chevron_right</Icon>}
                    </Link>
                    {!!subMenuItem.subMenu.length && (
                      <ul>
                        {subMenuItem.subMenu.map((subMenuItem, idx) => (
                          <li key={idx}>
                            <Link to="#">{subMenuItem.displayText}</Link>
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

export default React.memo(Menu);
