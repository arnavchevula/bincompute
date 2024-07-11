import { FaSquareTwitter } from "react-icons/fa6";
import { BiLogoGmail, BiLogoGithub } from "react-icons/bi";
import "./Footer.css";

const data = [
  {
    icon: <FaSquareTwitter style={{ transform: "none" }} />,
    url: "https://twitter.com"
  },
  {
    icon: <BiLogoGmail style={{ transform: "none" }} />,
    url: "https://gmail.com"
  },
  {
    icon: <BiLogoGithub style={{ transform: "none" }} />,
    url: "https://github.com"
  }
];

const Footer = color => {
  return (
    <div className="Footer__Wrapper" style={{ background: color.color }}>
      <ul className="Social__List">
        {data.map((value, index) => {
          return (
            <li style={{ padding: "10px", margin: "10px" }}>
              <a className="Icon__Footer" href={value.url}>
                {value.icon}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Footer;
