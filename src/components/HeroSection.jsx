import "./HeroSection.css";
function HeroSection() {
  return (
    <div className="Box__Container">
      <h1 className="Header__Text">Transforming Digital Experiences</h1>
      <p className="Hero__Text">
        We are dedicated to providing unparalleled expertise in enterprise Java
        web development, software architecture, and a suite of modern
        technologies. Our boutique consulting firm brings a wealth of experience
        and innovation to every project, ensuring that your digital
        transformation journey is seamless and impactful.
      </p>
      <button
        className="Button__Hero"
        onClick={() => {
          document.getElementById("subhero").scrollIntoView();
        }}
      >
        Learn More
      </button>
    </div>
  );
}
export default HeroSection;
