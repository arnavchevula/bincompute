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

const links = [
  {
    heading: "Company",
    links: ["Home", "About", "Career"]
  },
  {
    heading: "Articles",
    links: ["Blog", "Journal", "RSS Feed"]
  },
  {
    heading: "Resources",
    links: ["Documentation", "Support", "Status"]
  },
  {
    heading: "Contact",
    links: ["GitHub", "Twitter", "Community"]
  },
  {
    heading: "Legal",
    links: [
      "Security",
      "Privacy Policy",
      "Terms of Service",
      "Acceptable Use Policy"
    ]
  }
];
const Footer = color => {
  return (
    <div className="Footer__Wrapper" style={{ background: color.color }}>
      <div className="Footer__List">
        {/* <span>Company</span>
          <div className="Footer__Links"></div>
          <span>About</span>
          <span>Contact</span>
          <span>Careers</span> */}

        {links.map(element => {
          return (
            <div className="Footer__Section">
              <h3>{element.heading}</h3>
              <div className="Link__List">
                {element.links.map(link => {
                  return <a>{link}</a>;
                })}
              </div>
            </div>
          );
        })}
      </div>
      <ul className="Social__List">
        <div className="Copyright">
          <p>2024 COPYRIGHT @ Binary Computing, Inc</p>
        </div>
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
