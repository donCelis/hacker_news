import "../styles/components/_header.scss";
import logo_reign from "../assets/logo-sm.png";

const Header = () => {
  return (
    <header className="header header-shadow">
      <div className="container d-flex justify-content-between">
        <h1 className="logo">hacker news</h1>
        <a target="_blank" href="https://www.reign.cl/es/">
          <figure>
            <img src={logo_reign} alt="La tecnología es nuestro reino" />
          </figure>
        </a>
      </div>
    </header>
  );
};

export default Header;
