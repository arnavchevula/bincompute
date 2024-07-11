import "./SubHero.css";
function SubHero() {
  return (
    <section className={"SubHero__Container"} id="subhero">
      <div className="RowSubHero">
        <div className="SubHero">
          <h1>Binary Computing.</h1>
          <p>
            We deliver transformative products that will increase user
            satisfaction and business value for our numerous clients. Our
            expertise spans a wide range of technologies and services, ensuring
            that we can meet the unique needs of your organization.{" "}
          </p>
          <button
            className="Button__SubHero"
            onClick={() => {
              document.getElementById("banner").scrollIntoView();
            }}
          >
            See Our Process
          </button>
        </div>
      </div>
    </section>
  );
}
export default SubHero;
