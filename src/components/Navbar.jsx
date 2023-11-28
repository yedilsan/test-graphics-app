import "./header.css";

const Navbar = () => {
  return (
    <>
      <header className="header">
        <div className="header__wrapper">
          <a href="#">amCharts 5</a>
          <nav>
            <ul className="menu">
              <li className="menu__item">
                <a href="#">Column & Bar</a>
              </li>
              <li className="menu__item">
                <a href="#">Line & Area</a>
              </li>
              <li className="menu__item">
                <a href="#">Pie & Donut</a>
              </li>
              <li className="menu__item">
                <a href="#">XY & Bubble</a>
              </li>
              <li className="menu__item">
                <a href="#">Maps</a>
              </li>
              <li className="menu__item">
                <a href="#">Radar & Polar</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
