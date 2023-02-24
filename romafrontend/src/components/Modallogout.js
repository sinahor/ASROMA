import "../style/style.css";
import Pitch from "../images/pitch.png";
import { useNavigate } from "react-router-dom";
export default function Modallogout({ view, setView }) {
  const navigate = useNavigate();
  return (
    <>
      <div className={view ? "modal_outer" : "hidden"}>
        <div className="modal_main">
          {/* <div
            className="modal_main_row1"
            onClick={(e) => {
              setView(view ? false : true);
            }}
          >
            X
          </div> */}
          <div className="modal_main_innercontainer">
            <img src={require("../images/footerlogo.png")} />
            <label>Are you sure you want to logout</label>
            <div className="modal_main_btn">
              <button
                onClick={(e) => {
                  navigate("/");
                }}
              >
            
                    Yes
              </button>
            </div>
            <div className="modal_main_btn">
              <button
                onClick={(e) => {
                  setView(view ? false : true);
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
