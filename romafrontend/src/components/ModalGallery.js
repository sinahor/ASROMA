import "../style/style.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import gallery from "../images/gallery.jpg";
import { AiOutlineLike } from "react-icons/ai";
import { FaRegComments } from "react-icons/fa";
import { HiOutlineShare } from "react-icons/hi";
import { FiMoreVertical } from "react-icons/fi";

export default function Modalgallery({ view, setView }) {
  const [viewText, setViewText] = useState(false);

  return (
    <>
      <div className={view ? "modalgallery_outer" : "hidden"}>
        <div className="modalgallery_main">
          <div
            className="modalgallery_main_row1"
            onClick={(e) => {
              setView(view ? false : true);
            }}
          >
            X
          </div>
          <div className="modalgallery_main_innercontainer">
            <div className="gallery_parts">
              <h3>Matchday</h3>
              <div className="gallery_parts_row">
                <div className="gallery_parts_row_items">
                  <label>CurvaNord</label>
                  <img />
                </div>
                <div className="gallery_parts_row_items">
                  <label>CurvaSud</label>
                  <img />
                </div>
                <div className="gallery_parts_row_items">
                  <label>Tribuna Tevere</label>
                  <img />
                </div>
                <div className="gallery_parts_row_items">
                  <label>Tribuna Monte</label>
                  <img />
                </div>
              </div>
              <div className="gallery_parts_tile">
                <div className="gallery_parts_tile_col">
                  <div className="gallery_parts_tile_col_row">
                    <img
                      src={require("../images/gallery.jpg")}
                      onClick={(e) => {
                        setViewText(viewText ? false : true);
                        
                      }}
                      // onClick={(e)=>{}}
                    />
                    <div
                      className={
                        viewText ? "gallery_parts_tile_col_row_text" : "hidden"
                      }
                    >
                      <label>contibutor</label>
                      <div className="gallery_parts_tile_col_row_text_icons">
                        <AiOutlineLike />
                        <FaRegComments />
                        <HiOutlineShare />
                        <FiMoreVertical />
                      </div>
                    </div>
                  </div>
                  <div className="gallery_parts_tile_col_row">
                    <img src={require("../images/gallery.jpg")} />
                  </div>
                  <div className="gallery_parts_tile_col_row">
                    <img src={require("../images/gallery.jpg")} />
                  </div>
                  <div className="gallery_parts_tile_col_row">
                    <img src={require("../images/gallery.jpg")} />
                  </div>
                </div>
                <div className="gallery_parts_tile_col">
                  <div className="gallery_parts_tile_col_row1">
                    <img src={require("../images/gallery.jpg")} />
                  </div>
                  <div className="gallery_parts_tile_col_row1">
                    <img src={require("../images/gallery.jpg")} />
                  </div>
                  <div className="gallery_parts_tile_col_row1">
                    <img src={require("../images/gallery.jpg")} />
                  </div>
                </div>
                <div className="gallery_parts_tile_col">
                  <div className="gallery_parts_tile_col_row1">
                    <img src={require("../images/gallery.jpg")} />
                  </div>
                  <div className="gallery_parts_tile_col_row1">
                    <img src={require("../images/gallery.jpg")} />
                  </div>
                  <div className="gallery_parts_tile_col_row1">
                    <img src={require("../images/gallery.jpg")} />
                  </div>
                </div>
                <div className="gallery_parts_tile_col">
                  <div className="gallery_parts_tile_col_row">
                    <img src={require("../images/gallery.jpg")} />
                  </div>
                  <div className="gallery_parts_tile_col_row">
                    <img src={require("../images/gallery.jpg")} />
                  </div>
                  <div className="gallery_parts_tile_col_row">
                    <img src={require("../images/gallery.jpg")} />
                  </div>
                  <div className="gallery_parts_tile_col_row">
                    <img src={require("../images/gallery.jpg")} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
