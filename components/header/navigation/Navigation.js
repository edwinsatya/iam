import Link from "next/link";

export default function Navigation() {
  return (
    <header id="header-navigation" className="sticky top-0 z-50 hidden lg:flex">
      <nav id="navigation_intro" className="classNavigationFromPath">
        <Link to="/" className="logo">
          <a href="/home">Logo</a>
        </Link>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#home">Resume</a>
          </li>
          <li>
            <a href="#home">Projects</a>
          </li>
          <li>
            <a href="#home">About</a>
          </li>
          <li>
            <a href="/home">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
