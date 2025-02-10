import { NavLink } from "react-router-dom";

export default function Header() {
    return (
    <header>
        <div>
        <nav>
          <ul>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
          </ul>
          <ul>
            <li>
            <NavLink to="/posts">Posts</NavLink>
            </li>
          </ul>
          <ul>
            <li>
            <NavLink to="/aboutus">Chi siamo</NavLink>
            </li>
          </ul>
        </nav>
        </div>
      </header>
    )
}