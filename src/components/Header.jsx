import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <header className="header">
            <div className="logo">
                <img src="public/img/logo-blog.png" alt="Food Blog Logo" />
            </div>
            <nav>
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/posts">Posts</NavLink></li>
                    <li><NavLink to="/aboutus">Chi siamo</NavLink></li>
                    <li><button className="cnt-btn">Contact Us</button></li>
                </ul>
            </nav>
        </header>
    );
}
