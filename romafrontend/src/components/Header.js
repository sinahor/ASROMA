import "../style/style.css";
import Modal from "../components/Modalsignup";
// import logo from "../images/AS roma logo.png";
// import list from "../images/list.png";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { BiLogInCircle } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const navigate = useNavigate();
  const [view, setView] = useState(false);
  // const handleSignInClick = () => {
  //   navigate("/Modal");
  // };
  const handleAboutusClick = () => {
    navigate("/about");
  };
  const handleTableClick = () => {
    navigate("/table");
  };
  const handlePodcastClick = () => {
    navigate("/podcast");
  };

  const handleSupportClick = () => {
    setView(view ? false : true);
  };
  const handleHomeClick = () => {
    navigate("/");
  };
  const handleLoginClick = () => {
    navigate("/fanzone");
  };

  return (
    // <div>
    //   <div className="main_container">
    //     <div className="header_main" >
    //       <div className="header_main_col1">
    //         <div className="header_main_col1_logo"><img src={logo}/></div>
    //         <div>
    //           <div className="header_main_col1_row1">I</div>
    //           <div className="header_main_col1_row2">ROMAN</div>
    //         </div>
    //       </div>
    //       <div><img src={list}/></div>
    //       <div className="header_main_col2">
    //         <div className="header_main_col2_row1"></div>
    //         <div className="header_main_col2_row2"><button>SignUp</button></div>
    //       </div>
    //     </div>
    //     <div className="Header_video"><video></video></div>
    //   </div>
    // </div>
    <div className="Header_main_container">
      <Modal view={view} setView={setView} />
      <div className="header_main_row1">
        <div className="header_main_row1_col1">
          <button>
            <FaSearch />
          </button>
        </div>
        <div className="header_main_row1_col2">
          <button>
            <FaTwitter />
          </button>
          <button>
            <FaFacebook />
          </button>
          <button>
            <FaInstagram />
          </button>
          <button>
            <FaYoutube />
          </button>
          <button
            onClick={(e) => {
              handleLoginClick(e);
            }}
          >
            <BiLogInCircle />
          </button>
        </div>
        {/* <div className="header_main_row1_col3">
          <button onClick={(e)=>{handleSignInClick(e)}}>LogIn</button>
          
        </div> */}
      </div>

      <div className="header_main_row2">
        <div className="header_main_row2_col1">
          <div className="header_main_row2_col1_image">
            <img src={require("../images/logo.png")} />
          </div>
        </div>
        <div className="header_main_row2_col2">
          <div className="containerdiv">
            {/* <ul>
              <li>
                Home
                <ul>
                  <li>Matchday</li>
                  <li></li>
                  <li>Gallery</li>
                  <li>Store</li>
                </ul>
              </li>
              <li>AboutUs</li>
              <li>
                Results
                <ul>
                  <li>
                    <label>Mens</label>
                    <ul>
                      {" "}
                      <li>SerieA</li>
                      <li>Europa League</li>
                      <li>Copa Italia</li>
                    </ul>
                  </li>
                  <li>
                    <label>
                      Primavera
                      <ul>
                        {" "}
                        <li>SerieA</li>
                        <li>Europa League</li>
                        <li>Copa Italia</li>
                      </ul>
                    </label>
                  </li>
                  <li>
                    <label>
                      Womens
                      <ul>
                        {" "}
                        <li>SerieA</li>
                        <li>Europa League</li>
                        <li>Copa Italia</li>
                      </ul>
                    </label>
                  </li>
                </ul>
              </li>

              <li>Podcast</li>
              <li>Become a member</li>
            </ul> */}
            <button
              onClick={(e) => {
                handleHomeClick(e);
              }}
            >
              Home
            </button>
            <div className="menucontainer">
              <ul>
                <li>Menu One</li>
                <li>Menu One</li>
                <li>Menu One</li>
                <li>Menu One</li>
              </ul>
            </div>
          </div>
          <button
            onClick={(e) => {
              handleAboutusClick(e);
            }}
          >
            Aboutus
          </button>
          <button
            onClick={(e) => {
              handleTableClick(e);
            }}
          >
            Results&Table
          </button>
          <button
            onClick={(e) => {
              handlePodcastClick(e);
            }}
          >
            Podcast
          </button>
          <button
            onClick={(e) => {
              handleSupportClick(e);
            }}
          >
            Become a Member
          </button>
        </div>
      </div>
    </div>
  );
}
