import "../style/style.css";
import Modal from "../components/Modalsignup";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { BiLogInCircle } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Headernew() {
  const navigate = useNavigate();
  const [view, setView] = useState(false);
  const [viewHome, setViewHome] = useState(false);
  const [viewGallery, setViewGallery] = useState(false);
  const [viewLatest, setViewLatest] = useState(false);
  const [viewResults, setViewResults] = useState(false);
  const [viewResultsMens, setViewResultsMens] = useState(false);
  const [viewResultsPrima, setViewResultsPrima] = useState(false);
  const [viewWomens, setViewWomens] = useState(false);
  const [viewMatchday, setViewMatchday] = useState();

  const [selected, setSelected] = useState("");
  // const handleSignInClick = () => {
  //   navigate("/Modal");
  // };

  const handleGalleryClick = () => {
    navigate("/gallery");
  };
  const handleStoreClick = () => {
    navigate("/shop");
  };
  const handleLatestClick = () => {
    navigate("/latest");
  };
  const handleMatchdayClick = () => {
    setViewMatchday(true);
    navigate("/matchday");
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
    <div className="header_main_container">
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
      </div>

      <div className="header_main_row2">
        <div className="header_main_row2_col1">
          <div className="header_main_row2_col1_image">
            <img src={require("../images/logo.png")} />
          </div>
        </div>
        <div className="header_main_row2_col2">
          <ul className="header_main_row2_col2_containerdiv">
            <li>
              <label
                onClick={(e) => {
                  handleHomeClick(e);
                }}
              >
                Home
              </label>
              <ul className={"header_containerdiv_inner"}>
                <li>
                  <label
                    onClick={(e) => {
                      handleMatchdayClick(e);
                    }}
                  >
                    Matchday
                  </label>
                </li>
                <li>
                  <label
                    onClick={(e) => {
                      handleLatestClick(e);
                    }}
                  >
                    Latest News
                  </label>
                  {/* <ul
                    className="header_containerdiv_inner"
                    
                  >
                    <li>Transfers</li>
                    <li>Teamnews</li>
                    <li>Events</li>
                  </ul> */}
                </li>
                <li>
                  <label
                    onClick={(e) => {
                      handleGalleryClick(e);
                    }}
                  >
                    Gallery
                  </label>
                  {/* <ul
                    className="header_containerdiv_inner" 
                  >
                    <li>Matchdays</li>
                    <li>Training</li>
                    <li>Roma fans</li>
                  </ul> */}
                </li>
                <li>
                  <label
                    onClick={(e) => {
                      handleStoreClick(e);
                    }}
                  >
                    Store
                  </label>
                </li>
              </ul>
            </li>
           
            <li>
              <label
                onClick={(e) => {
                  handleTableClick(e);
                }}
              >
                Results
              </label>
              <ul className="header_containerdiv_inner">
                <li>
                  <label>Mens</label>
                  {/* <ul
                   className="header_containerdiv_inner" 
                  >
                    {" "}
                    <li>SerieA</li>
                    <li>Europa League</li>
                    <li>Copa Italia</li>
                  </ul> */}
                </li>
                <li>
                  <label>Primavera</label>
                  {/* <ul
                   className="header_containerdiv_inner" 
                  >
                    {" "}
                    <li>SerieA</li>
                    <li>Europa League</li>
                    <li>Copa Italia</li>
                  </ul> */}
                </li>
                <li>
                  <label>Womens</label>
                  {/* <ul
                    className="header_containerdiv_inner" 
                  >
                    {" "}
                    <li>SerieA</li>
                    <li>Champions League</li>
                    <li>Copa Italia</li>
                  </ul> */}
                </li>
              </ul>
            </li>

            <li>
              <label
                onClick={(e) => {
                  handlePodcastClick(e);
                }}
              >
                Podcast
              </label>
            </li>
            <li>
              <label
                onClick={(e) => {
                  handleSupportClick(e);
                }}
              >
                Become a member
              </label>
            </li>
          </ul>
        </div>
      </div>
      
    </div>
  );
}
