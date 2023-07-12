import { Link } from 'react-router-dom';

const Header = () => (
  <div className="headerc p-4 w-100 bg-white shadow">
    <div className="container">
      <div className="row">
        <div className="logo-wrapper col">
          <h1>Math Magician</h1>
        </div>
        <div className="menu-wrapper col text-end">
          <ul className="list-inline row justify-content-end gx-4">
            <li className=" list-inline-item fs-4 col-auto p-2 me-4 border-bottom border-muted border-2">
              <Link to="/" className="text-decoration-none text-muted">Home</Link>
            </li>
            <li className="list-inline-item fs-4 col-auto p-2 me-4 border-bottom border-muted border-2">
              <Link to="calculator" className="text-decoration-none text-muted">Calculator</Link>
            </li>
            <li className="list-inline-item fs-4 col-auto p-2 me-4 border-bottom border-muted border-2">
              <Link to="quote" className="text-decoration-none text-muted">Quote</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default Header;
