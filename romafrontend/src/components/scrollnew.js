import "../style/style.css";
import Modal from "./Modal";
import videoback from "../images/videoback.jpg";
import { useState } from "react";
import bg from "../images/ASR.png";
import Matchday from "../images/matchday.jpg";
import Wallpaper from "../images/wallpaper.jpg";
import Latest from "../images/latest.jpg";
import gallery from "../images/gallery.jpg";
import shop from "../images/shop.jpg";
import { useNavigate } from "react-router-dom";
import Score from "../components/score";
import { AiOutlineLike } from "react-icons/ai";
import { FaRegComments } from "react-icons/fa";
import { HiOutlineShare } from "react-icons/hi";
import { FiMoreVertical } from "react-icons/fi";

export default function Scrollmainnew() {
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
    navigate("/fanzone");
    // setView(view ? false : true);
  };
  const handleResultsClick = () => {
    navigate("/results");
  };
  const handleEventsClick = () => {
    navigate("/events");
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
        <div className="scrollmain_main_container_row2">
          {" "}
          <button
            onClick={(e) => {
              handleLoginClick(e);
            }}
          >
            Members Area
          </button>
        </div>

        <div className="scrollmain_main_container_row3">
          {" "}
          <button>
            Featured stories
            andkjvnzkjnvnkapdjbvpkajnvkajnvkpjabdvpkzldkjfbvkzljdbvlkjzbvkjbzdlkvjbzkjcvblkjcb
            klxjzcb klzxjcb klzxjcb kzxjcb zklxjcb kljzxcb
            jbakpdjbvpakjdfbvkpadjfbvkpadjfbvkajdfbv
          </button>
          <div className="scrollmain_main_container_row3_wrapper">
            <div className="scrollmain_main_container_row3_wrapper_col">
              <div className="scrollmain_main_container_row3_innerleft">
                <div className="scrollmain_main_container_row3_inner_col1">
                  <div className="scrollmain_main_container_row3_inner_col1_part">
                    <label>writtenby </label>
                    <p>
                      articlensdjbosdjbvhSJDBvjHBDSvjlBDSHvjhDBSvjhDBSvkjSHBDvkjDSHBvjkHSDBvhjbsdvjhbSDvjbSvdbhBdvsh
                    </p>
                    <div className="scrollmain_main_container_row3_inner_col1_sm">
                      <AiOutlineLike />
                      <FaRegComments />
                      <HiOutlineShare />
                      <FiMoreVertical />
                    </div>
                  </div>
                  <div className="scrollmain_main_container_row3_inner_col1_input">
                    <input type="text" placeholder="enter your comments here" />
                  </div>
                </div>
                <div
                  className="scrollmain_main_container_row3_col2"
                  style={{
                    backgroundImage: `url(${Matchday})`,
                    backgroundSize: `cover`,
                  }}
                ></div>
              </div>
              <div className="scrollmain_main_container_row3_innerright">
                <div className="scrollmain_main_container_row3_inner_col1">
                  <div className="scrollmain_main_container_row3_inner_col1_part">
                    <label>writtenby </label>
                    <p>
                      articlensdjbosdjbvhSJDBvjHBDSvjlBDSHvjhDBSvjhDBSvkjSHBDvkjDSHBvjkHSDBvhjbsdvjhbSDvjbSvdbhBdvsh
                    </p>
                    <div className="scrollmain_main_container_row3_inner_col1_sm">
                      <AiOutlineLike />
                      <FaRegComments />
                      <HiOutlineShare />
                      <FiMoreVertical />
                    </div>
                  </div>
                  <div className="scrollmain_main_container_row3_inner_col1_input">
                    <input type="text" placeholder="enter your comments here" />
                  </div>
                </div>
                <div
                  className="scrollmain_main_container_row3_col2"
                  style={{
                    backgroundImage: `url(${Matchday})`,
                    width: `100%`,
                  }}
                ></div>
              </div>
              <div className="scrollmain_main_container_row3_innerleft">
                <div className="scrollmain_main_container_row3_inner_col1">
                  <div className="scrollmain_main_container_row3_inner_col1_part">
                    <label>writtenby </label>
                    <p>
                      articlensdjbosdjbvhSJDBvjHBDSvjlBDSHvjhDBSvjhDBSvkjSHBDvkjDSHBvjkHSDBvhjbsdvjhbSDvjbSvdbhBdvsh
                    </p>
                    <div className="scrollmain_main_container_row3_inner_col1_sm">
                      <AiOutlineLike />
                      <FaRegComments />
                      <HiOutlineShare />
                      <FiMoreVertical />
                    </div>
                  </div>
                  <div className="scrollmain_main_container_row3_inner_col1_input">
                    <input type="text" placeholder="enter your comments here" />
                  </div>
                </div>
                <div
                  className="scrollmain_main_container_row3_col2"
                  style={{
                    backgroundImage: `url(${Matchday})`,
                    width: `100%`,
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
        <div className="scrollmain_main_container_row2">
          {" "}
          <button
            onClick={(e) => {
              handlelatestClick(e);
            }}
          >
            More stories
          </button>
        </div>
        <div
          className="scrollmain_main_container_row3"
          style={{
            backgroundImage: `url(${videoback})`,
            backgroundSize: `contain`,
            height: `50vh`,
          }}
        >
          <div className="scrollmain_main_container_row3_inner">
            <div className="scrollmain_main_container_row3_inner_col1">
              <div className="scrollmain_main_container_row3_inner_col1_part">
                <label>Match preview</label>
                <p>
                  articlensdjbosdjbvhSJDBvjHBDSvjlBDSHvjhDBSvjhDBSvkjSHBDvkjDSHBvjkHSDBvhjbsdvjhbSDvjbSvdbhBdvsh
                </p>
                <div className="scrollmain_main_container_row3_inner_col1_sm">
                  <AiOutlineLike />
                  <FaRegComments />
                  <HiOutlineShare />
                  <FiMoreVertical />
                </div>
              </div>
              <div className="scrollmain_main_container_row3_inner_col1_input">
                <input type="text" placeholder="enter your comments here" />
              </div>
            </div>
            <div className="scrollmainmatch_main_container_row3_col2">
              <video
                autoplay="autoplay"
                controls="all"
                loop="true"
                autoPlay
                muted
                width="300px"
                height="300px"
              >
                <source src={require("../videos/roma.mp4")} type="video/mp4" />
                Your browser does not support HTML video.
              </video>
            </div>
          </div>
        </div>
      </div>
      <div className="scrollmain_main_container_row2">
        {" "}
        <button
          onClick={(e) => {
            handleResultsClick(e);
          }}
        >
          More results
        </button>
      </div>
    </div>
  );
}
