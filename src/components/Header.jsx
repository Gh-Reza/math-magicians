const Header = () => (
  <div className="headerc p-4 w-100 bg-white shadow">
    <div className="container">
      <div className="row">
        <div className="logo-wrapper col">
          <h1>Math Magician</h1>
        </div>
        <div className="menu-wrapper col text-end">
          <ul className="list-inline row justify-content-end gx-4">
            <li className="btn list-inline-item fs-4 col-auto p-2 ps-4 pe-4 border-bottom border-muted border-2 text-muted">Home</li>
            <li className="btn list-inline-item fs-4 col-auto p-2 ps-4 pe-4 border-bottom border-muted border-2 text-muted">Calculator</li>
            <li className="btn list-inline-item fs-4 col-auto p-2 ps-4 pe-4 border-bottom border-muted border-2 text-muted">Quote</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default Header;
