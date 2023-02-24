import "../style/style.css";
import Modal from "../components/ModalGallery";

import Footer from "../components/Footer";
import Header from "../components/Headernew";
import Latest1 from "../images/match.jpg";
import Latest2 from "../images/training.jpg";
import Latest3 from "../images/fans.jpg";
import { useState } from "react";
import { Navigate } from "react-router-dom";
export default function Gallery() {
  const [view1, setView1] = useState(true);
  const [view2, setView2] = useState(false);
  const [view3, setView3] = useState(false);
  const [view, setView] = useState(false);
  return (
    <>
      <Header />
      <Modal view={view} setView={setView} />
      <div className="gallery_main">
        <div className="gallery_main_col1">
          <div
            className={view1 ? "gallery_main_col1_col1" : "hidden"}
            style={{
              backgroundImage: `url(${Latest1})`,
            }}
          ></div>
          <div
            className={view2 ? "gallery_main_col1_col2" : "hidden"}
            style={{
              backgroundImage: `url(${Latest2})`,
            }}
          ></div>
          <div
            className={view3 ? "gallery_main_col1_col3" : "hidden"}
            style={{
              backgroundImage: `url(${Latest3})`,
            }}
          ></div>
        </div>
        <div className="gallery_main_col2">
          <div
            className="gallery_main_col2_row"
            onMouseOver={(e) => {
              setView1(view1 ? true : true);
              setView2(view2 ? false : false);
              setView3(view3 ? false : false);
            }}
            onClick={(e) => {
              setView(view ? false : true);
            }}
          >
            Matchday
          </div>
          <div
            className="gallery_main_col2_row"
            onMouseOver={(e) => {
              setView1(view1 ? false : false);
              setView2(view2 ? false : true);
              setView2(view2 ? true : true);
              setView3(view3 ? false : false);
            }}
          >
            Training
          </div>
          <div
            className="gallery_main_col2_row"
            onMouseOver={(e) => {
              setView1(view1 ? false : false);
              setView2(view2 ? false : false);
              setView3(view3 ? false : true);
              setView3(view3 ? true : true);
            }}
          >
            Fans
          </div>
        </div>
      </div>

      {/* <div className="gallery_main">
        <div className="gallery_parts">
          <h3>Matchday</h3>
          <div className="gallery_parts_tile">
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
        <div className="gallery_parts">
          <h3>Training</h3>
          <div className="gallery_parts_tile">
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
        <div className="gallery_parts">
          <h3>Fans</h3>
          <div className="gallery_parts_tile">
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
      </div> */}
      <Footer />
    </>
  );
}
