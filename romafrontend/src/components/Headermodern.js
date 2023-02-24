import "../style/style.css";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { BiLogInCircle } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

export default function Headermodern() {
  const navigate = useNavigate();
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
    navigate("/matchday");
  };

  const handleTableClick = () => {
    navigate("/table");
  };
  const handlePodcastClick = () => {
    navigate("/podcast");
  };

  const handleHomeClick = () => {
    navigate("/");
  };
  const handleLoginClick = () => {
    navigate("/fanzone");
  };
  return (
    <div>
      {" "}
      <div className="headermodern_main_container">
        <div className="headermodern_main_row1">
          <div className="headermodern_main_row1_col1">
            <button>
              <FaSearch />
            </button>
          </div>
          <div className="headermodern_main_row1_col1_image">
              <img src={require("../images/logo.png")} />
            </div>
          <div className="headermodern_main_row1_col2">
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
            <button>
              <BiLogInCircle />
            </button>
          </div>
        </div>

        <div className="headermodern_main_row2">
  
          <div className="headermodern_main_row2_col">Home</div>
          <div className="headermodern_main_row2_col">Results</div>
          <div className="headermodern_main_row2_col">Podcast</div>
          <div className="headermodern_main_row2_col">Become a member</div>
          
        </div>
      </div>
    </div>
  );
}
