import "../style/style.css";
import { useNavigate } from "react-router-dom";
import { FaFacebook, FaGoogle } from "react-icons/fa";

export default function Modalsignup({ view, setView }) {
  const navigate = useNavigate();
  return (
    <div className={view ? "modalsignup_outercontainer" : "hidden"}>
      <div className="modalsignup_main">
        <div
          onClick={(e) => {
            setView(view ? false : true);
          }}
        >
          <label>X</label>
        </div>
        <div className="modalsignup_main_inner">
          <div className="modalsignup_main_col1">
            <div className="modalsignup_main_col1_row_image">
              <img src={require("../images/logo.png")} />
            </div>
            <div className="sample_main_col1_part1">
              <div className="sample_main_col1_part1_row1">
                <div className="sample_main_col1_row">
                  <input type="text" required="required" />{" "}
                  <span>FirstName</span>
                  <i></i>
                </div>
                <div className="sample_main_col1_row">
                  <input type="text" required="required" />{" "}
                  <span>LastName</span>
                  <i></i>
                </div>
              </div>
              <div className="sample_main_col1_row">
                <input type="text" required="required" /> <span>Email id</span>
                <i></i>
              </div>
              <div className="sample_main_col1_row">
                <input type="text" required="required" />
                <span>UserName</span>
                <i></i>
              </div>
              <div className="sample_main_col1_row">
                <input type="password" required="required" />
                <span>Password</span>
                <i></i>
              </div>
              <div className="sample_main_col1_row2">
                <input type="checkbox" />
                <span>By Clicking I agree to all terms and condiitons</span>
              </div>
            </div>
            <div className="modalsignup_main_col1_part2">
              <div className="modalsignup_main_col1_row2">
                <button
                  onClick={(e) => {
                    navigate("/fanzone");
                  }}
                >
                  Create account
                </button>
              </div>
              <div className="modalsignup_main_col1_row2">
                <button>
                  <FaGoogle />
                  Signup with google
                </button>
              </div>
              <div className="modalsignup_main_col1_row2">
                <button>
                  <FaFacebook />
                  Signup with facebook
                </button>
              </div>
            </div>
          </div>
          <div className="modalsignup_main_col2">
            <img src={require("../images/pellegrini.webp")} />
            <div className="modalsignup_main_col2_container">
              <div className="modalsignup_main_col2_col1"></div>
              <div className="modalsignup_main_col2_col2"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
