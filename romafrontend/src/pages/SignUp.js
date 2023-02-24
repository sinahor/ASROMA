import "../style/style.css";
import Header from "../components/Headernew";
import Footer from "../components/Footer";
import { FaFacebook, FaGoogle } from "react-icons/fa";

export default function SignUp() {
  return (
    <>
      <Header />
      <div className="signup_outercontainer">
        <div className="signup_main">
          <div className="signup_main_col1">
            <div className="signup_main_col1_row_image">
              <img src={require("../images/logo.png")} />
            </div>
            <div className="sample_main_col1_part1">
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
            <div className="signup_main_col1_part2">
              <div className="signup_main_col1_row2">
                <button>Create account</button>
              </div>
              <div className="signup_main_col1_row2">
                <button>
                  <FaGoogle />
                  Signup with google
                </button>
              </div>
              <div className="signup_main_col1_row2">
                <button>
                  <FaFacebook />
                  Signup with facebook
                </button>
              </div>
            </div>
          </div>
          <div className="signup_main_col2">
            <img src={require("../images/list.png")} />
            <div className="signup_main_col2_container">
              <div className="signup_main_col2_col1"></div>
              <div className="signup_main_col2_col2"></div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      {/* <div className="signup_outercontainer">
        <div className="signup_main">
          <div className="signup_main_col1">
            <div className="signup_main_col1_row_image">
              <img src={require("../images/logo.png")} />
            </div>
            <div className="signup_main_col1_part1">
              <div className="signup_main_col1_row">
                <label>Email id</label>
                <input type="text" placeholder="Email" />
              </div>
              <div className="signup_main_col1_row">
                <label>UserName</label>
                <input type="text" placeholder="Username" />
              </div>
              <div className="signup_main_col1_row">
                <label>Password</label>
                <input type="password" placeholder="Password" />
              </div>
              <div className="signup_main_col1_row2">
                <input type="checkbox" />
                <label>By Clicking I agree to all terms and condiitons</label>
              </div>
            </div>
            <div className="signup_main_col1_part2">
              <div className="signup_main_col1_row2">
                <button>Create account</button>
              </div>
              <div className="signup_main_col1_row2">
                <button>
                  <FaGoogle />
                  Signup with google
                </button>
              </div>
              <div className="signup_main_col1_row2">
                <button>
                  <FaFacebook />
                  Signup with facebook
                </button>
              </div>
            </div>
          </div>
          <div className="signup_main_col2">
            <img src={require("../images/list.png")} />
            <div className="signup_main_col2_container">
              <div className="signup_main_col2_col1"></div>
              <div className="signup_main_col2_col2"></div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}
