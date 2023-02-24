import "../style/style.css";
import Modal from "./Modal";
import { useState } from "react";
import bg from "../images/ASR.png";
import Matchday from "../images/matchday.jpg";
import Latest from "../images/latest.jpg";
import gallery from "../images/gallery.jpg";
import shop from "../images/shop.jpg";
import { useNavigate } from "react-router-dom";

export default function Scrollmain() {
  const navigate = useNavigate();
  const [view, setView] = useState(false);

  const handleLiveClick = () => {
    navigate("/matchday");
  };
  const handlelatestClick = () => {
    navigate("/latest");
  };
  const handleGalleryClick = () => {
    navigate("/gallery");
  };
  const handleShopClick = () => {
    navigate("/shop");
  };
  const handleLoginClick = () => {
    navigate('/fanzone')
    // setView(view ? false : true);
  };
  return (
   
      <div className="scrollmain_main">
        {/* <Modal view={view} setView={setView} /> */}
        <div className="scrollmain_main_container">
          <div className="scrollmain_main_container_row1">
            <div className="scrollmain_main_container_col1">
              <div
                className="scrollmain_main_container_col1_row"
                style={{
                  backgroundImage: `url(${Matchday})`,
                }}
              >
                <div className=" scrollmain_main_container_col3_row_btn">
                  <button
                    onClick={(e) => {
                      handleLiveClick(e);
                    }}
                  >
                    Matchday Live
                  </button>
                </div>
              </div>
              <div
                className="scrollmain_main_container_col1_row"
                style={{
                  backgroundImage: `url(${Latest})`,
                }}
              >
                <div className=" scrollmain_main_container_col3_row_btn">
                  <button
                    onClick={(e) => {
                      handlelatestClick(e);
                    }}
                  >
                    Latest News
                  </button>
                </div>
              </div>
            </div>

            <div className="scrollmain_main_container_col3">
              <div
                className="scrollmain_main_container_col3_row"
                style={{
                  backgroundImage: `url(${gallery})`,
                }}
              >
                <div className=" scrollmain_main_container_col3_row_btn">
                  <button
                    onClick={(e) => {
                      handleGalleryClick(e);
                    }}
                  >
                    {" "}
                    Gallery
                  </button>
                </div>
              </div>
              <div
                className="scrollmain_main_container_col3_row"
                style={{
                  backgroundImage: `url(${shop})`,
                }}
              >
                <div className=" scrollmain_main_container_col3_row_btn">
                  <button
                    onClick={(e) => {
                      handleShopClick(e);
                    }}
                  >
                    Shop with us
                  </button>
                </div>
              </div>
              <div></div>
            </div>
          </div>

          <button
            onClick={(e) => {
              handleLoginClick(e);
            }}
          >
            Members Area
          </button>
        </div>
      </div>
   
  );
}
