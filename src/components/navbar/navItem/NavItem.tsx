import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavItem.scss';

type Props = {
  to: string,
  text: string,
  event: any
};

export const NavItem: React.FC<Props> = ({ to, text, event }) => (
  <li className="nav__item">
    <NavLink
      className="nav__links"
      to={to}
      onClick={event}
    >
      {text}
    </NavLink>
  </li>
);
