import "../style/style.css";
// import logo from "../images/AS roma logo.png";
// import list from "../images/list.png";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { BiLogOutCircle } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Modallogout from "./Modallogout";
export default function Headermember() {
  const navigate = useNavigate();
  const [view, setView] = useState(false);
  const [viewMatchday, setViewMatchday] = useState();

  const handleForumClick = () => {
    navigate("/forum");
  };
  const handleMatchdayClick = () => {
    setViewMatchday(false);
    navigate("/matchday");
  };
  const handleGalleryClick = () => {
    navigate("/gallery");
  };
  const handleExclusivesClick = () => {
    navigate("/exclusives");
  };
  const handlePodcastClick = () => {
    navigate("/podcast");
  };
  const handleActivitiesClick = () => {
    navigate("/activities");
  };

  const handleMyStoreClick = () => {
    navigate("/shop");
  };
  const handleHomeClick = () => {
    navigate("/home");
  };
  const handleExitClick = () => {
    // navigate("/")//;
    setView(view ? false : true);
  };

  return (
    <>
      {/* <Modallogout view={view} setView={setView} />
    <div className="Header_main_container">
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
              handleExitClick(e);
            }}
          >
            <BiLogOutCircle />
          </button>
        </div>
        {/* <div className="header_main_row1_col3">
          <button onClick={(e)=>{handleSignInClick(e)}}>LogIn</button>
          
        </div> 
          </div>

      <div className="header_main_row2">
        <div className="header_main_row2_col1">
          <div className="header_main_row2_col1_image">
            <img src={require("../images/logo.png")} />
          </div>
        </div>
        <div className="header_main_row2_col2">
          <button
            onClick={(e) => {
              handleHomeClick(e);
            }}
          >
            MyHome
          </button>
          <button
            onClick={(e) => {
              handleExclusivesClick(e);
            }}
          >
            MyExclusives
          </button>
          <button
            onClick={(e) => {
              handleMyStoreClick(e);
            }}
          >
            MyCart
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
              handleForumClick(e);
            }}
          >
            Forum
          </button>
        </div>
      </div>
    </div> */}

      <div className="header_main_container">
        <Modallogout view={view} setView={setView} />
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
                handleExitClick(e);
              }}
            >
              <BiLogOutCircle />
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
                  My Home
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
                    <label>Results</label>
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
                        handleActivitiesClick(e);
                      }}
                    >
                      My Activities
                    </label>
                  </li>
                </ul>
              </li>
              <li>
                <label
                  onClick={(e) => {
                    handleMyStoreClick(e);
                  }}
                >
                  My Cart
                </label>
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
                    handleForumClick(e);
                  }}
                >
                  Forum
                </label>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
