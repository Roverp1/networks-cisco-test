import { Link } from "react-router-dom";

import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <ul className="header__list">
        <li className="header__list-item">
          <Link to={"/piksa"}>PiKSA</Link>
        </li>
        <li className="header__list-item">
          <Link to={"/prog-funk"}>Prog. Funk.</Link>
        </li>
        <li className="header__list-item">
          <Link to={"/jipp"}>JiPP</Link>
        </li>
        <li className="header__list-item header__list-item--pw">
          <Link to={"/pw"}>PW</Link>
        </li>
        <li className="header__list-item header__list-item--pip">
          <Link to={"/pip"}>PIP</Link>
        </li>
        <li className="header__list-item header__list-item--bdia">
          <Link to={"/bdia"}>BDIA</Link>
        </li>
        <li className="header__list-item header__list-item--jee">
          <Link to={"/jee"}>JEE</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
