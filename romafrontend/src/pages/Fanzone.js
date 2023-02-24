import "../style/style.css";
import Header from "../components/Headernew";
import Ad from "../components/Ad";
import Footer from "../components/Footer.js";
import Exclusive from "../components/Exclusive";
import Latestnoimg from "../components/Latestnoimg";
import Captcha from "../images/captcha.png";
import { useNavigate } from "react-router-dom";
import Modal from "../components/Modalsignup";
import { useState } from "react";

export default function Fanzone() {
  const navigate = useNavigate();
  const [view, setView] = useState(false);
  const handleLoginClick = () => {
    navigate("/home");
  };
  const handleMemberClick = () => {
    //navigate("/signup")//;
    setView(view ? false : true);
  };

  return (
    <>
      
        <Header />
        <div className="allpage_outer">
          <Modal view={view} setView={setView} />
          <div className="allpage_main">
            <div className="allpage_main_col1">
              <div className="fanzone_main_col1_part1">
                <div className=" fanzone_main_col1_part1_col1">
                  <div className="fanzone_main_col1_row">
                    {/* <label>UserName</label> */}
                    <input type="text" required="required" />
                    <span>Username</span>
                    <i></i>
                  </div>
                  <div className="fanzone_main_col1_row">
                    {/* <label>Password</label> */}
                    <input type="password" required="required" />
                    <span>Password</span>
                    <i></i>
                  </div>

                  <div className="fanzone_main_col1_row2">
                    <input type="checkbox" />
                    <label>
                      By Clicking I agree to all terms and conditons
                    </label>
                  </div>
                  <div className="fanzone_main_col1_row">
                    <button
                      onClick={(e) => {
                        handleLoginClick(e);
                      }}
                    >
                      LogIn
                    </button>
                  </div>
                  <div className="fanzone_main_col1_row">
                    <button
                      onClick={(e) => {
                        handleMemberClick(e);
                      }}
                    >
                      Become a Member
                    </button>
                  </div>
                </div>
                <div className=" fanzone_main_col1_part1_col2">
                  <label>Please check box to proceed</label>
                  <div className=" fanzone_main_col1_part1_col2_inner">
                    <div className=" fanzone_main_col1_part1_col2_inner_col1">
                      <input type="checkbox" />
                      <label>Im not a Robot</label>
                    </div>
                    <div className=" fanzone_main_col1_part1_col2_inner_col2">
                      <img src={require("../images/captcha.png")} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="fanzone_main_container_col1_part2">
                <Exclusive />
              </div>
            </div>

            <div className="allpage_main_col2">
              <div className="fanzone_main_container_col2_row">
                <Latestnoimg />
              </div>
              <div className="fanzone_main_container_col2_row">
                
                <Ad />
              </div>
            </div>
          </div>
        </div>
        <Footer />
    
    </>
  );
}
