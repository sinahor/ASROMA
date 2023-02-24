import "../style/style.css";
import Matchday from "../images/matchday.jpg";
import Pitch from "../images/pitch.png"
import { useNavigate } from "react-router-dom";
export default function Modal({ view, setView }) {
  const navigate = useNavigate();
  return (
    <>
      <div className={view ? "modal_outer" : "hidden"}>
        <div className="modal_main">
          <div
            className="modal_main_row1"
            onClick={(e) => {
              setView(view ? false : true);
            }}
          >
            X
          </div>
          <div
            className="modal_main_innercontainer"
            style={{
              backgroundImage: `url(${Pitch})`,
            }}
          >
            <img src={require("../images/footerlogo.png")} />
            
            <div className="modal_main_btn">
              <button
                onClick={(e) => {
                  navigate("/exclusives");
                }}
              >
                Exclusives
              </button>
            </div>
            <div className="modal_main_btn">
              <button
                onClick={(e) => {
                  navigate("/home");
                }}
              >
                Your recent activity
              </button>
            </div>
            <div className="modal_main_btn">
              <button
                onClick={(e) => {
                  navigate("/blog");
                }}
              >
                Blog
              </button>
            </div>
            <div className="modal_main_btn">
              <button
                onClick={(e) => {
                  navigate("/shop");
                }}
              >
                Dealsforyou 
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
