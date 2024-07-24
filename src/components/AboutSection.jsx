import Panel from "./Panel";
import { Link } from "react-router-dom";
import "./AboutSection.css";
import { FaJava, FaSalesforce } from "react-icons/fa6";
import { IoServerOutline } from "react-icons/io5";
import { CiServer } from "react-icons/ci";

const data = [
  {
    title: "Enterprise Java Development",
    text:
      "Harness the power of Java to build robust, scalable, and secure web applications.",
    icon: <FaJava />
  },
  {
    title: "Software Architecture",
    text:
      "Lay a solid foundation for your software projects with our architecture consulting services.",
    icon: <IoServerOutline />
  },
  {
    title: "CRM Integration",
    text:
      "Maximize your customer relationship management capabilities with our CRM integration services.",
    icon: <FaSalesforce />
  },
  {
    title: "API Development",
    text:
      "Enable seamless communication between your systems with our API development and integration services.",
    icon: <CiServer />
  }
];
function AboutSection() {
  return (
    <div className="AboutSection__Container">
      <section className="About__Section">
        <div className="Info">
          <h1 className="Header">Who We Are. </h1>
          <p className="Paragraph">
            Our consultants are industry veterans with extensive experience and
            certifications in their respective fields. We tailor our services to
            meet the specific needs of your business, ensuring maximum impact.
            From initial consultation to ongoing support, we partner with you
            every step of the way to achieve your digital transformation goals.
          </p>

          <h4 className="Subheader">
            {" "}
            Ready to elevate your digital strategy?
          </h4>
          <button
            className="ServicesButton"
            onClick={() => {
              document.getElementById("services").scrollIntoView();
            }}
          >
            Our Services
          </button>
        </div>
        <div className="Avatar__Container">
          <div>
            <img className="Avatar" src={"/images/NAGS.JPG"} />
            <p>Nagarjun Chevula, CEO</p>
          </div>
          <div>
            <img className="Avatar" src={"../src/assets/profile.jpg"} />
            <p>Arnav Chevula, CTO</p>
          </div>
        </div>
      </section>
      <section className="Clients__Container" id="clients">
        <h1 className="Client__Header">Trusted By: </h1>
        <div className="Client__List">
          <img className="Client__Image" src="../src/assets/njcourts3.jpeg" />

          <img className="Client__Image" src="../src/assets/pwclogo.png" />
          <img className="Client__Image" src="../src/assets/ibmlogo2.svg" />

          <img
            className="Client__Image"
            src="https://upload.wikimedia.org/wikipedia/commons/d/d1/BAML_logo.jpg"
          />
          <img
            className="Client__Image"
            src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Tata_Consultancy_Services_Logo.svg"
          />
        </div>
      </section>
      <section className="Panels__Section">
        <section className="Panel__Container" id="services">
          {data.map((element, index) => {
            return <Panel data={element} key={index} />;
          })}
        </section>
      </section>
    </div>
  );
}
export default AboutSection;
