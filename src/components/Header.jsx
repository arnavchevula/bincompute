import Nav from "./Nav";
import "./Header.css";
function Header() {
  return (
    <div className="Header__Container">
      <img className="Logo" src="../src/assets/logo.png" />
      <Nav />
    </div>
  );
}
export default Header;
