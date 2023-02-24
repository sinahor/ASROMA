import "../style/style.css";
import Modal from "./Modal";
import { useState } from "react";
import bg from "../images/ASR.png";
import Matchday from "../images/matchday.jpg";
import Latest from "../images/latest.jpg";
import gallery from "../images/gallery.jpg";
import shop from "../images/shop.jpg";
import { useNavigate } from "react-router-dom";

export default function Scrollmainmember() {
  const navigate = useNavigate();

  const handleLiveClick = () => {
    navigate("/matchday");
  };
  const handleActivitiesClick = () => {
    navigate("/activities");
  };
  const handleGalleryClick = () => {
    navigate("/gallery");
  };
  const handleShopClick = () => {
    navigate("/shop");
  };
  const handleLoginClick = () => {
    navigate("/fanzone");
  };
  return (
    <div className="scrollmain_main">
      <div className="scrollmain_main_container">
        <div className="scrollmain_main_container_row1">
          <div
            className="scrollmain_main_container_row1_col"
            style={{
              backgroundImage: `url(${Matchday})`,
            }}
          >
            <div className=" scrollmain_main_container_row1_col_btn">
              <button
                onClick={(e) => {
                  handleLiveClick(e);
                }}
              >
                Matchday
              </button>
            </div>
          </div>
          <div
            className="scrollmain_main_container_row1_col"
            style={{
              backgroundImage: `url(${Latest})`,
            }}
          >
            <div className=" scrollmain_main_container_row1_col_btn">
              <button
                onClick={(e) => {
                  handleActivitiesClick(e);
                }}
              >
                MyActivities
              </button>
            </div>
          </div>

          <div
            className="scrollmain_main_container_row1_col"
            style={{
              backgroundImage: `url(${gallery})`,
            }}
          >
            <div className=" scrollmain_main_container_row1_col_btn">
              <button
                onClick={(e) => {
                  handleGalleryClick(e);
                }}
              >
                Gallery
              </button>
            </div>
          </div>
          <div
            className="scrollmain_main_container_row1_col"
            style={{
              backgroundImage: `url(${shop})`,
            }}
          >
            <div className=" scrollmain_main_container_row1_col_btn">
              <button
                onClick={(e) => {
                  handleShopClick(e);
                }}
              >
                Recommendations
              </button>
            </div>
          </div>
          <div></div>
        </div>

        {/* <button
            onClick={(e) => {
              handleLoginClick(e);
            }}
          >
            Members Area
          </button> */}
      </div>
    </div>
  );
}
