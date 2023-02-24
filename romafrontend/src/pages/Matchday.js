import React, { useState } from "react";
import Header from "../components/Headermember";
import Footer from "../components/Footer";
import Latest from "../components/Latest";
import Ad from "../components/Ad";
import Score from "../components/score";
import Livescore from "../components/Livescore";

import "../style/style.css";
import Latestnoimg from "../components/Latestnoimg";
import Modalmatchday from "../components/Modalmatchday";

export default function Matchday({viewMatchday,setViewMatchday}) {
 
  return (
    <div>
      <Header />
      <Modalmatchday viewMatchday={viewMatchday} setViewMatchday={setViewMatchday} /> 
      <div className="allpage_outer">
        <div className="allpage_main">
          <div className="allpage_main_col1">
            <div className="matchday_main_col1_row">
              <div className="matchday_main_col1_row_col1">
                <Livescore />
              </div>
              <div className="matchday_main_col1_row_col2">
                <h2>Timeline</h2>
                <div className="matchday_main_col1_row_col2_container">
                  <h3>time</h3>
                  <label>GOal</label>
                </div>
              </div>
            </div>
            <div className="matchday_main_col1_row">
              <video
                autoplay="autoplay"
                controls="all"
                loop="true"
                autoPlay
                muted
              >
                <source src={require("../videos/roma.mp4")} type="video/mp4" />
                Your browser does not support HTML video.
              </video>
            </div>
            <div className="matchday_main_col1_row2">
              <h3>Message board</h3>
              <div className="matchday_main_col1_row2_container">
                <h2>user</h2>
                <label>message</label>
              </div>
            </div>
          </div>
          <div className="allpage_main_col2">
            <div className="matchday_main_col2_row">
              <Latestnoimg />
            </div>
            <div className="matchday_main_col2_row">
              <Ad />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
