import Nav from "./Nav";
import "./Header.css";
function Header() {
  return (
    <div className="Header__Container">
      <img className="Logo" src="../../images/logo.png" />
      <Nav />
    </div>
  );
}
export default Header;
