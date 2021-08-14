import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header>
      <Link to="/">
        <button className="header-button">World Clock</button>
      </Link>
      <Link to="/crud">
        <button className="header-button">CRUD</button>
      </Link>
    </header>
  );
}
