import { NavLink } from "react-router-dom";

export default function Header() {
    return (
    <header className="container">
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
          <ul>
            <li>
                <button className="cnt-btn">Contact Us</button>
            </li>
          </ul>
        </nav>
        </div>
      </header>
    )
}