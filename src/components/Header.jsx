import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header>
      <Link to="/">
        <button className="header-button">Cards</button>
      </Link>
      <Link to="/decomposition">
        <button className="header-button">Decomposition</button>
      </Link>
      <Link to="/collapse">
        <button className="header-button">Collapse</button>
      </Link>
    </header>
  );
}
