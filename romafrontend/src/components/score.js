import "../style/style.css";
export default function score() {
  return (
    <div>
      {" "}
      <div className="score_container">
        <div className="score_main">
          <div className="score_main_header">Next Match</div>
          <div className="score_main_header_score">
            <div className="score_main_header_score_comp">Competition</div>
            <div className="score_main_header_score_date">Date and time</div>
            <div className="score_main_header_teams">
              <div className="score_main_header_teams_parts">
                <img src={require("../images/teamemblems/lazio.jpg")} />
                <p>lazio</p>
              </div>
              <div>
                <p>V</p>
              </div>
              <div className="score_main_header_teams_parts">
                <img src={require("../images/teamemblems/milan.jpg")} />
                <p>Milan</p>
              </div>
            </div>
            <div className="score_main_footer">Live score</div>
          </div>
        </div>
      </div>
    </div>
  );
}
