const HeaderComponent = () => {
  return (
    <>
      <header>
        <div className="container">
          <img
            className="dot-group"
            src="./img/dot-group-svg.png"
            alt="Decorative dots"
          />
          <nav className="header">
            <a
              href="#"
              className="header__logo-link">
              <img
                className="header__logo"
                src="./img/Logo-svg.svg"
                alt="YourBanK logo"
              />
              <img
                className="header__text-logo"
                src="./img/YourBanK-logo-svg.svg"
                alt="YourBanK text logo"
              />
            </a>
            <ul className="header__list">
              <li className="header__item">
                <a
                  className="header__link"
                  href="#">
                  Home
                </a>
              </li>
              <li className="header__item">
                <a
                  className="header__link"
                  href="#">
                  Careers
                </a>
              </li>
              <li className="header__item">
                <a
                  className="header__link"
                  href="#">
                  About
                </a>
              </li>
              <li className="header__item">
                <a
                  className="header__link"
                  href="#">
                  Security
                </a>
              </li>
            </ul>
            <div className="header__form-container">
              <button
                className="header__sign-button"
                id="signup-toggle">
                Sign Up
              </button>
              <button
                className="header__log-button active"
                id="login-toggle">
                Log In
              </button>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default HeaderComponent;
