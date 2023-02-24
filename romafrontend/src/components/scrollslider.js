import "../style/style.css";
import Modal from "./Modal";
import videoback from "../images/videoback.jpg";
import { useState } from "react";
import bg from "../images/ASR.png";
import Trophy from "../images/trophy.jpg";
import stadium from "../images/olympicomap.webp";
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

export default function Scrollslider() {
  const navigate = useNavigate();
  const [view, setView] = useState(false);
  const handleAboutusClick = () => {
    navigate("/about");
  };

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
    <div className="scrollslider_main">
      {/* <Modal view={view} setView={setView} /> */}
      <div className="scrollslider_main_container">
        <div
          className="scrollmain_main_container_row0"
          style={{
            backgroundImage: `url(${stadium})`,
            backgroundSize: `contain`,
            backgroundSize: `fit`,
            backgroundRepeat: `no-repeat`,
            backgroundPositionX: `center`,
            backgroundPositionY: `center`,
          }}
        >
          <div className="scrollmain_main_container_row0_wrapper">
            <h5>WELCOME</h5>
            <div className="scrollmain_main_container_row0_wrapper_colleft">
              <div className="scrollmain_main_container_row0_wrapper_colleft_row">
                <button>AboutUs</button>
              </div>
              <div className="scrollmain_main_container_row0_wrapper_colleft_row">
                <button>Who we are</button>
              </div>
            </div>
            <div className="scrollmain_main_container_row0_wrapper_colright">
              <div className="scrollmain_main_container_row0_wrapper_colright_row">
                {" "}
                <button>
                  I AM ASROMA,our mission is to provide a voice to all AS ROMA
                  supporters to express their views and share their passion.
                </button>
              </div>
              <div className="scrollmain_main_container_row0_wrapper_colright_row">
                {" "}
                <button>
                  We are a family,our bond is our love for AS ROMA ,the best
                  club in the world.
                </button>
              </div>
            </div>
            <div className="scrollmain_main_container_row5">
              <h3>Reasons to join us </h3>
              <div>
                <img />
              </div>
              <div className="scrollmain_main_container_row5_inner">
                <div className="scrollmain_main_container_row5_inner_col">
                  <div className="scrollmain_main_container_row5_inner_col_row">
                    <div>Be one of us</div>
                    <div></div>
                  </div>
                  <div className="scrollmain_main_container_row5_inner_col_row">
                    <div>Share with us</div>
                    <div></div>
                  </div>
                </div>
                <div className="scrollmain_main_container_row5_inner_col">
                  {" "}
                  <div className="scrollmain_main_container_row5_inner_col_row">
                    <div>Meet us </div>
                    <div></div>
                  </div>
                  <div className="scrollmain_main_container_row5_inner_col_row">
                    <div>Experience the joy</div>
                    <div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="scrollmain_main_container_row2">
          {" "}
          <button
            onClick={(e) => {
              handleAboutusClick(e);
            }}
          >
            More About us
          </button>
        </div>
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
                Matchday Live
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
                  handlelatestClick(e);
                }}
              >
                Latest News
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
                {" "}
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
                Shop with us
              </button>
            </div>
          </div>
          <div></div>
        </div>
        <div className="scrollmain_main_container_row2">
          {" "}
          <button
            onClick={(e) => {
              handleLoginClick(e);
            }}
          >
            Join Us
          </button>
        </div>

        <div
          className="scrollmain_main_container_row3"
          style={{
            backgroundImage: `url(${Trophy})`,
            backgroundSize: `fit`,
            backgroundRepeat: `no-repeat`,
            backgroundPositionX: `right`,
            backgroundPositionY: `center`,
          }}
        >
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
                <button></button>
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
                <button></button>
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
                <button></button>
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
        <div className="scrollmain_main_container_row4">
          <div className="scrollmain_main_container_row4_inner">
            <div className="scrollmain_main_container_row4_inner_col1">
              <div className="scrollmain_main_container_row4_inner_col1_part">
                <label>Match preview</label>
                <p>
                  articlensdjbosdjbvhSJDBvjHBDSvjlBDSHvjhDBSvjhDBSvkjSHBDvkjDSHBvjkHSDBvhjbsdvjhbSDvjbSvdbhBdvsh
                </p>
                <div className="scrollmain_main_container_row4_inner_col1_sm">
                  <AiOutlineLike />
                  <FaRegComments />
                  <HiOutlineShare />
                  <FiMoreVertical />
                </div>
              </div>
              <div className="scrollmain_main_container_row4_inner_col1_input">
                <input type="text" placeholder="enter your comments here" />
              </div>
            </div>
            {/* <div className="scrollmainmatch_main_container_row4_col2">
              <video
                autoplay="autoplay"
                controls="all"
                loop="true"
                autoPlay
                muted
                width="250px"
                height="250px"
              >
                <source src={require("../videos/roma.mp4")} type="video/mp4" />
                Your browser does not support HTML video.
              </video>
            </div> */}
          </div>
        </div>
      </div>

      <div className="scrollmain_main_container_row2">
        {" "}
        <button
          onClick={(e) => {
            handleEventsClick(e);
          }}
        >
          More Events
        </button>
      </div>
      
      {/* <div className="buttonsample">
        {" "}
        <button className="buttonanimated"
          onClick={(e) => {
            handleResultsClick(e);
          }}
        >
          More results
        </button>
      </div> */}
      <div className="scrollmain_main_container_row3">
        <button>Recent Events</button>
        <div className="scrollmain_main_container_row3_wrapper">
          <div className="scrollmain_main_container_row3_wrapper_col">
            <div className="scrollmain_main_container_row3_innerleft">
              <div className="scrollmain_main_container_row3_inner_col1">
                <div className="scrollmain_main_container_row3_inner_col1_part">
                  <label>Roma India</label>
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
              >
                <div className="scrollmain_main_container_row3_col2_inner">
                  <div>Date</div>
                  <div>Time</div>
                  <div>Location</div>
                  <button>Readmore</button>
                </div>
                <div className="scrollmain_main_container_row3_col2_inner">
                  <div>Date</div>
                  <div>Time</div>
                  <div>Location</div>
                  <button>Readmore</button>
                </div>
                <div className="scrollmain_main_container_row3_col2_inner">
                  <div>Date</div>
                  <div>Time</div>
                  <div>Location</div>
                  <button>Readmore</button>
                </div>
              </div>
              <button></button>
            </div>

            <div className="scrollmain_main_container_row3_innerright">
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
              <div
                className="scrollmain_main_container_row3_col2"
                style={{
                  backgroundImage: `url(${Matchday})`,
                  width: `100%`,
                }}
              >
                <div className="scrollmain_main_container_row3_col2_inner">
                  <div>Date</div>
                  <div>Time</div>
                  <div>Location</div>
                  <button>Readmore</button>
                </div>
                <div className="scrollmain_main_container_row3_col2_inner">
                  <div>Date</div>
                  <div>Time</div>
                  <div>Location</div>
                  <button>Readmore</button>
                </div>
                <div className="scrollmain_main_container_row3_col2_inner">
                  <div>Date</div>
                  <div>Time</div>
                  <div>Location</div>
                  <button>Readmore</button>
                </div>
              </div>
              <button></button>
            </div>
            <div className="scrollmain_main_container_row3_innerleft">
              <div className="scrollmain_main_container_row3_inner_col1">
                <div className="scrollmain_main_container_row3_inner_col1_part">
                  <label>RomaAmerica</label>
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
              >
                <div className="scrollmain_main_container_row3_col2_inner">
                  <div>Date</div>
                  <div>Time</div>
                  <div>Location</div>
                  <button>Readmore</button>
                </div>
                <div className="scrollmain_main_container_row3_col2_inner">
                  <div>Date</div>
                  <div>Time</div>
                  <div>Location</div>
                  <button>Readmore</button>
                </div>
                <div className="scrollmain_main_container_row3_col2_inner">
                  <div>Date</div>
                  <div>Time</div>
                  <div>Location</div>
                  <button>Readmore</button>
                </div>
              </div>
              <button></button>
            </div>
            <div className="scrollmain_main_container_row3_innerright">
              <div className="scrollmain_main_container_row3_inner_col1">
                <div className="scrollmain_main_container_row3_inner_col1_part">
                  <label>ROMA Afrkica0</label>
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
              >
                <div className="scrollmain_main_container_row3_col2_inner">
                  <div>Date</div>
                  <div>Time</div>
                  <div>Location</div>
                  <button>Readmore</button>
                </div>
                <div className="scrollmain_main_container_row3_col2_inner">
                  <div>Date</div>
                  <div>Time</div>
                  <div>Location</div>
                  <button>Readmore</button>
                </div>
                <div className="scrollmain_main_container_row3_col2_inner">
                  <div>Date</div>
                  <div>Time</div>
                  <div>Location</div>
                  <button>Readmore</button>
                </div>
              </div>
              <button></button>
            </div>
          </div>
        </div>
      </div>
      <div className="scrollmain_main_container_row2">
        {" "}
        <button
          onClick={(e) => {
            handleEventsClick(e);
          }}
        >
          More Events
        </button>
      </div>
    </div>
  );
}
