import "../style/style.css";
import Match from "../images/match.jpg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
export default function Modalmatchday({viewMatchday,setViewMatchday}) {
  const navigate = useNavigate();
  // const [viewMatchday, setViewMatchday] = useState(true)
  return (
    <>
      <div className={viewMatchday ? "modalmatchday_outer" : "hidden"}>
        <div className="modalmatchday_main">
          <div
            className="modalmatchday_main_row1"
            onClick={(e) => {
              setViewMatchday(viewMatchday ? false : true);
            }}
          >
            X
          </div>
          <div
            className="modalmatchday_main_innercontainer"
            style={{
              backgroundImage: `url(${Match})`,
              height: `100vh`,
              width: `100vw`,
            }}
          >
            <button
              onClick={(e) => {
                navigate("/fanzone");
              }}
            >
              Member Entry
            </button>
            <button
              onClick={(e) => {
                navigate("/signup");
              }}
            >
              Proceed to Signup
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
