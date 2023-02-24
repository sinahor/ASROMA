import "../style/style.css";

export default function field() {
  return (
    <div className="field_container">
      <div className="field_main">
        <div className="field_main_col1"></div>
        <div className="field_main_col2"></div>
      </div>
      <div className="field_inlay">
        <img src={require("../images/pitch.png")} />
      </div>
    </div>
  );
}
