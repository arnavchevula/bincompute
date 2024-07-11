import "./Panel.css";
function Panel({ data }) {
  return (
    <div className="Panel">
      {data.icon}
      <h2 className="Panel__Title">{data.title}</h2>
      <p className="Panel__Text">{data.text}</p>
    </div>
  );
}

export default Panel;
